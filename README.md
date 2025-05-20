# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/Screenshot%202025-05-19%20143557.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

Knowing this HTML, i learned for the image to be centered AND streched, you have to apply stretch to the entire div and then set the image to cover, so the image takes the entire space while still being the shape you want it to be.

```html
    <div class="main-div">
      <div class="main-div_image"><img src="/assets/images/illustration-sign-up-mobile.svg" alt="Illustration Sign Up" class="main-image"></div>
      <div class="div__div">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li> Product discovery and building what matters</li>
          <li> Measuring to ensure updates are a success</li>
          <li> And much more!</li>
        </ul>
        <div class="zone-champ">
          <legend class="legend-email"><label for="champCourriel" class="email-adress">Email address</label> <span id="erreurCourriel" class="zone-champ__message-erreur email-adress"></span></legend>
          <input id="champCourriel" type="email" required autocomplete="email" alt="Courriel" placeholder="email@company.com" class="champCourriel" pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"/>
        </div>
        <button type="button" class="btnSubscribe hoverBtn" id="btnSubmit">Subscribe to monthly newsletter</button>
      </div>
    </div>
```
```css
@media (min-width:800px) {

   .main-div {
      flex-direction: row-reverse;
      justify-content: center;
      text-align: center;
   }

   .main-div_image {
      flex: 1;
      display: flex;
      align-items: stretch;
      margin-top: 1em;
      margin-bottom: 1em;
   }

   .main-image {
      object-fit: cover;
      width: 100%;
      height: auto;
      object-position: center;
      border-radius: 1.5em;
   }
}
```
