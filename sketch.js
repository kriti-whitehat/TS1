const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var slingshot,poly;


function preload(){
    poly=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground= new Ground(600,height,1200,20);
    platform1=new Ground(400,300,200,20);
    platform2=new Ground(1200,200,20,400);
    
    box1=new Box(320,275,30,30);
    box2=new Box(350,275,30,30);
    box3=new Box(380,275,30,30);
    box4=new Box(410,275,30,30);
    box5=new Box(440,275,30,30);
    box6=new Box(470,275,30,30);
    box7=new Box(335,245,30,30);
    box8=new Box(365,245,30,30);
    box9=new Box(395,245,30,30);
    box10=new Box(425,245,30,30);
    box11=new Box(456,245,30,30);
    box12=new Box(347,215,30,30);
    box13=new Box(377,215,30,30);
    box14=new Box(407,215,30,30);
    box15=new Box(437,215,30,30);
    box16=new Box(359,185,30,30);
    box17=new Box(389,185,30,30);
    box18=new Box(419,185,30,30);
    box19=new Box(370,155,30,30);
    box20=new Box(400,155,30,30);
    box21=new Box(385,125,30,30);


    ball=Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot=new SlingShot(this.ball,{x:100,y:200});
   // slingshot = new SlingShot(polygon.body,{x:200, y:50});
}
    
    

    

function draw(){
    Engine.update(engine);
    background(255);


    drawSprites();
    //polygon.display();
    ground.display();
    platform1.display();
    platform2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box8.display();
    box7.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    
    imageMode(CENTER);
    image(poly,ball.position.x,ball.position.y,40,40);
    slingshot.display();
}
function mouseDragged()
{
	Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
	slingshot.fly();
}