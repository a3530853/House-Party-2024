const videos = document.querySelectorAll('.gallery-item video');
    const playButtons = document.querySelectorAll('.playButton');

    playButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const video = videos[index];
            
            // Toggle play/pause for each video
            if (video.paused) {
                video.play();
                button.innerText = 'Pause';
            } else {
                video.pause();
                button.innerText = 'Play';
            }
        });
    });