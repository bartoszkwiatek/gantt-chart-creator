
var taskObjectsList = [];

class Task {
    constructor(taskName, order) {
        this.taskName = taskName;
        this.order = order;
        this.assignedDates = '';
        taskObjectsList.push(this);
    }

    changeTaskName(newTaskName) {
        this.taskName = newTaskName;
    }

    changeOrder(newOrder) {
        this.order = newOrder;
    }

    assignDates(start, end=null) {
        this.dates = [start, end];
    }
}

var globalDate = new Date();
const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdaysList = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
const calendar = document.getElementById("calendar");
// var currentNumberOfMonths = document.getElementsByClassName("months").length;
// var currentNumberOfWeeks = document.getElementsByClassName("weeks").length;
// var currentNumberOfDays = document.getElementsByClassName("days").length;
var presentWeekCounter = 1;
var presentMonthCounter = 1;
var taskCounter = 0;
var listOfDays = ["Dates:"];


document.getElementById("add-task-button").addEventListener("click", function() {addTask();});

document.addEventListener('DOMContentLoaded', function() {createFirstDay(globalDate); createMoreDays(globalDate, 60)});

document.getElementById("scroll-right-button").addEventListener("click", function() { moveRight();});
document.getElementById("scroll-left-button").addEventListener("click", moveLeft);


var loadMoreCondition = 40 * 7 ;

function moveRight() {
    //move right
    calendar.scrollLeft += 40 * 7;   

    // when first time past certain point - load more days
    if (calendar.scrollLeft>loadMoreCondition) {
        createMoreDays(globalDate, 7);
        loadMoreCondition = calendar.scrollLeft;  
        addCells();
    }

}

function moveLeft() {
    calendar.scrollLeft -= 210;
}

function createFirstDay(someDate) {
    var date = someDate;
    var currentNumberOfMonths = document.getElementsByClassName("months").length;
    var currentNumberOfWeeks = document.getElementsByClassName("weeks").length;
    var currentNumberOfDays = document.getElementsByClassName("days").length;
    var today = date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear();
    listOfDays.push(today);
    
        // 1. Creating month
        var newMonth = document.createElement("div"); 
        newMonth.setAttribute("class","months");
        newMonth.setAttribute("id","month" + (currentNumberOfMonths));
        newMonth.setAttribute("title",monthsList[date.getMonth()]);
        var monthDescription = document.createTextNode(monthsList[date.getMonth()]); 
        newMonth.appendChild(monthDescription);  
        document.getElementById("calendar").appendChild(newMonth);



        // 2. Creating week
        var newWeek = document.createElement("div"); 
        newWeek.setAttribute("class","weeks");
        newWeek.setAttribute("id","week" + (currentNumberOfWeeks));
        newWeek.setAttribute("title","Week" + " " + date.getWeek());


        var weekDescription = document.createTextNode("Week" + " " + date.getWeek()); 
        newWeek.appendChild(weekDescription);  
        document.getElementById("calendar").appendChild(newWeek); 


        // 3. Creating days
        var newDay = document.createElement("div");
        newDay.setAttribute("class","days");
        newDay.setAttribute("id","day"+currentNumberOfDays);
        newDay.setAttribute("title",today);
        var newDayDescription = document.createTextNode(date.getDate());
        newDay.appendChild(newDayDescription);
        document.getElementById("calendar").appendChild(newDay); 


        // 4. Create short day names
        var newShort = document.createElement("div");
        newShort.setAttribute("class","short");
        newShort.setAttribute("id","short-day"+currentNumberOfDays);
        newShort.setAttribute("title",today);
        var shortDayDescription = document.createTextNode(weekdaysList[date.getDay()]); 
        newShort.appendChild(shortDayDescription);  
        document.getElementById("calendar").appendChild(newShort); 

        // set grid coulmns 
        document.documentElement.style.setProperty("--days",1);

        // move date to another day
        date.setDate((date.getDate()+1));
    }

