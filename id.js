let sname = document.getElementById("sname");
let clgname = document.getElementById("clgname");
let locat = document.getElementById("locationname");

let rsname = document.getElementById("p11");
let cname = document.getElementById("p12");
let lname = document.getElementById("p13");

let btn = document.getElementById("gcard");
let photo = document.getElementById("photo");
let image = document.getElementById("image");
let mainimage = document.getElementById("mainimage");


photo.addEventListener('change', (event)=>{
    var url = URL.createObjectURL(event.target.files[0]);
    image.src = url;
    mainimage.src = url;
})




btn.addEventListener('click', ()=>{
    rsname.innerHTML = sname.value;
    cname.innerHTML = clgname.value;
    lname.innerHTML = locat.value;
    
})