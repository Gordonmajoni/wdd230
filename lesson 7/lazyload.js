const images = document.querySelectorAll("[data-src]");
function preloadImage(img){
    const src = img.getAttribute("images");
    if(!src){
        return;
    }
    img.src = src;
}
const imgOptions = 
{threshold : 1,
    rootMargin: "0px 0px 300px 0px";
};

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
