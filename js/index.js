var imgArr = ["201806261053564966.jpg","201806082104343468.jpg","201804171831356107.png","201702151452533692.jpg","201702151452362548.jpg"];
var img = document.getElementById("img");
function index(index) {
    img.src = "images/"+imgArr[index];
}

var box = document.getElementsByClassName("box");
function f(index) {
    for (var i = 0;i<box.length;i++){
        if (index == i){
            box[i].style.display = "block";
        } else {
            box[i].style.display = "none";
        }
    }
}
