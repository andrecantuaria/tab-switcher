'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
    
function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
}
    

// Main Code
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