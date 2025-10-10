function validateForm() {
    let isValid = false;
    const inputElements = getFormInputElements();
    debugInputElements(inputElements);

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
