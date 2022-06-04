const images = document.querySelectorAll("[data-src]");
function preloadImage(src){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
}
const imgOptions = {
    threshold : 0,
    rootMargin: "0px 0px -500px 0px"
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
images.forEach(img =>{
    imgObsever.observe(img);
});
