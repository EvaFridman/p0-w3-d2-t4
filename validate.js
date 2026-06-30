function isFilled(value) {
    if (value && typeof value === "string" && value.trim().length > 0) {
        return true;
    } else {
        return false;
    }
}

function hasAtSign(email) {
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

function isValid(email, name, age, agreed) {
    let valid = true;

    if (isFilled(email) && typeof email === "string" && hasAtSign(email)) {
        console.log("ok");
    } else if (!isFilled(email)) {
        console.log("Error! Set your email");
        valid = false;
    } else if (typeof email !== 'string') {
        console.log("Error! Email has to be a string");
        valid = false;
    } else if (!hasAtSign(email)) {
        console.log("Error! Email has to include @");
        valid = false;
    }

    if (isFilled(name) && typeof name === "string") {
        console.log("ok");
    } else if (!isFilled(name)) {
        console.log("Error! Set your name and include something but spaces");
        valid = false;
    } else if (typeof name !== 'string') {
        console.log("Error! Name has to be a string");
        valid = false;
    }

    if (isNumber(age) && isAdult(age)) {
        console.log("ok");
    } else if (!isNumber(age)) {
        console.log("Error! Age has to be a number");
        valid = false;
    } else if (!isAdult(age)) {
        console.log("Error! Age has to be in between 18 and 120");
        valid = false;
    }

    if (agreed === true) {
        console.log("ok");
    } else {
        console.log("Error! Agreed has to be a boolean");
        valid = false;
    }

    return valid;
}

let promo = null;
promo ?? console.log("без промокода");

if (isValid(31, "Anna", "21", true)) {
    console.log("Registration allowed!");
} else {
    console.log("Registration denied. Please fix the errors above.");
}

if (isValid("a@a", "Anna", 21, true)) {
    console.log("Registration allowed!");
} else {
    console.log("Registration denied. Please fix the errors above.");
}