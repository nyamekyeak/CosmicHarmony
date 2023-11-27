const playlistSelect = document.getElementById("playlistSelect");
const playlistBuildEntry = document.getElementsByClassName("playlistLoader");
const newPlaylistSongs = [];
const templateSongSelectionCard = document.getElementsByClassName("songListing")[0].children[0];
const noPlaylistRadio = document.getElementById("noPlaylistRadio");
const playlistLoaderRadio = document.getElementById("loadPlaylist");
const playlistCreatorRadio = document.getElementById("createPlaylist");
function uncheckOthers(radio)
{
    var otherRadios = document.getElementsByName("radio");
    for(var i = 0; i < otherRadios.length; i++)
    {
        if(otherRadios[i] != radio)
        {
            otherRadios[i].checked = false;
        }
    }
}

function noPlaylistAllocation(radio)
{
    if(radio.checked == true)
    {
        uncheckOthers(radio);
        document.getElementsByClassName("builders")[0].children[0].style.display = "none";
        document.getElementsByClassName("builders")[0].children[1].style.display = "none";
    }
}

function playlistLoader(radio)
{
    if(radio.checked == true)
    {
        uncheckOthers(radio);
        document.getElementsByClassName("builders")[0].children[0].style.display = "flex";
        document.getElementsByClassName("builders")[0].children[1].style.display = "none";
    }
}

function playlistCreator(radio)
{
    if(radio.checked == true)
    {
        uncheckOthers(radio);
        document.getElementsByClassName("builders")[0].children[0].style.display = "none";
        document.getElementsByClassName("builders")[0].children[1].style.display = "flex";
    }
}

function addToNewPlaylist(button)
{
    console.log(newPlaylistSongs);
    if(!newPlaylistSongs.includes(button.parentElement.children[0].id))
    {
        const buttonParent = button.parentElement; //entrypoint where i can access all the info
        var newSongId = buttonParent.children[0].id;
        var newSongSource = buttonParent.children[0].src;
        var songCard = buttonParent.parentElement; //entry point to access info like name and duration
        const songInfo = songCard.children[1];
        var newSongName = songInfo.children[0].innerText;
        var newSongArtist = songInfo.children[1].innerText;
        var newSongDuration = songInfo.children[2].innerText;
        var newSongAlbumArt = songCard.children[0].children[0].src;
        var newSongGenre = songInfo.children[3].innerText; //TODO: make capitalized
        var newSongCard = templateSongSelectionCard.cloneNode(true);
        newSongCard.id = "";
        newSongCard.children[2].children[0].src = newSongSource;
        newSongCard.children[2].children[0].id = newSongId;
        newSongCard.children[0].children[0].src = newSongAlbumArt;
        newSongCard.children[1].children[0].innerText = newSongName;
        newSongCard.children[1].children[1].innerText = newSongArtist;
        newSongCard.children[1].children[2].innerText = newSongDuration;
        console.log(newSongId);
        newPlaylistSongs.push(newSongId);
        newSongCard.display = "flex";
        if(newPlaylistSongs.length < 10)
        {
            document.getElementById("selectedSongCount").innerText = "0" + newPlaylistSongs.length.toString();
        }
        else
        {
            document.getElementById("selectedSongCount").innerText = newPlaylistSongs.length.toString();
        }
        document.getElementById("newPlaylistSongSelection").appendChild(newSongCard);       
    }
    else
    {
        alert("Song already added");
    }

}

playlistSelect.addEventListener("change", function()
{
    var referenceID = playlistSelect.value;
    var loadedPlaylists = document.getElementsByClassName("playlistContent");
    for(var i = 0; i < loadedPlaylists.length; i++)
    {
        if(loadedPlaylists[i].id != referenceID)
        {
            loadedPlaylists[i].style.display = "none";
        }
        else
        {
            loadedPlaylists[i].style.display = "flex";
        }
    }
})

function computeNewTime(timeString, hourChange)
{
    
}

function runtimeUpdate(runtimeString, minuteChange)
{

}