function createDay(someDate) {

    var date = someDate;
    var dateYesterday = new Date();
    dateYesterday.setTime((date.getTime()-86400000)); 
    var today = date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear();
    listOfDays.push(today);



    var currentNumberOfMonths = document.getElementsByClassName("months").length;
    var currentNumberOfWeeks = document.getElementsByClassName("weeks").length;
    var currentNumberOfDays = document.getElementsByClassName("days").length;

    // 1. Add month
        // check if today is the same month as day before
    if (date.getMonth()==dateYesterday.getMonth()) {
        presentMonthCounter ++;
        document.getElementById("month"+(currentNumberOfMonths-1)).style.setProperty("grid-column", "span " + presentMonthCounter);
    } else {
         // Creating month
        var newMonth = document.createElement("div"); 
        newMonth.setAttribute("class","months");
        newMonth.setAttribute("id","month" + (currentNumberOfMonths));
        newMonth.setAttribute("title",monthsList[date.getMonth()]);
        var monthDescription = document.createTextNode(monthsList[date.getMonth()]); 
        newMonth.appendChild(monthDescription);  
        document.getElementById("calendar").appendChild(newMonth); 
        presentMonthCounter = 1;
    }


    // 2. Add week
    if (date.getWeek()==dateYesterday.getWeek()) {
        presentWeekCounter ++;
        document.getElementById("week"+(currentNumberOfWeeks-1)).style.setProperty("grid-column", "span " + presentWeekCounter);
    } else {
        var newWeek = document.createElement("div"); 
        newWeek.setAttribute("class","weeks");
        newWeek.setAttribute("id","week" + (currentNumberOfWeeks));
        newWeek.setAttribute("title","Week" + " " + date.getWeek());
        var weekDescription = document.createTextNode("Week" + " " + date.getWeek()); 
        newWeek.appendChild(weekDescription);  
        document.getElementById("calendar").appendChild(newWeek); 
        presentWeekCounter = 1;
    }

    // 3. Creating days
    var newDay = document.createElement("div");
    newDay.setAttribute("class","days");
    newDay.setAttribute("id","day"+currentNumberOfDays);
    newDay.setAttribute("title",today);
    var newDayDescription = document.createTextNode(date.getDate());
    newDay.appendChild(newDayDescription);
    document.getElementById("calendar").appendChild(newDay); 


    // 4. Create short day names
    var newShort = document.createElement("div");
    newShort.setAttribute("class","short");
    newShort.setAttribute("id","short-day"+currentNumberOfDays);
    newShort.setAttribute("title",today);
    var shortDayDescription = document.createTextNode(weekdaysList[date.getDay()]); 
    newShort.appendChild(shortDayDescription);  
    document.getElementById("calendar").appendChild(newShort); 

    // set grid coulmns 
    document.documentElement.style.setProperty("--days", currentNumberOfDays+1);

    // move date to another day
    date.setDate((date.getDate()+1));
}

function createMoreDays(someDate, howManyDays) {
    for (var i = 1; i <= howManyDays; i++) {
        createDay(someDate);   
    }
}


// function adding another task
function addTask () { 


  // create variable which tells us how many tasks we currently have and how many days there are
    var currentNumberOfDays = document.getElementsByClassName("days").length;
    var newTaskNumber = taskCounter + 1;

    new Task(("Task no. "+ newTaskNumber), newTaskNumber);


      // create a new div element 
    var newTask = document.createElement("div"); 

      // add class and id to new element
    newTask.setAttribute("class","tasks");
    newTask.setAttribute("id","task" + newTaskNumber);

      // and give it some content 

    var newTaskText = document.createElement("div");
    newTaskText.setAttribute("id","text-task" + newTaskNumber);
    newTaskText.style.display = "none";

    var taskDescription = document.createTextNode("Task no. "+ newTaskNumber); 

      // add the text node to the newly created div
    newTaskText.appendChild(taskDescription); 
    newTask.appendChild(newTaskText); 

    var input = createInput(newTaskNumber);
      // use function to create input for this task
    newTask.appendChild(input);

    createCells(newTaskNumber);

  // BUTTON
      // create button to new div
    var dropdown = document.createElement("div");
    dropdown.setAttribute("id","dropdown-task"+newTaskNumber);
    dropdown.setAttribute("class","dropdown");

    var button = document.createElement("button");
    button.setAttribute("id","button-dropdown-task" + newTaskNumber);
    button.addEventListener("click",expandDropdown);

      // create icon to button
    var icon = document.createElement("i");
    icon.setAttribute("class","material-icons");

      // add to new task
    icon.appendChild(document.createTextNode("more_horiz"));
    button.appendChild(icon);
    button.setAttribute("title","Options");
    dropdown.appendChild(button);

    var dropdownContent = document.createElement("div");
    dropdownContent.setAttribute("id","dropdown-content-task"+newTaskNumber);
    dropdownContent.setAttribute("class","dropdown-content");
    dropdown.appendChild(dropdownContent);


      // edit button
    button = document.createElement("button");
    button.setAttribute("id","button-edit-task" + newTaskNumber);
    button.setAttribute("title","Edit task name");
    button.addEventListener("click",editTaskName);
    icon = document.createElement("i");
    icon.setAttribute("class","material-icons");
    icon.appendChild(document.createTextNode("edit"));
    button.appendChild(icon);
    dropdownContent.appendChild(button);

      // reorder button
    // button = document.createElement("button");
    // button.setAttribute("id","button-reorder-task" + newTaskNumber);
    // button.addEventListener("click",reorderTasks);
    // button.setAttribute("title","Reorder tasks");
    // icon = document.createElement("i");
    // icon.setAttribute("class","material-icons");
    // icon.appendChild(document.createTextNode("swap_vert"));
    // button.appendChild(icon);
    // dropdownContent.appendChild(button);

      // remove button
    button = document.createElement("button");
    button.setAttribute("id","button-remove-task" + newTaskNumber);
    button.setAttribute("title","Remove task");
    button.addEventListener("click",removeTask);
    icon = document.createElement("i");
    icon.setAttribute("class","material-icons");
    icon.appendChild(document.createTextNode("delete"));
    button.appendChild(icon);
    dropdownContent.appendChild(button);
    dropdownContent.style.display = "none";

    newTask.appendChild(dropdown);

      // add the newly created element and its content into the DOM 

    newTask.style.setProperty("order", (newTaskNumber));
    document.getElementById("new-task").style.setProperty("order", (newTaskNumber+1))

    document.getElementById("tasks").insertBefore(newTask,document.getElementById("new-task")); 
    document.getElementById("input-task"+newTaskNumber).focus();


    taskCounter++;
    document.documentElement.style.setProperty("--numberoftasks",taskCounter);

}

