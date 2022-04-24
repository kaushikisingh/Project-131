img="";
status="";
object=[];
function setup()
{
    canvas=createCanvas(350,350);
    canvas.center();
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded()
{
    console.log("modelLoaded");
 status=true;
 object_detector.detect(img,gotResults);
}
function preload()
{
    img=loadImage("bottle.jpg");
}
function draw()
{
    image(img,0,0,350,350);
   if(status !="")
   {
       for(i=0;i<object.length;i++)
       {
           document.getElementById("status").innerHTML="Status: object detected";
           fill("red");
           percent=floor(object[i].confidence*100);
           text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
        noFill();
        stroke("red");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
       }
   }
}
function gotResults(error,results)
{
if(error)
{
    console.log(error);
}
console.log(results);
object=results;
}