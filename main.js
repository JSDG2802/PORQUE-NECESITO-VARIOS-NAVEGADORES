var remove_decimals = 0
var munecaX = 0
var munecaY = 0
var mice_on_venus = 0
function setup()
{
   video = createCapture(VIDEO);
   video.size(550,550);
   canvas = createCanvas(550,500);
   canvas.position(100,270);
   PoseNet = ml5.poseNet(video,modelo_cargado);
   PoseNet.on("pose",obtain_poses);
}
function draw()
{
  image(video,0,0,400,400);
  fill("red");
  stroke("blue");
  circle(muneca_derechaX,muneca_derechaY,20);
  Rmuneca_derechaY = Number(muneca_derechaY);
  remove_decimals = floor(Rmuneca_derechaY);
  document.getElementById("trash").innerHTML = "volumen="+remove_decimals;
  mice_on_venus.setVolume(remove_decimals);
}
function preload()
{
  mice_on_venus = loadSound("canción Minecraft.mp3")
}
function yalp()
{
  mice_on_venus.play();
}
function modelo_cargado()
{
  console.log("model loaded");
}
function obtain_poses(results)
{
  if(results.length>0)
  {
   //console.log(results);
   muneca_derechaX = results[0].pose.rightWrist.x;
   muneca_derechaY = results[0].pose.rightWrist.y;

   muneca_izquierdaX = results[0].pose.leftWrist.x;
   muneca_izquierdaY= results[0].pose.leftWrist.y;
   //console.log(muneca_izquierdaX+" "+muneca_izquierdaY)
   //console.log(muneca_derechaX+" "+muneca_derechaY)
  }
}