function createCells(taskNumber) {

    var currentNumberOfDays = document.getElementsByClassName("days").length;

      // add cells to task
        var cellsDiv = document.createElement("div");
        cellsDiv.setAttribute("id","cells-container"+taskNumber);
        cellsDiv.setAttribute("class","cells-container");
        cellsDiv.style.setProperty("order", (taskNumber));
        cellsDiv.style.setProperty("grid-column", "span "+currentNumberOfDays);
        calendar.appendChild(cellsDiv);

        for (var cellDay = 1; cellDay <= currentNumberOfDays; cellDay++) {
                var newCell = document.createElement('div');
                newCell.setAttribute("class","task" + taskNumber + " " + "cell");
                newCell.setAttribute("id","task-" + taskNumber + "-" + "day"+cellDay+ "-" + "cell");
                newCell.setAttribute("title",listOfDays[cellDay]);
                newCell.addEventListener("click",changeColor);
                cellsDiv.appendChild(newCell);
        }

}

function addCells () {
   var currentNumberOfDays = document.getElementsByClassName("days").length;
   var tasksList = document.getElementsByClassName("tasks");

   for (var i = tasksList.length - 1; i >= 0; i--) {
        var id = tasksList[i].getAttribute("id");
        var split = id.split(/task/);
        var taskNumber = parseInt(split[1]);
        var cellsDiv = document.getElementById("cells-container"+taskNumber);

            if (!isNaN(taskNumber)) {
                cellsDiv.style.setProperty("grid-column", "span "+currentNumberOfDays);
                for (var cellDay = 1; cellDay <= currentNumberOfDays; cellDay++) {
                        if (document.getElementById("task-" + taskNumber + "-" + "day"+cellDay+ "-" + "cell") == null) {
                            var newCell = document.createElement('div');
                            newCell.setAttribute("class","task" + taskNumber + " " + "cell");
                            newCell.setAttribute("id","task-" + taskNumber + "-" + "day"+cellDay+ "-" + "cell");
                            newCell.addEventListener("click",changeColor);
                            cellsDiv.appendChild(newCell);
                        } 
                }
            }
       }
}


function createInput (taskNumber) {
    var inputTaskName = document.createElement("INPUT");
    inputTaskName.setAttribute("id","input-task"+taskNumber);
    inputTaskName.setAttribute("type", "text");
    inputTaskName.setAttribute("value", ("Task no. "+ taskNumber +" "));
    inputTaskName.addEventListener("focus", function() {this.select()}, false);
    inputTaskName.addEventListener("focusout", function() {
        var currentInputValue = document.getElementById("input-task"+taskNumber).value;
        document.getElementById("text-task"+taskNumber).innerHTML = currentInputValue;
        inputTaskName.style.display = "none";
        document.getElementById("text-task"+taskNumber).style.display = "block";
        taskObjectsList[taskNumber-1].changeTaskName(currentInputValue);
        console.log(taskObjectsList[taskNumber-1]);

    }); 

    return(inputTaskName);
}


