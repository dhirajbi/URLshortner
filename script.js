function generateShortUrl() {
    const inputUrl = document.getElementById("input-url").value;

    // Check if the input URL is valid
    if (inputUrl) {
        // Use the TinyURL API to shorten the URL
        fetch(`https://api.tinyurl.com/create?url=${encodeURIComponent(inputUrl)}&domain=tiny.one`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer LVlopK0v6KZ8Bly1GPTxEMi62fscdj7PFlaspVnvM1gFa114inO3eIg6dG1J' // Replace with your TinyURL API key
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.data) {
                document.getElementById("output-url").value = data.data.tiny_url;
            } else {
                alert("Error shortening URL. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to shorten URL. Please try again.");
        });
    } else {
        alert("Please enter a valid URL");
    }
}

function copyToClipboard() {
    const outputUrl = document.getElementById("output-url");
    if (outputUrl.value) {
        outputUrl.select();
        outputUrl.setSelectionRange(0, 99999);  // For mobile devices
        document.execCommand("copy");
        alert("Short URL copied to clipboard: " + outputUrl.value);
    } else {
        alert("No URL to copy!");
    }
}
