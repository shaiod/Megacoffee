// main.js
window.addEventListener('load',()=>{

// main.js

var elem=document.getElementById("video");
if(elem.requestFullscreen){elem.requestFullscreen();}
else if(elem.mozRequestFullScreen){elem.mozRequestFullScreen();}
else if(elem.webkitRequestFullscreen){elem.webkitRequestFullscreen();}


// 헤더 리스트
const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const header = document.querySelector(".header_wrap");
var subMenu = document.querySelectorAll('.gnb>ul>li>ul');


for(var i=0; i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener('mouseover',()=>{
       header.classList.add("on");
       subMenu.forEach(item=>{
       item.classList.add("on");
       })
    }); //mouseover
    gnbMenu[i].addEventListener('mouseout', () =>{
        header.classList.remove("on");
        subMenu.forEach(item=>{
        item.classList.remove("on");
      })
    });
    gnbMenu[i].children[0].addEventListener('focus', () =>{
        header.classList.remove("on");
        subMenu.forEach(item=>{
        item.classList.remove("on");
      })
    });
    gnbMenu[i].children[0].addEventListener('blur', () =>{
        header.classList.remove("on");
        subMenu.forEach(item=>{
        item.classList.remove("on");
      })
    });
  }

// 슬라이드 이벤트


  
let devHeight = window.innerHeight;

window.addEventListener("resize", () => {
    devHeight = window.innerHeight;
})

let contents = document.querySelectorAll("#container>div");
for (let i=0; i<contents.length; i++){
    contents[i].style.height = devHeight + "px";
}

let sections = document.querySelectorAll("#container>div>section");

let activation= (index,list) => {
    for(let el of list){
        el.classList.remove("on");
    }
    list[index].classList.add("on");

}

var mHtml = $("html");
var page = 1;

mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
  if(mHtml.is(":animated")) return;
  if(e.originalEvent.deltaY > 0) {
      if(page == 6) return;
      page++;
  } else if(e.originalEvent.deltaY < 0) {
      if(page == 1) return;
      page--;
  }
  var posTop =(page-1) * $(window).height();
  mHtml.animate({scrollTop : posTop},800);
})

//스크롤 이벤트2
$(document).ready(function() {
  $(window).scroll( function(){
      $('.menu_animation').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if(bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-bottom':'0px'},3000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.cost').each( function(i){
          
          var top_of_element = $(this).offset().top + $(this).outerHeight();
          var top_of_window = $(window).scrollTop() + $(window).height();
          
          if(top_of_window > top_of_element ){
              $(this).animate({'opacity':'1'},3000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.cost').each( function(i){
          
          var top_of_element = $(this).offset().top + $(this).outerHeight();
          var top_of_window = $(window).scrollTop() + $(window).height();
          
          if(top_of_window > top_of_element ){
              $(this).animate({'opacity':'1'},3000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.sub6_l').each( function(i){
          
          var top_of_element = $(this).offset().top + $(this).outerHeight();
          var top_of_window = $(window).scrollTop() + $(window).height();
          
          if(top_of_window > top_of_element ){
              $(this).animate({'opacity':'1'},3000);
          }
          
      }); 
  });
});


// 클릭시 메뉴 오렌지색
const Click = document.querySelectorAll(".menu_1");

function handleClick(event) {
  Click.forEach((e) => {
    e.classList.remove("click");
  });
  event.target.classList.add("click");
}

Click.forEach((e) => {
  e.addEventListener("click", handleClick);
});

});
