document.body.style.overflow = "hidden";
window.addEventListener("load",() => {
    const l=document.querySelector(".loader");
    setTimeout(() =>{
    l.classList.add("loader-hidden");

    l.addEventListener("transitionend", () => {
        l.remove();
        document.body.style.overflow = "auto";
    });
    },3200);
   
});