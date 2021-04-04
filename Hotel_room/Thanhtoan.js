// Ẩn hiện khung xuất hóa đơn
var questions = document.getElementsByClassName('bill');
for (var j = 0; j < questions.length; j++) {
    var question = questions[j];

    question.onclick = function() {

        var answer = this.nextElementSibling; // Dùng 'this' => OK (y)(y)(y)
        var display = answer.style.display;
        answer.style.display = display == 'block' ? 'none' : 'block';
    }

}

// Tab chọn phương thức thanh toán
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" ", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " ";
}
document.getElementById("myLink").click();


 