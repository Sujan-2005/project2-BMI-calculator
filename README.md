# BMI Calculator

A simple, client-side web application to calculate Body Mass Index (BMI) based on user inputs for gender, age, height (feet/inches), and weight (kg).

## Features
- User-friendly form with inputs for gender, age, height, and weight.
- Real-time BMI calculation on form submission.
- BMI categories: Underweight (<18.5), Normal Weight (18.5-24.9), Overweight (25-29.9), Obese (≥30).
- Responsive design with modern styling (blue theme).

## How to Use
1. Open `index.html` in any web browser (e.g., Chrome, Firefox).
2. Fill in the form:
   - Select Gender (Male/Female).
   - Enter Age (note: label says \"Enter Your Height\" – minor UI issue).
   - Enter Height in Feet and Inches.
   - Enter Weight in kg.
3. Click \"Calculator BMI\" to compute and view your BMI and category.

## BMI Formula
```
BMI = weight (kg) / (height (m))^2
```
Height is converted from feet/inches to meters: `(feet * 12 + inches) * 0.0254`.

## Files
- `index.html`: Main HTML structure and form.
- `index.js`: JavaScript for form handling, BMI calculation, and result display.
- `style.css`: CSS for styling and layout.
- `README.md`: This file.
- `TODO.md`: Task tracking.

## Known Issues
- Age input label/placeholder incorrectly says \"Enter Your Height\" (should be \"Age\").
- Weight input lacks `required` attribute (allows empty submit).

## Improvements (Future)
- Fix label/placeholder issues.
- Add input validation (e.g., prevent negative values).
- Add ideal weight range or health advice.
- Make height input metric/imperial toggle.
- Persist results or add history.

## Screenshots
![BMI Calculator](Screenshot%20(50).png) 

No dependencies required – pure HTML/CSS/JS.

