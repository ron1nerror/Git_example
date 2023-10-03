function anotherDate(date) {
fetch("https://apod.nasa.gov/planetary/apod?api_key=P8ntUBm52xbVVgcxUTtQRFPiAcJsqV4F2J2AwKuw")
    .then((response)=> response.json())
    .then((data) => updatePage(data));
}
function todayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Months are zero-based, so add 1
    const day = today.getDate();

    // Format the date in YYYY-MM-DD format
    const formattedDate = `${year}-${month}-${day}`;

    anotherDate(formattedDate);
}

function updatePage(data){
    let image = document.getElementByID("image");
    image.src = data["url"];

    let title = document.getElementByID("image-title");
    title.innerHTML = data["title"];

    let explanation = document.getElementByID("image-explanation");
    explanation.innerHTML = data["explanation"];
}

todayDate();