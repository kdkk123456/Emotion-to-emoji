//set up the web cam//
Webcam.set({
    height: 300,
    width: 350,
    image_type: "png",
    png_quality: 90
})
//attach the webcam in the div//
Webcam.attach("#camera")

//code for taking snapshot//
function capture() {
    Webcam.snap(
        function (pic) {
         //pic is a picture taken by webcam.snap//
         document.getElementById("snapshot").innerHTML=`<img src=${pic} id="captureimg">`   
        }
    )
}
//check ml5 version//
console.log(ml5.version)

//import the model using the var classifier//

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fObYwyCGh/model.json",modelloaded)

//check if the model has loaded//

function modelloaded() {
    console.log("hi")    
}
function speak() {
    speech=window.speechSynthesis;
    speakdata1="The first prediction is  "+prediction1
    speakdata2="The second prediction is  "+prediction2
    saythis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    speech.speak(saythis);
}