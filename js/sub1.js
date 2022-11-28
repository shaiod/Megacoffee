

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

  //모달창
  const openButton = document.querySelector(".as");
  const modal = document.querySelector(".modal");
  const closeButton = modal.querySelector("button");
  const closeBtn = modal.querySelector(".close-area")
  const modalBackground = modal.querySelector(".modal__background");
  
  function displayModal(){
      modal.classList.toggle("hidden");
  }

  
  openButton.addEventListener("click", displayModal);
  closeButton.addEventListener("click", displayModal);
  closeBtn.addEventListener("click", displayModal);
  modalBackground.addEventListener("click", displayModal);

