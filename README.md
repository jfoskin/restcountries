# REST Countries API 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users can

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page [future feature]
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./screenshot.jpg)


### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS 
- Flexbox
- CSS Grid
- Bootstrap
- JavaScript


### What I learned

While working on this project I encounter a few issues. One of my bigger pain points was understanding why my toggle dark mode wouldn't work when clicking my dark mode button. I was able to see the button being triggered and the class being changed however, the color of my background continued to stay the same. After debugging with Quinn we realized I was trying to change the class name of the element when I should have been looking to change the value for an attribute. Another challenge was looking to complete the CSS of my project when trying to make my page responsive I was having an issues determining the best way to implement my container, which had me stuck moving details around consistantly. 



### Useful resources

[CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)  - I used this resource to get context on css
[w3 schools/](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode) - I used this as a resource to look at atrributes and how to toggle 
[Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - Used Bootstrap documentation for some styling
[Rest API documentation](https://restcountries.com) - API documentation
[Mdn object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) - I used this to get details on how to look for the keys on an object and the value in an array. Along with other array methods


## Acknowledgments

shout out to Village hidden in the 'A' 

Tybrianna
Fabiola - helped with dark theme doc
Jasmine
Keoki
Billy