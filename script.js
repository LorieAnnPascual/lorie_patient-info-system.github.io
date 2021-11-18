//PATIENT NAME VALIDATION
function toSubmit() {
    const formData = document.forms["patientRecord"];
    let fName = formData["firstname"].value.trim();
    let mName = formData["middlename"].value.trim();
    let lName = formData["lastname"].value.trim();
    let Address = formData["address"].value.trim();
    let contactNum = formData["contact"].value.trim();
    let DOB = formData["birthdate"].value;
    let Gender = formData["gender"].value;
    let medHistory = document.querySelectorAll("#history :checked");
    let selBox = [...medHistory].map(option => option.value);
    let Symptoms = formData["symptoms"].value;
    let Medication = formData["med"].value;

    if (fName =="") {
        alert("Please type your first name.");
        formData["firstname"].focus();
        return false;
    } else if (!isNaN(fName)) {
        alert("Name should be in character.");
        formData["firstname"].focus();
        return false;
    }
    if (mName =="") {
        alert("Please type your middle name.");
        formData["middlename"].focus();
        return false;
    } else if (!isNaN(mName)) {
        alert("Name should be in character.");
        formData["middlename"].focus();
        return false;
    } else if (lName =="") {
        alert("Please type your last name.");
        formData["lastname"].focus();
        return false;
    } else if (fName.length < 3) {
        alert("Name should be minimum of 3 characters.");
        formData["firstname"].focus();
        return false;
    } else if (Address =="") {
        alert("Please type your address.");
        formData["address"].focus();
        return false;
    } else if (Address.length < 10) {
        alert("Address should be minimum of 10 characters.");
        formData["address"].focus();
        return false;
    } else if (contactNum =="") {
        alert("Please type your contact number.");
        formData["contact"].focus();
        return false;
    } else if (isNaN(contactNum)) {
        alert("Contact number should be in digits.");
        formData["contact"].focus();
        return false;
    } else if (contactNum.length < 11) {
        alert("Contact number is minimum of 11 digits.");
        formData["contact"].focus();
        return false;
    } else if (DOB =="") {
        alert("Please enter your birth date.");
        formData["birthdate"].focus();
        return false;
    } else if (Gender =="") {
        alert("Please select your gender.");
        formData["gender"].focus();
        return false;
    } else if (Symptoms =="") {
        alert("Select at least one symptoms.");
        return false;
    } else if (selBox =="") {
        alert("Select at least one medical history.");
    }  else if (Medication =="") {
        alert("Please select yes or no.");
        return false;
    } else {
        alert("Form submitted.");
        return true;
    }
}

