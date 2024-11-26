document.getElementById('rsvpForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission and redirection
    console.log('Form submission intercepted.'); // Debugging statement

    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('formMessage').classList.remove('hidden');
            this.reset(); // Reset form fields
            document.getElementById('formMessage').textContent = "Thank you! Your registration has been received.";
            alert("Thank you! Your registration has been received.");
        } else {
            alert('There was an issue with your submission. Please try again.');
        }
    }).catch(error => {
        alert('There was an issue with your submission. Please try again.');
    });
});
window.addEventListener('load', function() {
    // Set a timeout to allow the animation to play before hiding the screen
    setTimeout(function() {
        document.getElementById('loadingScreen').classList.add('hide');
    }, 2000); // Adjust the delay as needed
});
