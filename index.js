// CCT360 Lab 3 Photo Carousel
// The Coffee Effect


// Story Selection Buttons
let positiveButton = document.getElementById("positive-button");
let crashButton = document.getElementById("crash-button");

// Carousel buttons
let previousButton = document.getElementById("previous-button");
let nextButton = document.getElementById("next-button");

// Story text
let storyTitle = document.getElementById("story-title");
let storyDescription = document.getElementById("story-description");

// Carousel content
let storyImage = document.getElementById("story-image");
let storyStage = document.getElementById("story-stage");
let storyCaption = document.getElementById("story-caption");
let slideNumber = document.getElementById("slide-number");

// Current story and slide
let currentStory = "positive";
let currentSlide = 1;


//Story 1 - Coffee Saves the Day
function showPositiveStory() {

    currentStory = "positive";
    currentSlide = 1;

    storyTitle.innerHTML = "Coffee Saves the Day";

    storyDescription.innerHTML =
        "A tired student gets some coffee and finds the energy to finish his work.";

    updateCarousel();
}


//Story 2 - The Caffeine Crash
function showCrashStory() {

    currentStory = "crash";
    currentSlide = 1;

    storyTitle.innerHTML = "The Caffeine Crash";

    storyDescription.innerHTML =
        "The student starts the day productive, grabs another coffee to keep going, but eventually runs out of energy.";

    updateCarousel();
}

//Move to the next image
function nextSlide() {

    if (currentSlide < 3) {
        currentSlide += 1;
    }

    updateCarousel();
}

// Move to the previous image
function previousSlide() {

    if (currentSlide > 1) {
        currentSlide -= 1;
    }

    updateCarousel();
}

//Update the carousel
function updateCarousel() {

    //Positive Story
    if (currentStory == "positive") {

        if (currentSlide == 1) {

            storyImage.src = "images/tired.jpg";

            storyImage.alt = "A tired student trying to work";

            storyStage.innerHTML = "Beginning";

            storyCaption.innerHTML =
                "Running on Empty - The work needs to get done, but the energy is gone.";
        }

       if (currentSlide == 2) {

            storyImage.src = "images/coffee.jpg";

            storyImage.alt = "A cup of coffee on the student's desk";

            storyStage.innerHTML = "Middle";

            storyCaption.innerHTML =
                "Quick Coffee Break - A little caffeine might help.";
        }
        
        if (currentSlide == 3) {

            storyImage.src = "images/productive.jpg";

            storyImage.alt = "The student working productively";

            storyStage.innerHTML = "End";

            storyCaption.innerHTML =
                "Back to Work - Energy restored. Time to finish the assignment.";
        }

    } 
    
    //Crash Story
    if (currentStory == "crash") {

        if (currentSlide == 1) {

            storyImage.src = "images/productive.jpg";

            storyImage.alt = "The student working productively";

            storyStage.innerHTML = "Beginning";

            storyCaption.innerHTML =
                "Starting Strong - The student is focused and getting work done.";
        }
    
        if (currentSlide == 2) {

            storyImage.src = "images/coffee.jpg";

            storyImage.alt = "A cup of coffee on the student's desk";

            storyStage.innerHTML = "Middle";

            storyCaption.innerHTML =
                "One More Coffee - A little more energy should keep the momentum going.";
        }

        if (currentSlide == 3) {

            storyImage.src = "images/tired.jpg";

            storyImage.alt = "The student feeling tired while working";

            storyStage.innerHTML = "End";

            storyCaption.innerHTML =
                "The Crash - The energy wears off and the student is exhausted.";
        }

    }

    //Slide number
    slideNumber.innerHTML = currentSlide + " of 3";

    //Disable buttons at the beginning and end
    if (currentSlide == 1) {

        previousButton.disabled = true;
    }

    else {

        previousButton.disabled = false;
    }

    if (currentSlide == 3) {

        nextButton.disabled = true;
    }

    else {

        nextButton.disabled = false;
    }

}


// Event Listeners
positiveButton.addEventListener("click", showPositiveStory);

crashButton.addEventListener("click", showCrashStory);

previousButton.addEventListener("click", previousSlide);

nextButton.addEventListener("click", nextSlide);

// The Event Listeners attaches an event handler to a specific HTML element or DOM object. 
// It tells the browser to look out for a specific user action like a click or hover
// and then execute an assigned function when that action occurs so its interactive and dynamic. 

// In this case, when the user clicks on the positiveButton or crashButton, it will trigger the respective function to display the corresponding story.


// Display the first slide when the page loads
updateCarousel();