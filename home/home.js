function searchLocation(){
    const placeInput = document.getElementById("search");
    const place = placeInput ? placeInput.value.trim() : "";

    if (!place) {
        alert("Please enter a destination.");
        return false;
    }

    window.location.href = "../exploare/explore.html?q=" + encodeURIComponent(place);
    return false;
}