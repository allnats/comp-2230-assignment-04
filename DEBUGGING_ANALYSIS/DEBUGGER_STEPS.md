# Debugging Analysis

Critical Breakpoints:

- `validateForm()`'s input field capture
- `validateForm()`'s validation
- `addErrorMessage()` error display

## Capturing the input fields' data

Before validating the input fields, I first need to retrieve the data supplied by the user. In `validateForm()` I defined `inputElements` that will hold all of the form's input elements.

To fetch all of the input elements, I created a helper function called `getFormInputElements()` which returns an object where the keys are mapped to the input element's `name` attribute.

**Breakpoint Analysis #1: `validateForm()`'s input field capture**

![Breakpoint #1](screenshots/Breakpoint01.png)

The 1st breakpoint screenshot shows `inputElements` having no values under the "Watch expressions" panel. This is because at this moment, the user hasn't submitted the form yet.

**Breakpoint Analysis #2: `validateForm()`'s input field capture**

![Breakpoint #2](screenshots/Breakpoint02.png)

After submitting the form and stepping over the breakpoint, we can see that `inputElements` now contains an object of all of the form's input fields.

The values of `inputElements` are then destructured to their input name's for ease of access.
