// CCT360 Lab 3 Photo Carousel
// The Coffee Effect


// Buttons
let positiveButton = document.getElementById("positive-button");
let crashButton = document.getElementById("crash-button");

// Story text
let storyTitle = document.getElementById("story-title");
let storyDescription = document.getElementById("story-description");

// Images
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

// Captions
let caption1 = document.getElementById("caption1");
let caption2 = document.getElementById("caption2");
let caption3 = document.getElementById("caption3");


/* Story 1 - Coffee Saves the Day */
function showPositiveStory() {     

    storyTitle.innerHTML = "Coffee Saves the Day";

    storyDescription.innerHTML =
        "A tired student gets some coffee and finds the energy to finish his work.";

    image1.src = "images/tired.jpg";
    image2.src = "images/coffee.jpg";
    image3.src = "images/productive.jpg";

    image1.alt = "A tired student trying to work";
    image2.alt = "A cup of coffee on the student's desk";
    image3.alt = "The student working productively";

    caption1.innerHTML =
        "Running on Empty - The work needs to get done, but the energy is gone.";

    caption2.innerHTML =
        "Quick Coffee Break - A little caffeine might help.";

    caption3.innerHTML =
        "Back to Work - Energy restored. Time to finish the assignment.";

}

