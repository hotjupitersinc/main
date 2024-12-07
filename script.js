// Paths to your images
const blankImage = 'blank.jpg'; // Replace with the path to your blank image
const textImage = 'text.jpg';   // Replace with the path to your text image

// Reference to the image container
const imageContainer = document.getElementById('image-container');

// Timing variables (in milliseconds)
const subliminalDuration = 10;      // Duration to display the text image (e.g., 10 ms)
const subliminalInterval = 3000;    // Interval between displays (e.g., every 3 seconds)

// Function to display the subliminal message
function showSubliminalMessage() {
  // Display the text image
  imageContainer.style.backgroundImage = `url(${textImage})`;

  // Revert to the blank image after the subliminal duration
  setTimeout(() => {
    imageContainer.style.backgroundImage = `url(${blankImage})`;
  }, subliminalDuration);
}

// Start the subliminal messaging loop
function startSubliminalMessaging() {
  // Initially display the blank image
  imageContainer.style.backgroundImage = `url(${blankImage})`;

  // Use setInterval to display the subliminal message at regular intervals
  setInterval(showSubliminalMessage, subliminalInterval);
}

// Begin the subliminal messaging when the page loads
window.onload = startSubliminalMessaging;
