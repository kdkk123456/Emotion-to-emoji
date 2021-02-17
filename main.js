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
function identify() {
    img=document.getElementById("captureimg")
    classifier.classify(img,gotresults)
}
function gotresults(error,results) {
    if (error) {
        console.log(error)
    }
    else  {
        console.log(results)
        prediction1=results[0].label
        prediction2=results[1].label
        document.getElementById("emotion1").innerHTML=prediction1
        document.getElementById("emotion2").innerHTML=prediction2
        if (prediction1=="Sad") {
            document.getElementById("emoji1").innerHTML="&#128532;"
        }
        if (prediction1=="Crying") {
            document.getElementById("emoji1").innerHTML="&#128546;"
        }
        if (prediction1=="Amazed") {
            document.getElementById("emoji1").innerHTML="&#128512;"
        }
        if (prediction1=="Angry") {
            document.getElementById("emoji1").innerHTML="&#128545;"
        }
        if (prediction1=="Happy") {
            document.getElementById("emoji1").innerHTML="&#128522;"
        }
        if (prediction2=="Sad") {
            document.getElementById("emoji2").innerHTML="&#128532;"
        }
        if (prediction2=="Crying") {
            document.getElementById("emoji2").innerHTML="&#128546;"
        }
        if (prediction2=="Amazed") {
            document.getElementById("emoji2").innerHTML="&#128512;"
        }
        if (prediction2=="Angry") {
            document.getElementById("emoji2").innerHTML="&#128545;"
        }
        if (prediction2=="Happy") {
            document.getElementById("emoji2").innerHTML="&#128522;"
        }
        speak()
    }
}