function isFieldFilled(value) {
    if (value && typeof value === "string" && value.trim().length > 0) {
        return true;
    } else {
        return false;
    }
}

function isEmailValid(email) {
    if (email.includes("@")) {
        return true;
    } else {
        return false;
    }
}

function isNumber(value) {
    if (typeof value === "number" && !isNaN(value)) {
        return true;
    } else {
        return false;
    }
}

function isAdult(age) {
    if (age >= 18 && age <= 120) {
        return true;
    } else {
        return false;
    }
}

function isFormValid(email, name, age, agreed) {

    if (isFieldFilled(email) && typeof email === "string" && isEmailValid(email)) {
        console.log("ok");
    } else if (!isFieldFilled(email)) {
        console.log("Error! Set your email");
        return false;
    } else if (typeof email !== 'string') {
        console.log("Error! Email has to be a string");
        return false;
    } else if (!isEmailValid(email)) {
        console.log("Error! Email has to include @");
        return false;
    }

    if (isFieldFilled(name) && typeof name === "string") {
        console.log("ok");
    } else if (!isFieldFilled(name)) {
        console.log("Error! Set your name and include something but spaces");
        return false;
    } else if (typeof name !== 'string') {
        console.log("Error! Name has to be a string");
        return false;
    }

    if (isNumber(age) && isAdult(age)) {
        console.log("ok");
    } else if (!isNumber(age)) {
        console.log("Error! Age has to be a number");
        return false;
    } else if (!isAdult(age)) {
        console.log("Error! Age has to be in between 18 and 120");
        return false;
    }

    if (agreed === true) {
        console.log("ok");
    } else {
        console.log("Error! Agreed has to be a boolean");
        return false;
    }

    return true;
}

let promo = null;
promo ?? console.log("без промокода");

if (isFormValid(31, "Anna", "21", true)) {
    console.log("Registration allowed!");
} else {
    console.log("Registration denied. Please fix the errors above.");
}

if (isFormValid("a@a", "Anna", 21, true)) {
    console.log("Registration allowed!");
} else {
    console.log("Registration denied. Please fix the errors above.");
}