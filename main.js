narizX = 0
narizY = 0
pulsoE = 0
pulsoD = 0
tamanho = 0
var cacatua 
var textus = ""

function setup(){
    canvas = createCanvas(500,500)
    canvas.center()
    videos = createCapture(VIDEO)
    videos.size(300,300)
    posenet = ml5.poseNet(videos, modelLoaded)
    posenet.on("pose", gotPoses)
}
function preload(){
    cacatua = loadImage("cacatua.png")
}
function draw(){
    background("lightGray")
    document.getElementById("tamanh").innerHTML = "Tamanho do quadrado" + tamanho
    stroke("red")
    textos()
}
function gotPoses(results){
    if(results.length>0){
        narizX = results[0].pose.nose.x
        narizY = results[0].pose.nose.y
        pulsoE = results[0].pose.leftWrist.x
        pulsoD = results[0].pose.rightWrist.y
        tamanho = floor(pulsoE - pulsoD)
    }   
}
function modelLoaded(){
    console.log("Pegou sua pose")
}
function textos(){
    textus = document.getElementById("inputs").value
    console.log(textus)
    textus = "'" + textus + "'"
    textSize(tamanho)
    text(textus,narizX,narizY)
}
