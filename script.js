
let toggleNav = false;

let toggleClick = function(){
    let getSidebar = document.querySelector(".sidebar");
    let getSidebarUl = document.querySelector(".sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".sidebar a");
    let getbody = document.querySelector("body");

    if(toggleNav === false){

        getbody.style.opacity = "0.85";
        
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.visibility = "visible";
        getSidebar.style.width = "200px";

        
        

        let len = getSidebarLinks.length;

        for(let i = 0; i < len; i++){
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNav = true;

    }
    else if(toggleNav === true){
 
        getSidebar.style.width = "40px";
        getbody.style.opacity = "1";

        let len = getSidebarLinks.length;

        for(let i = 0; i < len; i++){
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.visibility = "hidden";

        toggleNav = false;

    }
};

let aboutTog = false;

let aboutClick = function() {
    let aboutBar = document.querySelector(".about");
    let aboutImg = document.querySelectorAll(".about img");
    let aboutP = document.querySelectorAll(".about p");

    if(aboutTog === false){

        

        aboutBar.style.visibility = "visible";
        aboutBar.style.height = "250px";

        let len = 2;

        for(let i = 0; i < len; i++){
            aboutImg[i].style.visibility = "visible";
            aboutP[i].style.visibility = "visible";
        }
        
        // aboutImg.style.visibility = "visible";
        // aboutP.style.visibility = "visible";
        

        aboutTog = true;

    }
    else if(aboutTog === true){
 
        aboutBar.style.visibility = "hidden";
        aboutBar.style.height = "0px";


        let len = 2;

        for(let i = 0; i < len; i++){
            aboutImg[i].style.visibility = "hidden";
            aboutP[i].style.visibility = "hidden";
        }
        
        // aboutImg.style.visibility = "hidden";
        // aboutP.style.visibility = "hidden";

        aboutTog = false;

    }
}


            //     function WriteToFile(){

            //     const fs = require('fs')
             
            //     let fs = CreateObject("Scripting.FileSystemObject"); 
            //     let s   = fs.CreateTextFile("/Desktop/Web 3/orders.txt", True);
             
            //     var name = document.getElementById('name');
            //     var phone  = document.getElementById('phone');
            //     var otime  = document.getElementById('order-time');
            //     var type  = document.getElementById('type');
            //     var text  = document.getElementById('text');
            //     var atime  = document.getElementById('arrival-time');
                
             
            //     file.writeline("Name :" + name);
            //     file.writeline("Number :" + phone);
            //     file.writeline("Order Time :" + otime);
            //     file.writeline("Meat Type :" + type);
            //     file.writeline("Order Typed :" + text);
            //     file.writeline("Arrival Time :" + atime);
             
            //     s.Close();
            //  }

//             <button type="button"
// onclick="document.getElementById('demo').innerHTML = Date()">
// Click me to display Date and Time.</button>

// <p id="demo"></p>



