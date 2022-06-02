const images = document.querySelectorAll("images");
function preloadImage(img){
    const src = img.getAttribute("images");
    if(!src){
        return;
    }
    img.src = src;
}
const imgOptions = {};

const imgObsever = new IntersectionObserver((entries,imgObsever)=>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
        }
    });
},imgOptions);
images.forEach(image =>{
    imgObsever.observe(image);
});
