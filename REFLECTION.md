# Assignment Reflection

## 1. Can I explain what my code does?

For this assignment, I made an silly, light-hearted interactive survey about house cats in Winnipeg.

The following are the key files I used for this assignment:

- `index.html` - HTML structure of my survey form.
- `styles/styles.css` - Styling of my form
- `styles/variables.css` - Defined the color scheme, spacing, and type systems I used.
- `styles/css-reset.css` - The css reset I used.
- `script.js` - Contains the form validation of my survey.

## 2.What was my coding process?

Just like last time, I started by picking a fun theme, since my last assignment was about dogs, I figured I’d switch it up and do cats this time.

I started by setting up the fonts, spacing, and color palette to get the vibe right. Then I looked up what questions would make sense for a cat survey and built out the form fields.

I wrote the HTML first, keeping it super basic at the start. Once the structure was there, I added some simple CSS to make it look decent, and then jumped into writing the form validation.

After I got the validation working, I went back and polished up the styles to make everything look and feel more cohesive.

## 3. What challenges did I have?

Figuring out how to validate and style radio button groups (RadioNodeList) was way trickier than I expected. The way browsers handle these is kind of weird, and getting the error outlines to show up on all radios in a group took a lot of trial and error.

Also, managing the state of form elements in plain vanilla JavaScript can get messy fast. There’s no built-in way to track which fields have errors, so I had to write a bunch of custom logic to add and remove error messages and outlines.
