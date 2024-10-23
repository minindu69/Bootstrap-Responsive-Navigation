const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click",()=>{
    swal("Hello!", "You clicked the login button!", "success");
})

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const barsIcon = this.querySelector('.fa-bars');
    const timesIcon = this.querySelector('.fa-times');
    
    // Toggle the 'd-none' class to show or hide the icons
    barsIcon.classList.toggle('d-none');
    timesIcon.classList.toggle('d-none');
});