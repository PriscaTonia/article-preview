// getting the buttons
const share = document.querySelector(".icon");
const shareAfter = document.querySelector(".icon-after");

// getting the containers
const profile = document.querySelector(".profile-container");
const icons = document.querySelector(".icons-container");

//event listener to the share button
share.addEventListener("click", (e)=>{
    //console.log(e.target);
    profile.style.display = "none";
    icons.style.display = "grid";
});

shareAfter.addEventListener("click", (e)=>{
    // console.log(e.target);
    icons.style.display = "none";
    profile.style.display = "grid";
});