const slider = document.querySelector(".slider");
const trail = document.querySelectorAll(".trail div"); 
let value = 0;
let start;

const trailValues = [0, 20, 40, 60, 80];
const intervalDuration = 4000;

// Function to slide forward or backward
const slide = (direction) => {
    clearInterval(start); // Clear the interval
    if (direction === "increase") {
        value = (value + 20) % 100; // Loop back to 0 after 80
    } else {
        value = (value - 20 + 100) % 100; // Loop back to 80 after 0
    }

    // Update trail and move slider
    trail.forEach(cur => cur.classList.remove("active")); // Remove active class from all trails
    const trailValue = trailValues.indexOf(value); // Get current trail index
    trail[trailValue].classList.add("active"); // Add active class to the current trail
    slider.style.transform = `translateX(-${value}%)`; // Move the slider

    // Restart the interval for automatic sliding
    start = setInterval(() => slide("increase"), intervalDuration);
};

// Start the automatic sliding interval
start = setInterval(() => slide("increase"), intervalDuration);

// Next and Previous button function
document.querySelectorAll("svg").forEach(cur => {
    cur.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default action (refresh)
        const direction = cur.classList.contains("next") ? "increase" : "decrease";
        slide(direction);
    });
});

// Function to slide when a trail is clicked
const clickCheck = (e) => {
    e.preventDefault(); // Prevent default action (refresh)
    clearInterval(start);
    trail.forEach(cur => cur.classList.remove("active")); // Remove active class from all trails

    const clickedTrail = e.target; // Get clicked trail
    clickedTrail.classList.add("active"); // Add active class to clicked trail

    // Update slide value based on clicked trail
    value = trailValues[Array.from(trail).indexOf(clickedTrail)];
    slider.style.transform = `translateX(-${value}%)`; // Move the slider
};

// Add click event to all trails
trail.forEach(cur => cur.addEventListener("click", clickCheck));

// Swipe detection variables
let startX = 0;
let endX = 0;

// Function to handle touch start
const handleTouchStart = (e) => {
    startX = e.touches[0].clientX; // Get the starting touch position
};

// Function to handle touch move
const handleTouchMove = (e) => {
    endX = e.touches[0].clientX; // Get the current touch position
};

// Function to handle touch end
const handleTouchEnd = () => {
    if (startX - endX > 50) {
        // Swipe left
        slide("increase");
    } else if (endX - startX > 50) {
        // Swipe right
        slide("decrease");
    }
};

// Add touch event listeners to the slider
slider.addEventListener("touchstart", handleTouchStart);
slider.addEventListener("touchmove", handleTouchMove);
slider.addEventListener("touchend", handleTouchEnd);
