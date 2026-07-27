function searchLocation(){

    let place = document.getElementById("search").value;

    if(place==""){

        alert("Please enter a destination.");
        return;

    }

    window.location.href = "explore.php?place=" + encodeURIComponent(place);

}