// Paths to your images
const blankImage = 'off.png'; // Replace with the path to your blank image
const textImage = 'on.png';   // Replace with the path to your text image

// Reference to the image container
const imageContainer = document.getElementById('image-container');

// Timing variables (in milliseconds)
const subliminalDuration = 0.01;      // Duration to display the text image (e.g., 0.01 ms or 10 μs)
const subliminalInterval = 1000;      // Interval between displays (e.g., every 1 second)

// Function to revert to the blank image after the subliminal duration
function revertToBlankImage(startTime) {
  // Use requestAnimationFrame to check elapsed time with sub-millisecond precision
  function checkTime(timestamp) {
    const elapsed = timestamp - startTime;

    if (elapsed >= subliminalDuration) {
      // Revert to the blank image
      imageContainer.style.backgroundImage = `url(${blankImage})`;
    } else {
      // Continue checking
      requestAnimationFrame(checkTime);
    }
  }

  // Start the checking process
  requestAnimationFrame(checkTime);
}

// Function to display the subliminal message
function showSubliminalMessage() {
  // Display the text image
  imageContainer.style.backgroundImage = `url(${textImage})`;

  // Get the current timestamp using performance.now()
  const startTime = performance.now();

  // Revert to the blank image after the subliminal duration
  revertToBlankImage(startTime);
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
