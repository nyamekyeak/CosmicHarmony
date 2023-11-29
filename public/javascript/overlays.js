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


// Playlist Viewer

const playlistViewSelector = document.getElementById("playlistViewSelector");

playlistViewSelector.addEventListener("change", function()
{
    const entryPoint = document.getElementById("playlistViewOverlay");
    var allPlaylistViews = entryPoint.getElementsByClassName("playlistPreview");
    var targetPlaylistView = "";
    var targetId = "";
    if(playlistViewSelector.value == "none")
    {
        // disable  all playlist views
        for(let i = 0; i < allPlaylistViews.length; i++)
        {
            allPlaylistViews[i].style.display = "none";
        }
    }
    else
    {
        targetId = playlistViewSelector.value;
        for(let i = 0; i < allPlaylistViews.length; i++)
        {
            if(allPlaylistViews[i].id === playlistViewSelector.value)
            {
                targetPlaylistView = allPlaylistViews[i];
            }
            else
            {
                allPlaylistViews[i].style.display = "none";
            }
        }
        targetPlaylistView.style.display = "flex";
    }
})
