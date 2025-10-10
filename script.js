function validateForm() {
    let isValid = false;
    const inputElements = getFormInputElements();
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

    if (ownerFirstName.value.trim() === "") {
        console.error("Please enter a first name.");
        isValid = false;
    }

    if (ownerLastName.value.trim() === "") {
        console.error("Please enter a last name.");
        isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (ownerEmail.value.trim() === "") {
        console.error("Please enter a email address");
        isValid = false;
    } else if (!emailRegex.test(ownerEmail.value.trim())) {
        console.error("Please enter a valid email address.");
        isValid = false;
    }

    return isValid;
}

function debugInputElements(inputElements) {
    for (key in inputElements) {
        let value = inputElements[key].value;
        // Check if checkboxes
        if (key === "catActivity") {
            const checkedValues = [];
            for (const box of inputElements[key]) {
                if (box.checked) checkedValues.push(box.value);
            }
            value = checkedValues;
        }
        console.log(`${key}: ${value}`);
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

function clearErrorMessages() {}

function addErrorMessage(inputElement, errorMessage) {}

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
