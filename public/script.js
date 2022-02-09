// DOM elements 
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');

const middleContent = document.querySelector('.middle-content');

const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');

const loginModal = document.querySelector('.login-modal');

const modalX = document.querySelector('.login-modal i');

const loginFormBtn = document.querySelector('.login-form-btn');

const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalx = document.querySelector('.modal-header i');

const postHeaderBtn = document.querySelector('.modal-header button');
const footerXbtn = document.querySelector('.modal-icons span');
const modalInput = document.querySelector('.modal-input');

const user = document.querySelector('.user');

const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar');

const sidebarXbtn = document.querySelector('.sidebar-header i');

const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

// ***************************************************
// ***************************************************

// Main page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
}


middleContent.addEventListener('click', e => {
    if(e.target.classList.contains('main-btn')) {

        goToLoginPage();

    }
});

btnTop.addEventListener('click', ()=> {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');
    if(inputUserInfo.value !== "" && inputPassword.value !== ""){
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'grid';
    }else{
        goToLoginPage();
        loginModal.style.display = "block";
    }

});

// login page 
modalX.addEventListener('click', () => {
    loginModal.classList.remove('show'); 
})

loginFormBtn.addEventListener('click', () => {
    const loginFormTxt = document.querySelector('.loginform-txt');
    const loginFormPass = document.querySelector('.loginform-pass');
    if(loginFormTxt.value != "" && loginFormPass.value != ""){
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'grid';
    }else{
       loginModal.classList.add("show");
    }
})

// news feed 
// post method 

postBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modalWrapper.classList.add('modal-wrapper-show');
})

postModalx.addEventListener('click', () => {
    modal.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper-show');

    if(modalInput.value !== ""){
        modalInput.value = "";
        changeOpacity(0.5);
    }
});

const changeOpacity = (x) => {
    postHeaderBtn.style.opacity = x;
    footerXbtn.style.opacity = x;
};

modalInput.addEventListener('keypress', (e) => {
    if(e.target.value != ""){
        changeOpacity(1);
    }
});
modalInput.addEventListener('blur', (e) => {
    if(e.target.value === ""){
        changeOpacity(0.5);
    }
});

user.addEventListener('click', () => {
    sidebarWrapper.classList.add('sidebar-wrapper-show');
    sidebar.classList.add('sidebar-show');

})

sidebarXbtn.addEventListener('click', () => {
    sidebarWrapper.classList.remove('sidebar-wrapper-show');
    sidebar.classList.remove('sidebar-show');
})

// dark mode 
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border-color');

toggle.addEventListener('click', () => {
    circle.classList.toggle('move');


    Array.from(darkElements1).map((darkEl1)=> {
        darkEl1.classList.toggle('dark-1')
        });

    Array.from(darkElements2).map((darkEl2) => {
        darkEl2.classList.toggle('dark-2')
        });
    
    Array.from(lightTexts).map((lightTxt) => {
        lightTxt.classList.toggle('light')
        });

    Array.from(borders).map((border) => {
        border.className.toggle('border-color')
        });
    
});