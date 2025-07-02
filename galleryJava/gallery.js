console.log("Script is loaded!");





function upDate(previewPic) {
    console.log("Event triggered!");
    console.log("ALT:", previewPic.alt);
    console.log("SRC:", previewPic.src);

    let imageBox = document.getElementById("image");
    imageBox.innerHTML = previewPic.alt;
    imageBox.style.backgroundImage = `url('${previewPic.src}')`;
}





	function unDo() {
    let imageBox = document.getElementById("image");
    imageBox.innerHTML = "Hover over an image below to display here.";
    imageBox.style.backgroundImage = "url('')";
}

