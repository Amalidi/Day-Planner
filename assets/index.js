console.log("hello")

// render each time block
const renderTimeBlocks = () => {};

const workingHours = [
    {
        label: "9AM" , 
        key : 9
    },

    {
        label: "10AM" , 
        key : 10
    },

    {
        label: "11AM" , 
        key : 11
    },

    {
        label: "12PM" , 
        key : 12
    },

    {
        label: "1PM" , 
        key : 13
    },

    {
        label: "2PM" , 
        key : 14
    },

    {
        label: "3PM" , 
        key : 15
    },

    {
        label: "4PM" , 
        key : 16
    },

    {
        label: "5PM" , 
        key : 17
    },

]

// display current date and time from moment.js
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


// to click the button the textarea will need to be targetted
// then save it in local storage
// add an event Listener to the container div
// on click store in local storage 
// add a data attribute on the button (eg. data-key = 17)

const namebtn = $("#All-btn");

const handleAllButtonClick = () => {
    console.log("view btn click");
};

//function to handle click on save buttons


namebtn.click(handleAllButtonClick);

console.log(namebtn)






