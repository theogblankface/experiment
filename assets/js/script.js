const consentPopup = document.getElementById('consent');
const acceptBtn = document.getElementById('accept-btn');
const declineBtn = document.getElementById('decline-btn');
const xpAudio = document.querySelector('audio');

declineBtn.addEventListener('click', () => {
    // Try to go back in history, if not, go to Google
    if (document.referrer) {
        window.location.href = document.referrer;
    } else {
        window.location.href = 'https://www.google.com';
    }
});

acceptBtn.addEventListener('click', () => {
    consentPopup.style.display = 'none'; // Hide the overlay
    // Modern browsers require a click to play audio, which is why autoplay didn't work outside of the live server 
    // Clicking starts the XP sound
    xpAudio.play(); 
});

const hoverLinks = document.querySelectorAll('.hoverLink');
// Loops through each link
hoverLinks.forEach((link) => {
    // For each link, find the audio element that is its "sibling"
    const audio = link.parentElement.querySelector('audio');

    link.addEventListener('mouseenter', () => {
        // Reset audio to start (in case user hovers quickly)
        audio.currentTime = 0; 
        audio.play();
    });

    link.addEventListener('mouseleave', () => {
        // Stop the sound when the mouse leaves
        audio.pause();
    });
});