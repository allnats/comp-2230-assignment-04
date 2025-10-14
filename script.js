function validateForm() {
    let isValid = true;
    const inputElements = getFormInputElements();
    let errorList = [];
    const {
        ownerFirstName,
        ownerLastName,
        ownerEmail,
        catName,
        catGender,
        catAge,
        catColor,
        catPattern,
        catActivity,
        catNapHours,
        catSpiciness,
    } = inputElements;
    // For debugging purposes. Prints the values in the console.
    debugInputElements(inputElements);

    clearErrorMessages();
    if (ownerFirstName.value.trim() === "") {
        console.error("Please enter a first name.");
        addErrorMessage(
            ownerFirstName.parentElement,
            "Please enter a first name"
        );
        errorList.push(ownerFirstName);
        isValid = false;
    }

    if (ownerLastName.value.trim() === "") {
        console.error("Please enter a last name.");
        addErrorMessage(
            ownerLastName.parentElement,
            "Please enter a last name"
        );
        errorList.push(ownerLastName);
        isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (ownerEmail.value.trim() === "") {
        console.error("Please enter a email address");
        addErrorMessage(
            ownerEmail.parentElement,
            "Please enter an email address."
        );
        errorList.push(ownerEmail);
        isValid = false;
    } else if (!emailRegex.test(ownerEmail.value.trim())) {
        console.error("Please enter a valid email address.");
        addErrorMessage(
            ownerEmail.parentElement,
            "Please enter a valid email address."
        );
        errorList.push(ownerEmail);
        isValid = false;
    }

    if (catName.value.trim() === "") {
        console.error("Please enter your cat's name.");
        addErrorMessage(catName.parentElement, "Please enter your cat's name.");
        errorList.push(catName);
        isValid = false;
    }

    if (catGender.value === "") {
        console.error("Please select your cat's gender.");
        addErrorMessage(
            catGender[0].parentElement,
            "Please select your cat's gender"
        );
        errorList.push(catGender);
        isValid = false;
    }

    if (catAge.value === "") {
        console.error("Please select your cat's age.");
        addErrorMessage(
            catAge[0].parentElement,
            "Please select your cat's age"
        );
        errorList.push(catAge);
        isValid = false;
    }

    if (catColor.value === "") {
        console.error("Please select your cat's fur color.");
        addErrorMessage(
            catColor.parentElement,
            "Please select your cat's fur color"
        );
        errorList.push(catColor);
        isValid = false;
    }

    if (catPattern.value === "") {
        console.error("Please select your cat's fur pattern.");
        addErrorMessage(
            catPattern.parentElement,
            "Please select your cat's fur pattern"
        );
        errorList.push(catPattern);
        isValid = false;
    }

    const checkedValues = [];
    for (const box of catActivity) {
        if (box.checked) checkedValues.push(box.value);
    }

    if (checkedValues.length === 0) {
        console.error("Please select at least one activity.");
        addErrorMessage(
            catActivity[0].parentElement,
            "Please select at least one activity."
        );
        errorList.push(catActivity);
        isValid = false;
    }

    // console.log(catNapHours.value);
    if (catNapHours.value === "") {
        console.error("Please enter your cat's nap hours.");
        errorList.push(catNapHours);
        addErrorMessage(
            catNapHours.parentElement,
            "Please enter your cat's nap hours."
        );
        isValid = false;
    } else if (isNaN(Number(catNapHours.value))) {
        console.error("Please enter a valid number.");
        errorList.push(catNapHours);
        addErrorMessage(
            catNapHours.parentElement,
            "Please enter a valid number."
        );
        isValid = false;
    } else if (
        Number(catNapHours.value) < 0 ||
        Number(catNapHours.value) > 24
    ) {
        console.error("Please enter a number between 0-24");
        errorList.push(catNapHours);
        addErrorMessage(
            catNapHours.parentElement,
            "Please enter a number between 0-24"
        );
        isValid = false;
    }

    if (catSpiciness.value === "") {
        console.error("Please select your cat's spiciness.");
        errorList.push(catNapHours);
        addErrorMessage(
            catSpiciness.parentElement,
            "Please select your cat's spiciness."
        );
        isValid = false;
    }

    if (errorList.length > 0) {
        errorList[0].scrollIntoView({ block: "center" });
    }

    errorList.forEach((el) => addErrorOutline(el));

    return isValid;
}

function debugInputElements(inputElements) {
    for (key in inputElements) {
        let value = inputElements[key].value;
        let type = inputElements[key].type;
        // Check if checkboxes
        if (key === "catActivity") {
            const checkedValues = [];
            for (const box of inputElements[key]) {
                if (box.checked) checkedValues.push(box.value);
            }
            value = checkedValues;
        }
        console.log(`key: ${key}, type: ${type}, ${value}`);
    }
}

function getFormInputElements() {
    const form = catSurveyForm;
    return {
        ownerFirstName: form.elements["ownerFirstName"],
        ownerLastName: form.elements["ownerLastName"],
        ownerEmail: form.elements["ownerEmail"],
        catName: form.elements["catName"],
        catGender: form.elements["catGender"],
        catAge: form.elements["catAge"],
        catColor: form.elements["catColor"],
        catPattern: form.elements["catPattern"],
        catActivity: form.elements["catActivity"],
        catNapHours: form.elements["catNapHours"],
        catSpiciness: form.elements["catSpiciness"],
    };
}

function clearErrorMessages() {
    const errorMessages = document.querySelectorAll(".error-message");
    for (const el of errorMessages) {
        el.remove();
    }
}

function addErrorMessage(inputParent, errorMessage) {
    const errorElement = document.createElement("p");
    errorElement.classList.add("error-message");
    errorElement.textContent = errorMessage;
    inputParent.appendChild(errorElement);
}

function addErrorOutline(inputElement) {
    if (inputElement instanceof HTMLInputElement) {
        inputElement.classList.add("input-error");
    } else if (inputElement instanceof RadioNodeList) {
        // TODO
    }
}

const catSurveyForm = document.getElementById("catSurveyForm");
catSurveyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateForm()) {
        console.log("Form is valid");
        catSurveyForm.submit();
    } else {
        console.error("Invalid form!");
    }
});

const inputGroup = document.querySelectorAll(".input-group input");
inputGroup.forEach((el) => {
    el.addEventListener("focus", () => el.classList.remove("input-error"));
});
