const mainTag = document.getElementsByTagName("main")[0];

function closeOverlay(button)
{
    button.parentElement.style.display = "none";
    mainTag.style.filter = "blur(0px)";
}

function showOverlay(button)
{
    console.log(button.className);
    document.getElementById(button.className).style.display = "flex";
    console.log(mainTag);
    mainTag.style.filter = "blur(1115px)";
    // mainTag.style.filter = "grayscale(70%)";
}

