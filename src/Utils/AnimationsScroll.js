function animationObserverOnScroll(navBarClass,backgroundClass,StyleClass){

    const navBar = document.querySelector(`.${navBarClass}`);
    const background = document.querySelector(`.${backgroundClass}`)
    const options={
        threshold:[0.0005,0.05],
    }

    const callback =(entries,observer)=>{
        console.log(entries)
       entries.forEach(entry => {
           console.log(entry);

        if(entry.intersectionRatio  <= 0.05)
        { 
            navBar.classList.add(StyleClass);
            console.log(navBar.classList);
            
        }
            else if(entry.intersectionRatio >= 0)
                {
                navBar.classList.remove(StyleClass);
                console.log(entry.intersectionRatio);
                }
       }); 
       
    }
    const observer = new IntersectionObserver(callback,options);
    observer.observe(background);

}


module.exports.animationObserverOnScroll = animationObserverOnScroll;