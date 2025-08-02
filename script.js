// Link database (would be links.json in real implementation)
const links = {
    "abc123": {
        "image": "short.jpg",
        "destination": "https://example.com/your-long-url-here"
    },
    "test": {
        "image": "short.jpg",
        "destination": "https://google.com"
    }
};

// Check if short code exists and redirect
function checkAndRedirect(shortCode) {
    if(links[shortCode]) {
        // Redirect to intermediate page
        window.location.href = `/redirect.html?code=${shortCode}`;
    } else {
        // Redirect to home if not found
        window.location.href = '/';
    }
}

// Load the redirect page content
function loadRedirectPage(shortCode) {
    const linkData = links[shortCode];
    if(linkData) {
        document.getElementById('redirect-image').src = linkData.image;
        document.getElementById('destination-link').href = linkData.destination;
        
        // Extract hostname for display
        const host = new URL(linkData.destination).hostname;
        document.getElementById('destination-host').textContent = host;
    } else {
        window.location.href = '/';
    }
}
