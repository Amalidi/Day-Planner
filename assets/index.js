console.log("hello")



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

const getEventForTimeBlock = () => {

}


const renderTimeBlocks = () => {
    const timeBlocks = $('#time-blocks')

    const renderTimeBlock = (workingHours) => {
        console.log(workingHours);
        // create time block
        const timeBlock = `<div class="row p-2">
        <div class="col-md-1 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">${workingHours.label} </div>
        <textarea class="col-md-9 col-sm-12" rows="3">${getEventForTimeBlock(workingHours.key)}</textarea>
        <div  class="col-md-2 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">
        <button type="button" data-hour=${workingHours.key} class="btn btn-success">Save</button>
        </div>`;
        // append time block
        timeBlocks.append(timeBlock)
        
      };
      workingHours.forEach(renderTimeBlock);

    };

const onReady = () => {
    console.log("ready")
    renderTimeBlocks();
}

$(document).ready(onReady);



























// display current date and time from moment.js
// const currentDate = $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
const renderDate = () => {
    const currentDate = $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    $("#currentDay").append(currentDate);
  };
  


// to click the button the textarea will need to be targetted
// then save it in local storage
// add an event Listener to the container div
// on click store in local storage 
// add a data attribute on the button (eg. data-key = 17)

//function to handle click on save buttons
// const saveButtonClick = (event) => {
//     //gets the data-key for the button clicked
//     const targetKey = $(event.target).attr("data-key");
//     //gets the value of the corresponding textarea (textarea with same data-key)
//     const taskValue = $(`textarea[data-key=${targetKey}]`).val();
//     //sets the data-key and its value in local storage (for data persistence)
//     writeToLS(targetKey, taskValue);
//   };

const namebtn = $("#All-btn");

// const handleAllButtonClick = () => {
//     console.log("view btn click");
// };

// console.log(namebtn)

// $(".saveBtn").on("click", function () {
//     //get nearby values.
//     console.log(this);
//     var text = $(this).siblings(".description").val();
//     var time = $(this).parent().attr("id");

//     //set items in local storage.
//     localStorage.setItem(time, text);
// })



//    //function to render the time blocks on the page
//    const renderTimeBlock = () => {
//     //fetches the current hour with moment.js
//     const currentTime = moment().hour();
  
//     //each time block
//     const renderEachBlock = (each) => {
//         $("#container").append(
//           $("<div>")
//             .addClass("row time-block")
//             .addClass("row")
//             .attr("id", `timer-box-${each.key}`)
//             .attr("data-key", `${each.key}`)
//             .append(
//               $("<span>")
//                 .addClass("col-md-1 hour")
//                 .attr("id", `timer-hour-${each.key}`)
//                 .attr("data-key", `${each.key}`)
//                 .html(`${each.label}`),
//               $("<textarea>")
//                 .addClass(`col-md-10 description}`)
//                 .attr("data-key", `${each.key}`),
//               $("<button>")
//                 .addClass("btn saveBtn col-md-1")
//                 .attr("id", `All-btn-${each.key}`)
//                 .attr("type", "button")
//                 .attr("data-key", `${each.key}`)
//                 .attr("data-purpose", "save")
//                 .html('<i class="fas fa-save"></i>'),
//             )
//         );
//     };
  
//     //stored in the working hours array
//     workingHours.forEach(renderEachBlock);
//   };


//Main function triggered on load
const renderPlanner = () => {
    // render date in header
    renderDate();
    renderTimeBlock();
  };
  
  //instruction on load of page
  $(window).on("load", renderPlanner);
