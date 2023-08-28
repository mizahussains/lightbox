// Open the lightbox
function openModal(imageSrc, captionText) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modal-image");
    var caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImage.src = imageSrc;
    caption.innerHTML = captionText;
}

// Close the lightbox
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the lightbox when clicking outside the image
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
