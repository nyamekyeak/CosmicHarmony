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

const eventPlaylistCreated =
{
    playlistId: "",
    playlistTitle: "",
    playlistDescription: "",
    playlistGenreScope: [],
    playlistCover: `../assets/images/backgrounds/backg${randomCoverSuffix}.jpg`,
    creatorId: "CH-PROD-MNO01234",
    duration: 0,
    songCount: 0,
    songs: []
}

const playlistSelect = document.getElementById("playlistSelect");
const playlistBuildEntry = document.getElementsByClassName("playlistLoader");
const newPlaylistSongs = [];
const templateSongSelectionCard = document.getElementsByClassName("songListing")[0].children[0];
const noPlaylistRadio = document.getElementById("noPlaylist");
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
    eventCreated.eventId = eventIDspan.innerText;
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
    if(document.getElementById("newPlaylistId").innerText === "CH-PL-00000000")
    {
        document.getElementById("newPlaylistId").innerText = generateEventPlaylistID();
        eventPlaylistCreated.playlistId = document.getElementById("newPlaylistId").innerText;
    }
}

function generateEventPlaylistID()
{
    var prefix = "CH-PL-";
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
    while(document.getElementById(prefix + id) != null)
    {
        randomNum = Math.floor(Math.random() * Math.pow(alphaNumArray.length, 8));
        for (var i = 0; i < 8; i++) {
          index = randomNum % alphaNumArray.length;
          id += alphaNumArray[index];
          randomNum = Math.floor(randomNum / alphaNumArray.length);
        }
        console.log(id);
    }
    return prefix + id;
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
        if(!eventPlaylistCreated.playlistGenreScope.includes(capitalizeString(newSongGenre)))
        {
            eventPlaylistCreated.playlistGenreScope.push(capitalizeString(newSongGenre));
            document.getElementById("newPlaylistGenreScope").innerText = scopeString(eventPlaylistCreated.playlistGenreScope);
            document.getElementById("newPlaylistGenreScope").style.textTransform = "uppercase";
        }
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
        newSongCard.style.display = "flex";
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

function resetEventCreation(button)
{
    const eventEntryPoint = button.parentElement.parentElement.parentElement;
    const eventInputFields = eventEntryPoint.getElementsByTagName("input");
    // DOM resets
    for(var i = 0; i < eventInputFields.length; i++)
    {
        eventInputFields[i].value = "";
    }
    eventEntryPoint.getElementsByTagName("textarea")[0].value = "";
    playlistLoaderRadio.checked = false;
    playlistCreatorRadio.checked = false;
    noPlaylistRadio.checked = false;
    document.getElementsByClassName("builders")[0].children[0].style.display = "none";
    document.getElementsByClassName("builders")[0].children[1].style.display = "none";
    //TODO: Event resets
    // Would i want to reset the creation builder?
}

function removeEventPlaylistSong(button)
{
    const songCard = button.parentElement.parentElement;
    songCard.remove();
}


function appendNewEventCard(event)
{
    fetch('/')
    .then(response => 
    {
        console.log(response); 
        return response.text(); 
    })
    .then(html =>
    {
        const parser = new DOMParser();
        const newPage = parser.parseFromString(html, 'text/html');

        const updatedEventCards = newPage.getElementsByClassName('eventCard'); //entry point
        const newEvent = updatedEventCards[updatedEventCards.length - 1];

        document.getElementsByClassName("eventListing")[0].appendChild(newEvent);

    })
    .catch(error => {
        console.error('Error retrieving data from the server', error);
    });
}

async function confirmEvent(button)
{
    if(noPlaylistRadio.checked == true) //event with no playlist assignment
    {
        await fetch('/eventCreation',
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventCreated),
        })
        .then(res =>
        {
            console.log(res);
            return res.json();
        })
        .then(data =>
        {
            console.log(data);
            alert("Event Created");
            // dom operation into event views
            appendNewEventCard(eventCreated);
            // resetting globals
            eventIDspan.innerText = generateEventID();
            eventCreated.eventId = eventIDspan.innerText;
            eventCreated.eventName = document.getElementById("newEventName").value;
        })
        .catch(error =>
        {
            console.error('Error:', error);
            alert("Event Creation Failed");
        })
    }
    else if(playlistLoaderRadio.checked == true) //event with preset playlist
    {
        eventCreated.eventPlaylistId = playlistSelect.value;
        await fetch('/eventCreation',
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventCreated),
        })
        .then(res =>
        {
            console.log(res);
            return res.json();
        })
        .then(data =>
            {
                console.log(data);
                alert("Event Created");
                // dom operation into event views
                appendNewEventCard(eventCreated);
                // resetting globals
                eventIDspan.innerText = generateEventID();
                eventCreated.eventId = eventIDspan.innerText;
                eventCreated.eventName = document.getElementById("newEventName").value;
            })
            .catch(error =>
            {
                console.error('Error:', error);
                alert("Event Creation with assigned playlist Failed");
            })
    }
    else if(playlistCreatorRadio.checked == true)
    {
        eventCreated.eventPlaylistId = "2";
    }
    
}