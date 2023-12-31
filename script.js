//select output elements
const outputYear = document.querySelector(".output_year");
const outputMonth = document.querySelector(".output_month");
const outputDay = document.querySelector(".output_day");

//select submit button
const submitBtn = document.querySelector(".submitbtn");

//select input elements
let isValid = false;

const inputYear = document.querySelector("#year");
const inputMonth = document.querySelector("#month");
const inputDay = document.querySelector("#day");

//select error elements
const errorDay = document.querySelector("#labelErrorDay");
const errorMonth = document.querySelector("#labelErrorMonth");
const errorYear = document.querySelector("#labelErrorYear");

submitBtn.addEventListener("click", CalculateDate);
inputDay.addEventListener("input", (e) => {
  if (+inputDay.value > 31) {
    errorDay.textContent = "Must be a valid day";
        errorDay.style.color = "rgb(236, 62, 62)";
        errorDay.style.fontstyle = "italic";
    
    isValid = false;
    return;
  } else {
    isValid = true;
    errorDay.textContent = "";
  }
  
  if (+inputDay.value === 0) {
    isValid = false;
    errorDay.textContent = "This field is required";
        errorDay.style.color = "rgb(236, 62, 62)";
        errorDay.style.fontstyle = "italic";
    
    isValid = false;
    return;
  } else {
    errorDay.textContent = "";
  }
});

inputMonth.addEventListener("input", (e) => {
  if (+inputMonth.value > 12) {
    errorMonth.textContent = "Must be a valid month";
    
        errorMonth.style.color = "rgb(236, 62, 62)";
        errorMonth.style.fontstyle = "italic";
    
    isValid = false;
    return;
  } else {
    isValid = true;
    errorMonth.textContent = "";
  }
  
  if (+inputMonth.value === 0) {
    isValid = false;
    errorMonth.textContent = "This field is required";
    
    errorMonth.style.color = "rgb(236, 62, 62)";
        errorMonth.style.fontstyle = "italic";
    
    isValid = false;
    return;
  } else {
    errorMonth.textContent = "";
  }
});

inputYear.addEventListener("input", (e) => {
  if (+inputYear.value > 2023) {
    errorYear.textContent = "Must be in the past";
    
    errorYear.style.color = "rgb(236, 62, 62)";
        errorYear.style.fontstyle = "italic";
    
    isValid = false;
    return;
  } else {
    isValid = true;
    errorYear.textContent = "";
  }
  
  if (+inputYear.value === 0) {
    isValid = false;
    errorYear.textContent = "This field is required";
    
    errorYear.style.color = "rgb(236, 62, 62)";
        errorYear.style.fontstyle = "italic";
    
    isValid = false;
    return;
  } else {
    errorYear.textContent = "";
  }
});

function CalculateDate() {
  if (isValid) {
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    let ageDiff = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiff);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay();
    
    //Displaying everything
    outputDay.textContent = ageDay;
    outputMonth.textContent = ageMonth;
    outputYear.textContent = ageYears;
  } else {
    alert("error");
  }
}