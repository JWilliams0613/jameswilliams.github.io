
/**
 * Dynamically adds the navigation bar to the header.
 * @type {void}
 */
document.getElementById('header').innerHTML = `
    <nav class="nav">
        <h1>Navigation</h1>
            <a href="index.html">Home</a>
            <a href="play.html">Play</a>
            <a href="contact.html">Contact</a>
    </nav>
`;

/**
 * Dynamically adds the footer content.
 * @type {void}
 */
document.getElementById('footer').innerHTML = `
    <p>&copy; 2024 Drum Kit. All rights reserved.<br/> Created by Jamie Williams</p>
`;

/**
 * Logs a specific message based on the current page title.
 */
if (document.title.includes('Home')) {
    console.log('Welcome to the Drum Kit Home page!');
}

if (document.title.includes('Play')) {
    console.log('Get ready to play the drum kit!');
}

if (document.title.includes('Contact')) {
    console.log('Feel free to reach out to us!');
}

/**
 * Removes the 'playing' class from a key element after the transition ends.
 * @param {TransitionEvent} e - The transition event triggered when the animation ends.
 */
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

 /**
 * Plays the drum sound associated with a keyboard key press.
 * @param {KeyboardEvent} e - The keyboard event triggered on key press.
 */
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  /**
 * Adds event listeners to each key for handling animations and sound playback.
 * @type {void}
 */
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

  /**
 * Validates the contact form before submission.
 * @type {void}
 */
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Prevent form from submitting
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const email = document.getElementById('email').value.trim();

    let valid = true;

    // Validate First Name
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = alert('First Name is required.');
        valid = false;
    }

     /**
     * Validates the email address format.
     * @constant {RegExp} emailPattern - The regular expression for validating email addresses.
     */
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = alert('Please enter a valid email address.');
        valid = false;
    }

    // If valid, alert success 
    if (valid) {
        alert('Form submitted successfully!');
        // Reset form if needed
        document.getElementById('contactForm').reset();
    }
});