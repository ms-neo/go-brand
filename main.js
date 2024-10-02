const clicked = document.querySelector('.web-design')
const showDiv = document.querySelector('.hide')


clicked.addEventListener('click',(e)=>{
    console.log(e)
    showDiv.classList.toggle('show')

})