function expandDropdown() {

    var dropdownContent = document.getElementById(this.id).nextSibling;
    dropdownContent.style.display = "inline-block";
    dropdownContent.style.position = "absolute";

    document.addEventListener('mouseup', function(event) {
        var isClickInside = dropdownContent.contains(event.target);

        if (!isClickInside) {
            dropdownContent.style.display = "none";
     }
});

    
  //   dropdownContent.addEventListener('click', function(event) {
  // var isClickInside = dropdownContent.contains(event.target);
  // if (isClickInside) {
  //   // dropdownContent.style.display = "none";
  // } else {
  //   dropdownContent.style.display = "none";
  // }
    // });
    // dropdownContent.firstChild.focus();
    // dropdownContent.addEventListener("focusout", function() {
    //     dropdownContent.style.display = "none";
    // }); 


}

function editTaskName () {
    var inputForTask = document.getElementById(this.id).parentNode.parentNode.previousSibling;  // have to find better way
    inputForTask.style.display = "block";
    inputForTask.focus();
    inputForTask.previousSibling.style.display = "none";
    document.getElementById(this.id).parentNode.style.display = "none";

}

function setOrderByObjectsList () {
            console.log("potato");

    for (var i = taskObjectsList.length - 1; i >= 0; i--) {
        var order = taskObjectsList[i].order;
        console.log(order);
        
        document.getElementById("task"+(i+1)).style.setProperty("order", order);
        document.getElementById("cells-container"+(i+1)).style.setProperty("order",order);

    }
}

// function changeColor() {

//     var cellToChange = document.getElementById(this.id);


//     document.addEventListener('click', function(event){
//         var isClickInside = cellToChange.contains(event.target);

//         if (isClickInside) {
//             cellToChange.style.backgroundColor = 'pink';
//         }
//     })
// }

function changeColor() {
    color = document.getElementById("colorPicker").value;
    var cellToChange = document.getElementById(this.id);
    if(cellToChange.style.backgroundColor==""){
        cellToChange.style.backgroundColor = color;
    }   else {
        cellToChange.style.backgroundColor = "";
    }
}



// function reorderTasks () {
//     var numberOfTasks = document.getElementsByClassName("tasks").length;
//     var taskList = document.getElementsByClassName("tasks");

//     for (var i = taskList.length - 1; i >= 0; i--) {
//         taskList[i];
//         taskList[i].style.order;
//     }   

//     // var x = document.querySelector("style[order='1']");
//     console.log(x);


// console.log(taskList);

//     // get number of task which should be reordered
//     var id = document.getElementById(this.id).getAttribute("id");
//     console.log(id);
//     var split = id.split(/button-reorder-task/);
//     var taskNumber = parseInt(split[1]);
//     console.log(taskNumber);

//     var taskToReorder = document.getElementById("task"+taskNumber);
//     // var taskAbove = taskToReorder.previousSibling;
//     var taskBelow = taskToReorder.nextSibling;

//     var taskToReorderOrder = taskToReorder.style.order;
//     // var taskAboveOrder = taskAbove.style.order;
//     var taskBelowOrder = taskBelow.style.order;

//     // go down
//     taskToReorder.style.order = taskBelowOrder;
//     taskBelow.style.order = taskToReorderOrder;

//     console.log(taskToReorder,taskAbove,taskBelow);
//     console.log(typeof(taskAbove));

//     var wholeTaskCellsRow = document.getElementsByClassName("task"+taskNumber);
//     // console.log(wholeTaskRow);
//     for (var i = wholeTaskCellsRow.length - 1; i >= 0; i--) {
//         // wholeTaskCellsRow[i].style.display = "none";
//     }
//     document.getElementById(this.id).parentNode.style.display = "none";



function removeTask () {
    var numberOfTasks = document.getElementsByClassName("tasks").length;
    var id = document.getElementById(this.id).getAttribute("id");
    var split = id.split(/button-remove-task/);
    var taskNumber = parseInt(split[1]);

    document.getElementById("task"+taskNumber).remove();
    document.getElementById("cells-container"+taskNumber).remove();
    taskObjectsList.splice(taskNumber-1,1);

}



function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}   

Date.prototype.getWeek = function () {
    var target  = new Date(this.valueOf());
    var dayNr   = (this.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    var firstThursday = target.valueOf();
    target.setMonth(0, 1);
    if (target.getDay() != 4) {
        target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - target) / 604800000);
}

