
let timeout;

// Array of image URLs (this can be any valid image URLs or placeholders)
const images = [
    "https://via.placeholder.com/600x300/ff7f7f/333333?text=Image+1",
    "https://via.placeholder.com/600x300/ff9f00/333333?text=Image+2",
    "https://via.placeholder.com/600x300/00aaff/333333?text=Image+3",
    "https://via.placeholder.com/600x300/30ff7f/333333?text=Image+4"
];

let currentIndex = 0; // Initial index of the current image

// Function to simulate showing the next image in the console
function showNextImage() {
  for(currentIndex;currentIndex<4;currentIndex++){
    console.log(images[currentIndex])
  }
}

// Initialize the slideshow and make it cycle every 3 seconds
setInterval(showNextImage, 3000); // Change image every 3 seconds

  /** // Clear the console (optional, to simulate a "transition" effect)
    console.clear();

    // Display the current image URL
    console.log("Displaying image: " + images[currentIndex]);

    // Update the current index (loop back to 0 after the last image)
    currentIndex = (currentIndex + 1) % images.length; */