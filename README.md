# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Instruction

To open this site:

- install node on PC
- install a jsonServer
- npm install -g json-server
- start your local server
- json-server --watch data/data.json

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](/design/Screenshot.png)
![](/design/ScreenshotActive.png)
![](/design/ScreenshotActive2.png)
![](/design/ScreenshotActive3.png)
![](/design/ScreenshotFooter.png)
![](/design/ScreenshotMobile.png)
![](/design/ScreenshotMobile2.png)

### Links

- Live Site URL: [Add live site URL here](https://danillakam.github.io/JobsAds/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- Work with Json file and JsonServer

### What I learned

```css - add a dot between a words
	.contract::after {
			content: '\2022';
```

```js - event delegation
const takeUserChoise = () => {
	const tools = document.querySelectorAll('.tools')
	tools.forEach(tool => {
		tool.addEventListener('click', e => {
			if (e.target.tagName === 'BUTTON') {..}
    (..)
    }
```

```js - fetch data from JsonServer with async function
const renderPosts = async () => {
	let url = 'http://localhost:3000/jobsAds'

	const res = await fetch(url)
	const posts = await res.json()

	await posts.forEach(post => {...}
```

### Continued development

In future i wanna build this project using React and maybe Node.js to create a full-stack app

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - This helped me with a lot problem in my project reason. I really liked this site and i wanna use these in my future projects.

## Author

- Website - [danillaKam](https://github.com/DanillaKam)

## Acknowledgments

- [YT: Jak zacząć programować ](https://www.youtube.com/@JZP) - This is a amazing Polish canal on yt with a super knowlege. I found there a lot knowlege about e.g. event delegation and a lot motivation.

- [Udemy: Mateusz Maj ](https://www.udemy.com/user/majek-2/) - Same like "Jak zacząć programować" a lot of knowlege in easy form and motivation to learning
