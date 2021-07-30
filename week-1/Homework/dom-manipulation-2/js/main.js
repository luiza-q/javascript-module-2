// - When clicking **blue** it should change:

//   - **Jumbotron** background color to `#588fbd`
//   - **Donate a bike** button background color to `#ffa500`
//   - **Volunteer** button background color to `black` and text color to `white`

const blueButton = document.querySelector("#blueBtn");
blueButton.addEventListener("click", changeBlue);

function changeBlue () {
    const backgr = document.querySelector(".jumbotron");
    backgr.style.backgroundColor = '#588fbd';

    const donateABike = document.querySelector('#donateABike');
    donateABike.style.backgroundColor = '#ffa500';

    const volunteerButton = document.querySelector('#volunteer');
    volunteerButton.style.backgroundColor = 'black';
    volunteerButton.style.color = 'white';
}


// - When clicking **orange** it should change:

//   - **Jumbotron** background color to `#f0ad4e`
//   - **Donate a bike** button background color to `#5751fd`
//   - **Volunteer** button background color to `#31b0d5` and text color to `white`


const orangeButton = document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", changeOrange);

function changeOrange () {
    const backgr = document.querySelector(".jumbotron");
    backgr.style.backgroundColor = '#f0ad4e';

    const donateABike = document.querySelector('#donateABike');
    donateABike.style.backgroundColor = '#5751fd';

    const volunteerButton = document.querySelector('#volunteer');
    volunteerButton.style.backgroundColor = '#31b0d5';
    volunteerButton.style.color = 'white';
}

// - When clicking **green** it should change:
//   - **Jumbotron** background color to `#87ca8a`
//   - **Donate a bike** button background color to `black`
//   - **Volunteer** button background color to `#8c9c08`

const greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", changeGreen);

function changeGreen () {
    const backgr = document.querySelector(".jumbotron");
    backgr.style.backgroundColor = '#87ca8a';

    const donateABike = document.querySelector('#donateABike');
    donateABike.style.backgroundColor = 'black';

    const volunteerButton = document.querySelector('#volunteer');
    volunteerButton.style.backgroundColor = '#8c9c08';
}

// Just below the buttons, there's a form called **Register with us**.

// Continue working in `./js/main.js` to add the following functionality:

// When the submit button is pressed, it should check that all the form fields are valid:

// - The **Your name**, **Email** and **Describe yourself** fields need to be non-empty 
//(Hint: their `value` length has to be greater than zero)
// - For the **Email** field also check if it contains the `@` character

// For all the fields that invalid, it should make their background color `red`.
// IF all the fields are valid, when you click **Submit** it should:

// - Display an alert to thank you for filling out the form
// - Blank out (make empty) all the text fields

// **Important hint:** In your function that handles clicks on the `Submit` button you will need to call 
//`event.preventDefault()` to stop the browser from refreshing the page. 
// To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault


const el = document.querySelector('#registerForm');

 

const submitForm = (e) => {
    e.preventDefault();
    
    const emailInput = document.querySelector('#exampleInputEmail1');
    if (emailInput.value.includes('@')) {
        alert("thank you for filling out the form");
        emailInput.value = '';
    } else {
        emailInput.style.backgroundColor = 'red';
    }

    const yourName = document.querySelector('#example-text-input');
    if (yourName.value.length > 0) {
        alert("thank you for filling out the form");
        yourName.value = '';
    } else {
        yourName.style.backgroundColor = 'red';
    }

    const describeYourself = document.querySelector('#exampleTextarea');
    if (describeYourself.value.length > 0) {
       alert("thank you for filling out the form");
       describeYourself.value = '';
    } else {
        describeYourself.style.backgroundColor = 'red';
    }


}

el.addEventListener('submit', submitForm); 