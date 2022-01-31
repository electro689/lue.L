function preload() {
    
}

function setup() {
    canvas=createCanvas(640, 480) ;
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();

    
}

function draw() {
    image(video, 170,150, 200, 200);
    circle(50, 50, 100); 
    rect(550, 350, 55, 55, 20);  
}

function take_snapshot() {
    save('name.png');
}

