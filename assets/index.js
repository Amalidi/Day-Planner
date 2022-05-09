
const timeBlocks = $("#time-blocks")

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
const renderDate = () => {
    const currentDate = $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    $("#currentDay").append(currentDate);
  };

const getClassName = (workingHours) => {
   const currentHour = moment().hour();
    // when workingHours is present
    if(workingHours ===currentHour){
        return "present";
    }
    if(workingHours >currentHour){
    // when workingHours is future
    return "future"
    }
    // when workingHours 
    return "past"
};


const renderTimeBlocks = () => {
    

    const renderTimeBlock = (workingHours) => {
        // create time block
        const timeBlock = `<div class="row p-2 my-2 ${getClassName(workingHours.key)}">
        <div class="col-md-1 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">${workingHours.label} </div>
        <textarea class="col-md-9 col-sm-12" rows="3" data-textarea-key=${workingHours.key}>${getEventForTimeBlock(workingHours.key)}</textarea>
        <div  class="col-md-2 col-sm-12 texht-center my-1 d-flex flex-column justify-content-center">
        <button type="button" data-hour=${workingHours.key} class="btn btn-success">Save</button>
        </div>`;
        // append time block
        timeBlocks.append(timeBlock)
};
      workingHours.forEach(renderTimeBlock);

    };

const onReady = () => {
    renderTimeBlocks();
    renderDate();
}
const saveToLS = (event) =>{
    const target = $(event.target)
    if(target.is("button")){
        const key = target.attr("data-hour")
        const value = $(`textarea[data-textarea-key = '${key}']`).val().trim();

        const planner = readFromLocalStorage("planner", {});

        planner[key] = value;

        writeToLocalStorage("planner", planner);
    }
};

const readFromLocalStorage = (key, defaultValue) => {
    // get from LS using key name
    const dataFromLS = localStorage.getItem(key);
  
    // parse data from LS
    const parsedData = JSON.parse(dataFromLS);
  
    if (parsedData) {
      return parsedData;
    } else {
      return defaultValue;
    }
  };
  
  const writeToLocalStorage = (key, value) => {
    // convert value to string
    const stringifiedValue = JSON.stringify(value);
  
    // set stringified value to LS for key name
    localStorage.setItem(key, stringifiedValue);
  };
  
  const getEventForTimeBlock = (workingDay) => {
    const planner = readFromLocalStorage("planner",{});
    return planner[workingDay] || "";
  };

timeBlocks.click(saveToLS)
$(document).ready(onReady);