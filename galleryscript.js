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
const folderId = "1uqsPtHcSeyjLH-T92U6EK2xYISjC468h"; // Your folder ID
        const apiKey = "AIzaSyDBR2C3h4JuS385t4HFeil0TdQ1nGH_wQQ"; // Your API key

        const imagesDiv = document.getElementById("images");

        // Fetch files in the folder using Google Drive API
        fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.files && data.files.length > 0) {
                    data.files.forEach(file => {
                        if (file.mimeType.startsWith("image/")) { // Only display images
                            const img = document.createElement("img");
                            img.src = `https://drive.google.com/uc?id=${file.id}`;
                            img.alt = file.name;
                            img.style.width = "300px";
                            img.style.margin = "10px";
                            imagesDiv.appendChild(img);
                        }
                    });
                } else {
                    imagesDiv.innerHTML = "<p>No images found in this folder.</p>";
                }
            })
            .catch(error => {
                console.error("Error fetching files:", error);
                imagesDiv.innerHTML = "<p>Failed to load images.</p>";
            });
