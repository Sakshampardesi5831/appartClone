const circle1=document.querySelector("#circle1");
const circle2=document.querySelector("#circle2");
const circle3=document.querySelector("#circle3");
const circle4=document.querySelector("#circle4");

const content=document.querySelector("#content")
content.addEventListener("mouseenter",move())
function move(){
    content.addEventListener("mousemove",function(dets){
        // console.log("hey");
        //  console.log((dets.x-(totalWidth/2))/(totalWidth/100));
        //  console.log((((dets.y-300)-(85/2))/(2.84)/2));
         console.log(((dets.y-250)-(80/2))/(2.84)/2);
         circle1.style.transform=(`translate(${-(dets.x-(totalWidth/2))/(totalWidth/100)}%,${-(((dets.y-totalLength/2)-(60/2))/(totalLength/100)/1.2)}%)`);
         circle2.style.transform=(`translate(${(dets.x-(totalWidth/2))/(totalWidth/100)}%,${-(((dets.y-totalLength/2)-(60/2))/(totalLength/100)/1.2)}%)`);
        circle3.style.transform = (`translate(${(dets.x-(totalWidth/2))/(totalWidth/100)}%,${(((dets.y-totalLength/2)-(60/2))/(totalLength/100)/1.2)}%)`);
        circle4.style.transform = (`translate(${-(dets.x-(totalWidth/2))/(totalWidth/100)}%,${(((dets.y-totalLength/2)-(60/2))/(totalLength/100)/1.2)}%)`);
        

    })
}

const totalWidth=content.getBoundingClientRect().width;
const totalLength=content.getBoundingClientRect().height;
function leave(){
     
    // circle2.style.transform=(`translate(0%,0%)`);
    // circle3.style.transform=(`translate(0%,0%)`);
    // circle4.style.transform=(`translate(0%,0%)`);
    console.log("0");
}
content.addEventListener("mouseleave",function(){
    leave();
})
function leave(){
    circle1.style.transform=(`translate(0%,0%)`);
      circle2.style.transform=(`translate(0%,0%)`);
     circle3.style.transform=(`translate(0%,0%)`);
     circle4.style.transform=(`translate(0%,0%)`);
}
