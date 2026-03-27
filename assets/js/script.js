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