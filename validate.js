const isFieldFilled = value => Boolean(value && typeof value === "string" && value.trim().length > 0);

// Сначала написала как придумала сама, но там получилась простынь. Пошла гуглить, как короче, и не нашла никаких вариантов, кроме как добавить регулярное выражение.
const isEmailValid = email => {
    if (typeof email !== "string") return false;
    return /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/.test(email.trim()) && email.trim().length <= 254;
};

const isNumber = value => Boolean(typeof value === "number" && !isNaN(value));

const isAgeValid = age => Boolean(age >= 18 && age <= 120);

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

    if (isNumber(age) && isAgeValid(age)) {
        console.log("ok");
    } else if (!isNumber(age)) {
        console.log("Error! Age has to be a number");
        return false;
    } else if (!isAgeValid(age)) {
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

if (isFormValid("example@gmail.com", "Anna", 21, true)) {
    console.log("Registration allowed!");
} else {
    console.log("Registration denied. Please fix the errors above.");
}