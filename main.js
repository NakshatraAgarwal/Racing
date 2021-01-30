car1_width=120;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;
background_image="back 1.jpg"
function add(){
    background_Img_tag=new Image();
    background_Img_tag.onload=upload_background;
    background_Img_tag.src=background_image;
    car1_Img_tag=new Image();
    car1_Img_tag.onload=upload_car1;
    car1_Img_tag.src=car1_image;
    car2_Img_tag=new Image();
    car2_Img_tag.onload=upload_car2;
    car2_Img_tag.src=car2_image;
}
function upload_background(){
    ctx.drawImage(background_Img_tag,0,0,canvas.width,canvas.height);
}
function upload_car1(){
    ctx.drawImage(car1_Img_tag,car1_x,car1_y,car1_width,car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_Img_tag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
if(keypressed=='38'){
    car1_up();
    console.log("up arrow key");
}
if(keypressed=='40'){
    car1_down();
    console.log("down arrow key");
}
if(keypressed=='37'){
    car1_left();
    console.log("left arrow key");
}
if(keypressed=='39'){
    car1_right();
    console.log("right arrow key");
}
if(keypressed=='87'){
    car2_up();
    console.log("w");
}
if(keypressed=='65'){
    car2_left();
    console.log("a");
}
if(keypressed=='83'){
    car2_down();
    console.log("s");
}
if(keypressed=='68'){
    car2_right();
    console.log("d");
}
if(car1_x>700){
    console.log("Car 1 Won");
    document.getElementById('status').innerHTML="Car 1 Won!!!"
}
if(car2_x>700){
    console.log("Car 2 Won");
    document.getElementById('status').innerHTML="Car 2 Won!!!"
}
}
function car1_up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        console.log("When up arrow is pressed ,x="+car1_x+"y="+car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car1_down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("When down arrow is pressed ,x="+car1_x+"y="+car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car1_left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("When left arrow is pressed ,x="+car1_x+"y="+car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car1_right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        console.log("When right arrow is pressed ,x="+car1_x+"y="+car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car2_up(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        console.log("When up arrow is pressed ,x="+car2_x+"y="+car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car2_down(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        console.log("When down arrow is pressed ,x="+car2_x+"y="+car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car2_left(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        console.log("When left arrow is pressed ,x="+car2_x+"y="+car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car2_right(){
    if(car2_x<=700){
        car2_x=car2_x+10;
        console.log("When right arrow is pressed ,x="+car2_x+"y="+car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
