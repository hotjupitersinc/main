// Paths to your images
const blankImage = 'off.png'; // Replace with the path to your blank image
const textImage = 'on.png'; // Replace with the path to your text image

// Reference to the image container
const imageContainer = document.getElementById('image-container');

// Timing variables (in milliseconds)
const subliminalDuration = 1; // Duration to display the text image (e.g., 10 ms)
const subliminalInterval = 300; // Interval between displays (e.g., every 3 seconds)

// Function to display the subliminal message
function showSubliminalMessage() {
// Display the text image
imageContainer.style.backgroundImage = url(${textImage});

// Revert to the blank image after the subliminal duration
setTimeout(() => {
imageContainer.style.backgroundImage = url(${blankImage});
}, subliminalDuration);
}

// Start the subliminal messaging loop
function startSubliminalMessaging() {
// Initially display the blank image
imageContainer.style.backgroundImage = url(${blankImage});

// Use setInterval to display the subliminal message at regular intervals
setInterval(showSubliminalMessage, subliminalInterval);
}

// Begin the subliminal messaging when the page loads
window.onload = startSubliminalMessaging;
