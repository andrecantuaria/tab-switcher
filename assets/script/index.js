'use strict';

// Utility functions

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
    
function select(selector, parent = document) {
    return parent.querySelector(selector);
}
    
function selectById(selector, parent = document) {
    return parent.getElementById(selector);
}
    
function print(...args) {
    console.log(args.join(', '));
}
   
// Main Code