window.addEventListener('load', function() {
    // Set a timeout to allow the animation to play before hiding the screen
    setTimeout(function() {
        document.getElementById('loadingScreen').classList.add('hide');
    }, 2000); // Adjust the delay as needed
});
