"use strict";
let checkBoxList = document.querySelectorAll(".custom-checkbox");
let inputFields = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error-label");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};
const progressLabel = document.querySelector('.progress-label')
const addGoal = document.querySelector('.add-btn')

const allQuotes = [
  'Raise the bar by completing your goals! 🙄',
  'Well begun is half done! 🤩',
  'Just a step away, keep going! 🫡',
  'Whoa! You just completed all the goals, time for chill :D 👍✌️⭐😊',
]

let completeGoalCount = Object.values(allGoals).filter((goal)=>goal.completed).length
let rest = completeGoalCount
progressValue.style.width = `${
  (completeGoalCount / inputFields.length) * 100
}%`;
progressValue.firstElementChild.innerText = `${completeGoalCount}/${inputFields.length} completed`;
progressLabel.innerText=allQuotes[completeGoalCount]
checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener("click", (ev) => {
    let allFielleds = [...inputFields].every((input) => {
    
      return input.value;
    });

    if (allFielleds) {
      checkbox.parentElement.classList.toggle("completed");
      let inputId = checkbox.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      completeGoalCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      rest = completeGoalCount;
      progressValue.style.width = `${(completeGoalCount / inputFields.length) * 100}%`;
      progressValue.firstElementChild.innerText = `${completeGoalCount}/${inputFields.length} completed`;
      progressLabel.innerText=allQuotes[completeGoalCount] ||''
      localStorage.setItem("allGoals", JSON.stringify(allGoals));
      
      
      if (rest ===inputFields.length ){
        setTimeout(reste,2000)
      }
    } else {
      errorLabel.classList.add("show-label");
    }
  });
});

function reste() {
  checkBoxList.forEach((disp) => {
    disp.parentElement.classList.remove("completed");
  });
  inputFields.forEach((input) => {
    input.value = "";
  });
  localStorage.clear()
  completeGoalCount=0
  progressValue.firstElementChild.innerText = `${completeGoalCount}/${inputFields.length} completed`;
  progressValue.style.width = `${(completeGoalCount / inputFields.length) * 100}%`;
  progressLabel.innerText=allQuotes[0]
  window.location.reload();
}

inputFields.forEach((input) => {

  if (allGoals[input.id]) {
    
    input.value = allGoals[input.id].val;

    if (allGoals[input.id].completed) {
      
      input.parentElement.classList.add("completed");
    }
  }
  input.addEventListener("focus", () => {
    errorLabel.classList.remove("show-label");
  });
  input.addEventListener("input", (e) => {
    if (allGoals[input.id] && allGoals[input.id].completed) {
      e.target.value = allGoals[input.id].val;
      return;
    }
    if (allGoals[input.id]) {
      allGoals[input.id].val = input.value;
      
    } else {
      allGoals[input.id] = {
        val: input.value,
        completed: false,
      };
    }
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});

// const parentContainer = document.querySelector(".app-container")
// const goal1 = document.querySelector(".goal-container")
// let count =4
// addGoal.addEventListener("click", ()=>{
//   let gcontainer = document.createElement( "div" );
//   gcontainer.classList.add("goal-container")
//   let ccheckbox =document.createElement("div");
//   ccheckbox.classList.add("custom-checkbox")
//   let image= document.createElement( 'img' ) ;
//   image.classList.add("check-icon")
//   image.src="./check.svg"
//   let goalinput =document.createElement( "input" )
//   goalinput.type="text";
//   goalinput.classList.add( "goal-input" ,"completed-input")
//   goalinput.id=count
//   ++count
//   goalinput.placeholder ="Add new goal...."
//   gcontainer.append(ccheckbox,goalinput);
//   ccheckbox.appendChild(image)
//   goal1.insertAdjacentElement('afterend',gcontainer)
//   checkBoxList = document.querySelectorAll(".custom-checkbox");
//   inputFields = document.querySelectorAll(".goal-input");


//   checkBoxList.forEach((checkbox) => {
//     checkbox.addEventListener("click", (ev) => {
//       let allFielleds = [...inputFields].every((input) => {
      
//         return input.value;
//       });
  
//       if (allFielleds) {
//         checkbox.parentElement.classList.toggle("completed");
//         let inputId = checkbox.nextElementSibling.id;
//         allGoals[inputId].completed = !allGoals[inputId].completed;
//         completeGoalCount = Object.values(allGoals).filter(
//           (goal) => goal.completed
//         ).length;
//         rest = completeGoalCount;
//         progressValue.style.width = `${(completeGoalCount / inputFields.length) * 100}%`;
//         progressValue.firstElementChild.innerText = `${completeGoalCount}/${inputFields.length} completed`;
//         progressLabel.innerText=allQuotes[completeGoalCount] ||''
//         localStorage.setItem("allGoals", JSON.stringify(allGoals));
        
        
//         if (rest ===inputFields.length ){
//           setTimeout(reste,2000)
//         }
//       } else {
//         errorLabel.classList.add("show-label");
//       }
//     });
//   });
  










//   console.log("hi");
  
// })


























