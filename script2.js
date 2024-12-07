// Paths to your images
const blankImage2 = 'on.png'; // Replace with the path to your blank image
const textImage2 = 'gocnn.png'; // Replace with the path to your text image

// Reference to the image container
const imageContainer2 = document.getElementById('image-container2');

// Timing variables (in milliseconds)
const subliminalDuration2 = 1; // Duration to display the text image (e.g., 10 ms)
const subliminalInterval2 = 1; // Interval between displays (e.g., every 3 seconds)

// Function to display the subliminal message
function showSubliminalMessage2() {
// Display the text image
imageContainer2.style.backgroundImage = url(${textImage2});

// Revert to the blank image after the subliminal duration
setTimeout(() => {
imageContainer2.style.backgroundImage = url(${blankImage2});
}, subliminalDuration2);
}

// Start the subliminal messaging loop
function startSubliminalMessaging2() {
// Initially display the blank image
imageContainer2.style.backgroundImage = url(${blankImage2});

// Use setInterval to display the subliminal message at regular intervals
setInterval(showSubliminalMessage2, subliminalInterval2);
}

// Begin the subliminal messaging when the page loads
window.onload = startSubliminalMessaging;
