# Tab Switcher
In this tutorial, you'll discover ```how to make tabs that show different content```, a useful skill for building single-page apps. 
By the end, you'll be proficient in creating interactive tabbed navigation to improve user experience on your web projects.

## Tab Switcher in action 
Instead of using the usual addEventListener function repeatedly, I've simplified my code by using these utility functions. 
This approach makes the code shorter and easier to manage.
   
```javascript
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}  
function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
}
```
This code bellow sets up an interactive tab system. It selects buttons and their associated content, allowing users
to click a button to display the corresponding content while hiding the rest. The 'active' class highlights the selected 
button, and 'display' is used to show or hide the content based on the clicked button.

```javascript
const tabBtn = document.querySelectorAll('.tab-btn');
const article = document.querySelectorAll('article');

tabBtn.forEach(function(button, index) {
  onEvent('click', button, function() {
    tabBtn.forEach(function(btn) {
      btn.classList.remove('active');
    });

    article.forEach(function(art) {
      art.classList.remove('active');
    });

    button.classList.add('active');
    article[index].classList.add('active');
  });
});
```

```article``` defines the initial hidden style for article elements.
```article.active``` defines the style when the .active class is applied via JavaScript.

```CSS
article {
    opacity: 0;
    height: 0;
    overflow: hidden;
}
    
article.active {
    opacity: 1;
    height: auto;
    transition: ease-in-out 0.5s;
    text-align: left;
    justify-content: left; 
}
```
## Key Features
- Tab Interaction: Users can ```switch between different content tabs``` by clicking on the associated buttons.
- Visual Highlight: The selected ```tab button is visually emphasized``` to show which tab is active.
- Content Management: It allows for ```easy control of displaying and hiding``` content related to each tab, improving user experience.
- Versatility: This code can be ```adapted for various situations``` where you need tabbed navigation on your website or app.
- Code Simplicity: The utility functions 'onEvent' and 'selectAll' keep the ```code clean and concise```.

## Demo
Click [here](https://andrecantuaria.github.io/tab-switcher/) to test the application.


