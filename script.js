/**
 * Validates the cat survey form, displays error messages, and highlights
 * invalid fields.
 * @returns {boolean} True if the form is valid, false otherwise.
 */
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

    /**
     * Validate the owner's first name
     */
    if (ownerFirstName.value.trim() === "") {
        console.error("Please enter a first name.");
        addErrorMessage(
            ownerFirstName,
            ownerFirstName.parentElement,
            "Please enter a first name"
        );
        errorList.push(ownerFirstName);
        isValid = false;
    }

    /**
     * Validate the owner's last name.
     */
    if (ownerLastName.value.trim() === "") {
        console.error("Please enter a last name.");
        addErrorMessage(
            ownerLastName,
            ownerLastName.parentElement,
            "Please enter a last name"
        );
        errorList.push(ownerLastName);
        isValid = false;
    }

    /**
     * Validate the owner's email.
     */
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (ownerEmail.value.trim() === "") {
        console.error("Please enter a email address");
        addErrorMessage(
            ownerEmail,
            ownerEmail.parentElement,
            "Please enter an email address."
        );
        errorList.push(ownerEmail);
        isValid = false;
    } else if (!emailRegex.test(ownerEmail.value.trim())) {
        console.error("Please enter a valid email address.");
        addErrorMessage(
            ownerEmail,
            ownerEmail.parentElement,
            "Please enter a valid email address."
        );
        errorList.push(ownerEmail);
        isValid = false;
    }

    /**
     * Validate the cat name
     */
    if (catName.value.trim() === "") {
        console.error("Please enter your cat's name.");
        addErrorMessage(
            catName,
            catName.parentElement,
            "Please enter your cat's name."
        );
        errorList.push(catName);
        isValid = false;
    }

    /**
     * Validate the cat's gender
     */
    if (catGender.value === "") {
        console.error("Please select your cat's gender.");
        addErrorMessage(
            catGender[0],
            catGender[0].parentElement,
            "Please select your cat's gender"
        );
        errorList.push(catGender);
        isValid = false;
    }

    /**
     * Validate the cat's age
     */
    if (catAge.value === "") {
        console.error("Please select your cat's age.");
        addErrorMessage(
            catAge[0],
            catAge[0].parentElement,
            "Please select your cat's age"
        );
        errorList.push(catAge);
        isValid = false;
    }

    /**
     * Validate the cat's color
     */
    if (catColor.value === "") {
        console.error("Please select your cat's fur color.");
        addErrorMessage(
            catColor,
            catColor.parentElement,
            "Please select your cat's fur color"
        );
        errorList.push(catColor);
        isValid = false;
    }

    /**
     * Validate the cat's fur pattern
     */
    if (catPattern.value === "") {
        console.error("Please select your cat's fur pattern.");
        addErrorMessage(
            catPattern,
            catPattern.parentElement,
            "Please select your cat's fur pattern"
        );
        errorList.push(catPattern);
        isValid = false;
    }

    /**
     * Validate the cat's activities
     */
    const checkedValues = [];
    for (const box of catActivity) {
        if (box.checked) checkedValues.push(box.value);
    }

    if (checkedValues.length === 0) {
        console.error("Please select at least one activity.");
        addErrorMessage(
            catActivity[0],
            catActivity[0].parentElement,
            "Please select at least one activity."
        );
        errorList.push(catActivity);
        isValid = false;
    }

    /**
     * Validate the cat's nap hours
     */
    // console.log(catNapHours.value);
    if (catNapHours.value === "") {
        console.error("Please enter your cat's nap hours.");
        errorList.push(catNapHours);
        addErrorMessage(
            catNapHours,
            catNapHours.parentElement,
            "Please enter your cat's nap hours."
        );
        isValid = false;
    } else if (isNaN(Number(catNapHours.value))) {
        console.error("Please enter a valid number.");
        errorList.push(catNapHours);
        addErrorMessage(
            catNapHours,
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
            catNapHours,
            catNapHours.parentElement,
            "Please enter a number between 0-24"
        );
        isValid = false;
    }

    /**
     * Validate the cat's spiciness
     */
    if (catSpiciness.value === "") {
        console.error("Please select your cat's spiciness.");
        errorList.push(catNapHours);
        addErrorMessage(
            catSpiciness,
            catSpiciness.parentElement,
            "Please select your cat's spiciness."
        );
        isValid = false;
    }

    /**
     * If there's an error, scroll to the first error.
     */
    if (errorList.length > 0) {
        const firstError = errorList[0];
        if (firstError instanceof RadioNodeList || Array.isArray(firstError)) {
            firstError[0].scrollIntoView({ block: "center" });
        } else {
            errorList[0].scrollIntoView({ block: "center" });
        }
    }

    /**
     * Add an error outline to all errors.
     */
    errorList.forEach((el) => addErrorOutline(el));

    return isValid;
}

/**
 * Logs the values and types of all input elements for debugging purposes.
 * @param {Object} inputElements - An object containing references to form input elements.
 */
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

/**
 * Retrieves references to all relevant form input elements in the survey form.
 * @returns {Object} An object mapping input names to their corresponding DOM
 *  elements.
 */
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

/**
 * Removes all error messages and clears aria-describedby attributes from
 *  form fields.
 * @returns {void}
 */
function clearErrorMessages() {
    // Select all elements with the .error-message class and remove them.
    const errorMessages = document.querySelectorAll(".error-message");
    for (const el of errorMessages) {
        el.remove();
    }

    // Remove aria-describedby from all input, select, and textarea fields
    const inputFields = document.querySelectorAll(
        "input[aria-describedby], select[aria-describedby]"
    );
    inputFields.forEach((field) => field.removeAttribute("aria-describedby"));
}

/**
 * Creates and appends an error message for a given input, and sets
 * aria-describedby for accessibility.
 * @param {HTMLElement} inputElement - The input element to associate the error.
 * @param {HTMLElement} inputParent - The parent element to which the
 *  error message will be appended.
 * @param {string} errorMessage - The error message to display.
 *
 * @returns {void}
 */
function addErrorMessage(inputElement, inputParent, errorMessage) {
    const errorElement = document.createElement("p");
    errorElement.classList.add("error-message");
    errorElement.textContent = errorMessage;

    inputElement.setAttribute("aria-describedby", `${inputElement.name}Error`);
    errorElement.id = `${inputElement.name}Error`;
    inputParent.appendChild(errorElement);
}

/**
 * Adds an error outline to an invalid input element.
 * @param {HTMLElement|RadioNodeList} inputElement - The input or group to highlight.
 *
 * @returns {void}
 */
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

/**
 * Adds an event lister to all inputs that will automatically remove their
 * error outline on "focus".
 */
const inputGroup = document.querySelectorAll(".input-group input");
inputGroup.forEach((el) => {
    el.addEventListener("focus", () => el.classList.remove("input-error"));
});
