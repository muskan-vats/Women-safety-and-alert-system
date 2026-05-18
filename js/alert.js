function voiceAlert(){

    let message = new SpeechSynthesisUtterance();

    message.text =
    "Emergency alert activated. Please help immediately.";

    speechSynthesis.speak(message);
}