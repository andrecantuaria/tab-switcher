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
const buttons = selectAll('.tab-btn');
const content = selectAll('.content article');

buttons.forEach((button, index) => {
  onEvent('click', button, () => {
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
  
    content.forEach((article) => {
      article.style.display = 'none';
    });

    content[index].style.display = 'block';
  });
});
```

```display: none;``` is crucial for hiding tab content by default, enabling only the active tab's content to show 
when a user clicks a tab button. It's essential for a working tab system on your webpage, where you can 
switch between tab content as needed.

```CSS
article {
    text-align: left;
    justify-content: left;
    display: none;
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


