let searchBox=document.querySelector('.searchBox');
let crossBtn=document.querySelector('.crossBtn');
let searchBtn=document.querySelector('.searchBtn1');
let chatBox=document.querySelector('.page01');
let chatBtn=document.querySelector('.page0001');
let isClicked=true;

searchBtn.onclick = function(){
    debugger;
    searchBox.classList.add('active');
}
crossBtn.onclick = function(){
    searchBox.classList.remove('active');
}
chatBtn.onclick =function(){
    if(isClicked){
    chatBox.classList.add('active');
    isClicked = false;
    }
    else{
        chatBox.classList.remove('active');
        isClicked = true;
    }
}



const slides = document.querySelectorAll('.slide');
// console.log(slides)
var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    slideImage()
}


const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}



