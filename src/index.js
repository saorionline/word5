function startGame() {
  const name = document.getElementById("name").value;
  const progressTitle = document.getElementById("progress-title");
  progressTitle.textContent = `Good luck, ${name}!`;
  // Trigger the constructor code here
}

function hideOnSubmit() {
  const elementToHide = document.querySelector("#hideOnSubmit");
  if (elementToHide) {
    if (elementToHide.style.display === "none") {
      elementToHide.style.display = "block";
    } else {
      elementToHide.style.display = "none";
    }
  } else {
    console.error("Element with ID 'hideOnSubmit' not found");
  }
}

// Show the form initially
document.querySelector("#hideOnSubmit").style.display = "block";

//Then, the showSecondForm() function is called to show the second form.
function showSecondForm() {
  const secondForm = document.querySelector("#second-form");
  if (secondForm) {
    secondForm.style.display = "block";
  } else {
    console.error("Element with ID 'second-form' not found");
  }
}
//
function hideSecondForm() {
  const secondForm = document.querySelector("#second-form");
  if (secondForm) {
    secondForm.style.display = "none";
  } else {
    console.error("Element with ID 'second-form' not found");
  }
}