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
const folderId = "1dLka9CBmhbfon_i8efGiqqdBmEgPoec3"; // Your folder ID
        const apiKey = "AIzaSyDBR2C3h4JuS385t4HFeil0TdQ1nGH_wQQ"; // Your API key

        const filesDiv = document.getElementById("files");

        // Fetch files in the folder using Google Drive API
        fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.files && data.files.length > 0) {
                    data.files.forEach(file => {
                        if (file.mimeType.startsWith("image/")) {
                            // Render images
                            const img = document.createElement("img");
                            img.src = `https://drive.google.com/uc?id=${file.id}`;
                            img.alt = file.name;
                            img.style.width = "300px";
                            img.style.margin = "10px";
                            filesDiv.appendChild(img);
                        } else if (file.mimeType.startsWith("video/")) {
                            // Render videos
                            const video = document.createElement("video");
                            video.src = `https://drive.google.com/uc?id=${file.id}`;
                            video.controls = true;
                            video.style.width = "300px";
                            video.style.margin = "10px";
                            filesDiv.appendChild(video);
                        } else {
                            console.log(`Skipping unsupported file type: ${file.name} (${file.mimeType})`);
                        }
                    });
                } else {
                    filesDiv.innerHTML = "<p>No files found in this folder.</p>";
                }
            })
            .catch(error => {
                console.error("Error fetching files:", error);
                filesDiv.innerHTML = "<p>Failed to load files.</p>";
            });
