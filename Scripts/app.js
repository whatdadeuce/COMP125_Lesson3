/*Main JavaScript File*/

//IIFE
(function(){
    "use strict";
    
    //code goes here
    console.log("App Started...");
    //creates a reference and overrides <p> tag child text contents
    var firstPTag = document.getElementById("firstParagraph");
    //execute event listener to invoke clicked function
    firstPTag.addEventListener("click", firstParagraphClicked) ;
    var firstParagraphIsClicked = false;
       
    var myFirstParagraph = "This is my first paragraph. I am writing this for demonstration purposes." +
    "This is the second line"
    
    //name function
    function writeToFirstParagraph()
    {
        //for debugging
        console.log("Executing writeToFirstParagraph");
             
        firstParagraph.textContent = "IT'S ALIVE!!!";    
        firstPTag.textContent = myFirstParagraph;
    }
    
    function firstParagraphClicked()
    {
        if (firstParagraphIsClicked)
        {
            firstPTag.style.color = "#000000"
            firstParagraphIsClicked = false;
        }else
        {
            firstPTag.style.color = "red";
            firstParagraphIsClicked = true;
        }
    }
    
    /*   
    var writeToFirstParagraph = function()
     {
        //for debugging
        console.log("Executing writeToFirstParagraph");
        
        //creates a reference and overrides <p> tag child text contents
        var firstPTag = document.getElementById("firstParagraph");
        firstParagraph.textContent = "IT'S ALIVE!!!";
    }
    var alias = writeToFirstParagraph;
    */
        
    //execute function
    writeToFirstParagraph();
    
    console.log(firstPTag);
})();