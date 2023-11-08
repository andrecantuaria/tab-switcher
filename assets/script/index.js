'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
    
function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
}
    
// Main Code
const buttons = selectAll('.tab-btn');
const content = selectAll('article');

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

