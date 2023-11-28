var randomCoverSuffix = Math.floor(Math.random() * 7);

const eventCreated = 
{
    "eventId": "",
    "eventName": "",
    "description": "",
    "genre": [],
    "eventDate": "",
    "eventTime": "",
    "eventRuntime": 0,
    "playlist": "",
    "leadProducer": "",
    "assistantProducer": "",
    "dj": "",
    "eventStatus": "upcoming",
    "cover": `../assets/images/eventCovers/eventCover${randomCoverSuffix}.jpg`
}

const playlistSelect = document.getElementById("playlistSelect");
const playlistBuildEntry = document.getElementsByClassName("playlistLoader");
const newPlaylistSongs = [];
const templateSongSelectionCard = document.getElementsByClassName("songListing")[0].children[0];
const noPlaylistRadio = document.getElementById("noPlaylistRadio");
const playlistLoaderRadio = document.getElementById("loadPlaylist");
const playlistCreatorRadio = document.getElementById("createPlaylist");
const eventIDspan = document.getElementById("newEventId");

// Input fields
const eventTitleIn = document.getElementById("newEventName");
const eventDescriptionIn = document.getElementById("newEventDescription");
const eventDateIn = document.getElementById("newEventDate");
const eventStartTimeIn = document.getElementById("newEventStartTime");
const eventDurationIn = document.getElementById("eventRuntime");
const eventDJassignIn = document.getElementById("djAssignment");

eventTitleIn.addEventListener("change", function()
{
    eventCreated.eventName = eventTitleIn.value;
})

eventDescriptionIn.addEventListener("change", function()
{
    eventCreated.description = eventDescriptionIn.value;
})

eventDateIn.addEventListener("change", function()
{
    eventCreated.eventDate = eventDateIn.value;
})

eventStartTimeIn.addEventListener("change", function()
{
    eventCreated.eventTime = eventStartTimeIn.value;
})

eventDurationIn.addEventListener("change", function()
{
    eventCreated.eventRuntime = eventDurationIn.value;
})

eventDJassignIn.addEventListener("change", function()
{
    eventCreated.dj = eventDJassignIn.value;
})

window.addEventListener("load", function()
{
    eventIDspan.innerText = generateEventID();
    createdPlaylist.eventId = eventIDspan.innerText;
})
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

function generateEventID()
{
    var prefix = "CH-EVT-";
    var id = "";
    const alphaNumArray = 
    [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
      "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ];
    
    var randomNum = Math.floor(Math.random() * Math.pow(alphaNumArray.length, 8));
    
    for (var i = 0; i < 8; i++) {
      var index = randomNum % alphaNumArray.length;
      id += alphaNumArray[index];
      randomNum = Math.floor(randomNum / alphaNumArray.length);
    }
    
    return prefix + id;
}
async function eventCreate(button)
{
    // if()
}