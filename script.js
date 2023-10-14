"use strict";

const openWindow = document.querySelectorAll('.window');
// console.log(openWindow);
const close = document.querySelector('.closebutton');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');

const openModal = function(){
    popup.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for(let i=0;i<openWindow.length;i++){
    openWindow[i].addEventListener('click',openModal);
}

const closeModal = function(){
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
};

close.addEventListener('click',closeModal);

overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape'&& !(popup.classList.contains('hidden'))){
        closeModal();
    }
})
