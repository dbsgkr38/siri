// 3단아코디언

const menuToggleBtn = document.querySelector('.toggleBtn');
const menuHide = document.getElementById('menu');
let isHideMenu = false;

menuToggleBtn.addEventListener("click", function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        menuHide.classList.add("show");
        menuToggleBtn.classList.add("active")
    }else{
        menuHide.classList.remove("show");
        menuToggleBtn.classList.remove("active")
    }
});

//1차메뉴
const toggles = document.querySelectorAll('.toggle');

function toggleAcco(e){
    e.preventDefault();//a태그의 올라가려는 성질을 막아줌
    
    if(this.parentNode.classList.contains("active")){
        this.parentNode.classList.remove("active");
    } else{
        for(i = 0; i < toggles.length; i++){
            toggles[i].parentNode.classList.remove("active");
        }
        this.parentNode.classList.add("active");
    }
};

for(i = 0; i < toggles.length; i++){
    toggles[i].addEventListener("click", toggleAcco);
};

$('#bxslider').bxSlider({
    auto: true,
    autoControls: false,
    stopAutoOnClick: false,
    pager: true,

  });


//2차메뉴
const toggleSub = document.querySelectorAll('.toggleActive');

function toggleAccodion(e){
    e.preventDefault();//a태그의 올라가려는 성질을 막아줌
    
    if(this.parentNode.classList.contains("active")){
        this.parentNode.classList.remove("active");
    } else{
        for(i = 0; i < toggleSub.length; i++){
            toggleSub[i].parentNode.classList.remove("active");
        }
        this.parentNode.classList.add("active");
    }
};

for(i = 0; i < toggleSub.length; i++){
    toggleSub[i].addEventListener("click", toggleAccodion);
};