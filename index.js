const nextEl = document.querySelector(".next"),
    prevEl = document.querySelector(".prev"),
    ImageContainerEl = document.querySelector(".image-container");

    
    const ImgsEl = document.querySelectorAll("img");

    let currentImg = 1;

    let timeout;

    nextEl.addEventListener("click", () => {
        currentImg++;
        clearTimeout(timeout)
        updateImg();
    })

    
    prevEl.addEventListener("click", () => {
        currentImg--;
        clearTimeout(timeout)
        updateImg();
    })

    updateImg()

    function updateImg(){
        if(currentImg > ImgsEl.length){
            currentImg = 1;
        }else if(currentImg < 1){
            currentImg = ImgsEl.length;
        }
        ImageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px`;
        timeout = setTimeout(() => {
            currentImg++;
            updateImg()
        },3000)
    }