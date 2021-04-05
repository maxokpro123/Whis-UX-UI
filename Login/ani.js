document.addEventListener("DOMContentLoaded", function() {
    var middle__text = document.getElementsByClassName("middle__text");
    var button__continue = document.getElementsByClassName("button__continue");
    button__continue.onclick = function() {
        middle__text.classlist.add("hide");
    }
}, false)