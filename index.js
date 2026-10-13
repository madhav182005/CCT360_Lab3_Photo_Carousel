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

/* Story 2 - The Caffeine Crash */
function showCrashStory() {

    storyTitle.innerHTML = "The Caffeine Crash";

    storyDescription.innerHTML =
        "The student starts the day productive, grabs another coffee to keep going, but eventually runs out of energy.";

    image1.src = "images/productive.jpg";
    image2.src = "images/coffee.jpg";
    image3.src = "images/tired.jpg";

    image1.alt = "The student working productively";
    image2.alt = "A cup of coffee on the student's desk";
    image3.alt = "The student feeling tired while working";

    caption1.innerHTML =
        "Starting Strong - The student is focused and getting work done.";

    caption2.innerHTML =
        "One More Coffee - A little more energy should keep the momentum going.";

    caption3.innerHTML =
        "The Crash - The energy wears off and the student is exhausted.";

}

// Event Listeners
positiveButton.addEventListener("click", showPositiveStory);
crashButton.addEventListener("click", showCrashStory);
// The Event Listeners attaches an event handler to a specific HTML element or DOM object. 
// It tells the browser to look out for a specific user action like a click or hover
// and then execute an assigned function when that action occurs so its interactive and dynamic. 

// In this case, when the user clicks on the positiveButton or crashButton, it will trigger the respective function to display the corresponding story.
