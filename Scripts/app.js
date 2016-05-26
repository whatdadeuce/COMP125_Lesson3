/*Main JavaScript File*/

//IIFE
(function () {
    "use strict";

    var paragraphOne = document.getElementById("paragraphOne");
    var paragraphTwo = document.getElementById("paragraphTwo");
    var paragraphThree = document.getElementById("paragraphThree");
    var paragraphs = [];
    //alteranative array declaration
    // var paragraphs = new Array();
    
    
    paragraphs[0] = "This is my first paragraph. It is only visible on the first page";
    paragraphs[1] = "This is my second paragraph. It is only visible on the second page";
    paragraphs[2] = "This is my third paragraph. It is only visible on the third page";
    
    // checks to see if paragraph exists
    if (paragraphOne) {
        paragraphOne.textContent = paragraphs[0];
    }

    if (paragraphTwo) {
        paragraphTwo.textContent = paragraphs[1];
    }

    if (paragraphThree) {
        paragraphThree.textContent = paragraphs[2];
    }


})();