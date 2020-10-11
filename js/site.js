/* 鼠标划入事件 */
function display_phone() {
  document.getElementsByClassName("site-hover-show")[0].style.display = "block";
  document.getElementsByClassName("site-hover-show")[0].style.height = "260px";
  document.getElementsByClassName("site-hover-show")[0].style.transition = "0.5s";
  document.getElementsByClassName("site-hover-show")[0].style.zIndex = "12";
}

/* 鼠标划出事件 */
function hidden_phone() {
  document.getElementsByClassName("site-hover-show")[0].style.display = "none";
}



/******************** slider 鼠标移入移出事件 ************************/

function display_slider() {
  document.getElementsByClassName("innher-item")[0].style.display = "block";
  // innher-item
  document.getElementsByClassName("innher-item")[0].style.zIndex = "2";
  console.log("鼠标移入");
}


function hidden_slider() {
  console.log("鼠标移出");
  document.getElementsByClassName("innher-item")[0].style.display = "none";
}

function display_slideritem() {
  console.log("鼠标移出r");
  document.getElementsByClassName("arrow_lr")[0].style.display = "block";
}

function hidden_slideritem() {
  console.log("鼠标移出c");
  document.getElementsByClassName("arrow_lr")[0].style.display = "none";

}







// 轮播图事件 S
var imgInfo = document.getElementById("item");
/* 获取 两个 左右箭头 和所有的 ol  */
var leftarrow = document.getElementsByClassName("fl_arrow")[0];
var rightarrow = document.getElementsByClassName("fr_arrow")[0];

var minIndex = 1, maxIndex = 6, currIndex = minIndex;


// 左箭头点击事件
leftarrow.onclick = function () {
  if (currIndex === minIndex) {
    currIndex = maxIndex;
  } else {
    currIndex--;
  }

  // 路径拼接  currIndex 数字  路径属于字符串 ，两个拼接需要转换为一起的 字符串
  imgInfo.setAttribute('src', 'img/MiHomeSlide/image0' + currIndex + '.jpg');
}


// 右箭头点击事件
rightarrow.onclick = function () {
  if (currIndex === maxIndex) {
    currIndex = minIndex;
  } else {
    currIndex++;
  }
  imgInfo.setAttribute('src', 'img/MiHomeSlide/image0' + currIndex + '.jpg');
}

// 轮播图事件 E
