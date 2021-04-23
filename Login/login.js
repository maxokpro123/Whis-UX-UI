//Phản hồi
$(document).ready(() => {
    document.addEventListener("DOMContentLoaded", function() {
            emoj = document.getElementsByClassName("fa");
            for (var i = 0; i < emoj.length; i++) {
                emoj[i].onclick = function() {
                    for (var j = 0; j < emoj.length; j++) {
                        emoj[j].classList.remove("ra");
                    }
                    this.classList.add("ra");
                }
            }
            input = document.getElementsByClassName("int");
            nhap = document.getElementById("placetext-1");
            for (var k = 0; k < input.length; k++) {
                input[k].onclick = function() {
                    nhap.classList.add("hienbang");
                }
            }
        }, false)
        //Đăng nhập và đăng kí
    document.addEventListener("DOMContentLoaded", function() {
        login = document.getElementById("login");
        list = document.getElementById("list");
        arrow = document.getElementById("arrow");
        ngoai = document.getElementById("body");
        login.onclick = function() {
            list.classList.toggle("xuat");
        }
        arrow.onclick = function() {
            list.classList.toggle("xuat");
        }
        ngoai.onclick = function() {
            list.classList.remove("xuat")
        }
    }, false)

    //Đổi đăng nhập thành đăng ký
    $(function() {
        $(".quadangky").click(function(e) {
            e.preventDefault();
            $(".row .dangki").animate({ opacity: 1, marginTop: -510, zIndex: 4 });
            $(".row .left").animate({ opacity: 0, paddingLeft: -100 });
        });
        $(".quadangnhap").click(function(e) {
            e.preventDefault();
            $(".row .dangki").animate({ opacity: 0, marginTop: -1200 });
            $(".row .left").animate({ opacity: 1, paddingLeft: 0 });
        });
    });
})
$(function() {
    $("#tabs").tabs();
});