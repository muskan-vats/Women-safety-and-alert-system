function getLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(showPosition);

    }
    else{

        document.getElementById("location").innerHTML =
        "Geolocation not supported";
    }
}

function showPosition(position){

    let latitude = position.coords.latitude;

    let longitude = position.coords.longitude;

    document.getElementById("location").innerHTML =

    `
    Latitude: ${latitude}<br>
    Longitude: ${longitude}<br>

    <a href="https://www.google.com/maps?q=${latitude},${longitude}"
    target="_blank">
    Open Map
    </a>
    `;
}