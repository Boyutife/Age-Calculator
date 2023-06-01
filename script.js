// INPUT DATA
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

// OUTPUT DATA
const dayOtp = document.getElementById("o_days");
const monthOtp = document.getElementById("o_months");
const yearOtp = document.getElementById("o_years");

// FORM ELEMENT
const form = document.querySelector("form");



const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const validate = () => {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = 'red';
      parent.querySelector("small").innerText = "this field is rquired.";
      parent.querySelector('label').style.color = "hsl(0, 100%, 67%)";
      validator = false;
    } else if (monthInp.value > 12) {
      monthInp.style.borderColor = 'red';
      monthInp.parentElement.querySelector("small").innerText = "must be a valid month";
      monthInp.parentElement.querySelector('label').style.color = "hsl(0, 100%, 67%)";
      validator = false;
    } else if (dayInp.value > 31) {
      dayInp.style.borderColor = 'red';
      dayInp.parentElement.querySelector("small").innerText = "must be a valid day.";
      dayInp.parentElement.querySelector('label').style.color = "hsl(0, 100%, 67%)";
      validator = false;
    } else if (dayInp.value > 28 && monthInp.value == 2) {
      dayInp.style.borderColor = 'red';
      dayInp.parentElement.querySelector("small").innerText = "must be a valid day.";
      dayInp.parentElement.querySelector('label').style.color = "hsl(0, 100%, 67%)";
      validator = false;
    } else if (yearInp.value > year) {
      yearInp.style.borderColor = 'red';
      yearInp.parentElement.querySelector("small").innerText = "must be in the past.";
      yearInp.parentElement.querySelector('label').style.color = "hsl(0, 100%, 67%)";
      validator = false;
    } else {
      i.style.borderColor = 'black';
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  })
  return validator;
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + daysInEachMonth[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}

// ADDING EVENT LISTENER TO THE FORM
form.addEventListener('submit', handleSubmit);


