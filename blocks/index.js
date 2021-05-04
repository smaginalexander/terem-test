const popup = document.querySelector('.madal-container');
const titleBlock = document.querySelector('.container__top');
const middleBox = document.querySelector('#middle-box')

const yellowBtn = document.querySelector('.btn-warning');
const closeBtn = document.querySelector('.btn-primary');
const greenBtn = document.querySelector('.btn-success');


function toggleClassOrder() {
    middleBox.classList.toggle('set-order')
}

function toggleClassHidden() {
    titleBlock.classList.toggle('hidden');
}

function handleClose() {
    popup.classList.add('hidden')
}
closeBtn.addEventListener('click', handleClose)
yellowBtn.addEventListener('click', toggleClassHidden)
greenBtn.addEventListener('click', toggleClassOrder)