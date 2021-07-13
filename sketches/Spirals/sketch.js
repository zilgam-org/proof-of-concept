var angle  = 0.0;
var offset = 200;
var scalar = 2;
var speed = 0.30;                                                //TA?
let radius1=0;
let height1=0;
let counter=0;

//-------------------------------------------------------------
function random_hash() {
  let chars = "0123456789abcdef";
  let result = '0x';
  for (let i = 64; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

tokenData = {"hash": random_hash()}

//----------------------------------------------------------------

let seed = parseInt(tokenData.hash.slice(0, 16), 16);
let p = [];
for (let j = 0; j < 32; j++) {
     p.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
   }

let rns = p.map(x => {
     return parseInt(x, 16) % 10;
});

//--------------------------------------------------------------------
let var1 =  rns[0];
if (var1>=0 && var1<=2){
  radius1 = 10;
  height1=10;
}
if (var1>2 && var1<=4){
  radius1 = 10;
  height1=2;
}
if (var1>4 && var1<=6){
  radius1 = 2;
  height1= 50;
}
if (var1>6 && var1<=8){
  radius1 = 150;
  height1=150;
}
if (var1>8 && var1<=10){
  radius1 = 100;
  height1=5;
}
//------------------------------------------------------------


function setup() {
  createCanvas(1000, 1000);
  fill(0);
  background(255,255,255);
  frameRate(100000);
  // print(rns);
  // cnv.position(0,0,'fixed');
 
  
}
//--------------------------------------------------------

let add1 = rns[4];
let add2 = rns[5];
let add3 = rns[6];
let col1 = 0;

if(rns[0]<=2){
  col1 = Math.floor(rns[0]*100);
}

let col2= col1+50;
if(rns[1]<=2){
  col2 = Math.floor(rns[1]*100);
}

let col3= col2+50;

if(rns[2]<=2){
  col3 = Math.floor(rns[2]*100);
}

//-------------------------------------------------------------------------
var2 = Math.ceil((rns[7]+rns[8]+rns[9]+rns[10])/4);
if(var2>=0 && var2<6){
  speed = 0.30;
}
if(var2>=6 && var2<=10){
  speed = 0.20;
}


//---------------------------------------------------------------------------
function draw() {
  
  if (col1>255){ col1=0;
  }
  if (col2>255){ col2=0;
  }
  if (col3>255){ col3=0;
  }
  

counter = counter+1; 
  
var x = offset + cos(angle) * scalar;
var y = offset + sin(angle) * scalar;

fill(col1,col2,col3);
  
ellipse(x-70,y-65, radius1, height1);
  
ellipseMode(CENTER);
angle += speed;
scalar += speed;

  col1 = col1 + add1;
  col2 = col2+ add2;
  col3 = col3 + add3 ;

  print(col1,col2,col3,add1,add2,add3,speed);
  
if (counter>=1000){                                 
   setTimeout(freezeCanvas, 0);
   } 
  
}
//------------------------------------------
function freezeCanvas() {
   
    draw = function(){}
}


