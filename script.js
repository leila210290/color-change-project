document.addEventListener("DOMContentLoaded",()=>{
   
    const colorbox = document.getElementById("color-box");
    const changebtn = document.getElementById("change-color-btn");

    function getRandomColor() {
        const leet = "0123456789ABCDEF";
        let color = "#";
        for (let i =0; i < 6 ; i++){
            color+=leet[Math.floor(Math.random()*16)];
        }
        return color;
    }
    changebtn.addEventListener("click",()=>{
        const applycolor = getRandomColor();
        colorbox.style.backgroundColor=getRandomColor();
    })

})