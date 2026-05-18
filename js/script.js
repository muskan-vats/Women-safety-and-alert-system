const sosBtn = document.getElementById("sosBtn");

sosBtn.addEventListener("click", ()=>{

    alert("Emergency Alert Sent Successfully!");

    let audio = new Audio(
    "https://www.soundjay.com/buttons/sounds/beep-01a.mp3"
    );

    audio.play();

});

function fakeCall(){

    alert("Incoming Fake Call Started");
}