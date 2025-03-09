// script.js - Adds interactive effects

document.addEventListener("DOMContentLoaded", function() {
    let redactedTexts = document.querySelectorAll(".redacted");
    
    redactedTexts.forEach(text => {
        text.addEventListener("mouseover", function() {
            this.style.backgroundColor = "transparent";
            this.style.color = "#ff0000";
        });
        text.addEventListener("mouseout", function() {
            this.style.backgroundColor = "#ff0000";
            this.style.color = "#ff0000";
        });
    });
});
