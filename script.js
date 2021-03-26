// Vars
let bugName= document.querySelector('#inputName')
let description = document.querySelector("#inputDescription");
let severity = document.querySelector("#inputSeverity");
let responsible = document.querySelector("#inputAssigned");
let addBtn = document.querySelector('.addBtn');
let buglogSort = document.querySelector('#bugLogSort');
let bugLog = document.querySelector('.bugLogLog');
let bugLogArray = [];


//constructors

class Bug{
    constructor(name, description, severity, responsible) {
        this.name = name;
        this.description = description;     
        this.severity = severity;
        this.responsible = responsible;
        this.status = "open";
    }
}



//functions

function addBug(e){
    e.preventDefault();
    //take input
    let des = description.value;
    let sev = severity.value
    let resp = responsible.value;
    let newBugName = bugName.value;
    new Bug(newBugName, des, sev, resp)
    console.log(newBugName);
    console.log(des);
    console.log(sev);
    console.log(resp);
    //New Div
    const bugDiv = document.createElement("div");
    bugDiv.classList.add('bugListDiv');
    //create prop divs
    const bugNameDiv = document.createElement("div");
    bugNameDiv.classList.add('bugNameDiv');
    const bugDesDiv = document.createElement("div");
    bugDesDiv.classList.add('bugDesDiv');
    const bugSevDiv = document.createElement("div");
    bugSevDiv.classList.add('bugSevDiv');
    const bugRespDiv = document.createElement("div");
    bugRespDiv.classList.add('bugRespDiv');
    //Values to div
    bugNameDiv.innerText = Bug.name;
    bugDesDiv.innerText = Bug.description;
    bugSevDiv.innerText = Bug.severity;
    bugRespDiv.innerText = Bug.responsible;
    console.log(bugNameDiv)

    //create New Bug Div
    const newBug = document.createElement("div");
    newBug.appendChild(bugNameDiv);
    newBug.appendChild(bugDesDiv);
    newBug.appendChild(bugSevDiv);
    newBug.appendChild(bugRespDiv);
    newBug.classList.add('bug-item');
    

    //NewbugList
    const NewbugList = document.createElement("ul");
    NewbugList.classList.add('bug-list');
    NewbugList.appendChild(newBug);

    //append new bug to element
    bugDiv.appendChild(NewbugList);
    bugLog.appendChild(bugDiv);
    // reset form
    description.value = "";
    severity.value= "Choose Severity";
    responsible.value= "";
    bugName.value= "";
}

addBtn.addEventListener('click', addBug);