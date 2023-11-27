const addedSongs = [];
const genreScope = [];
const eventAssign = document.getElementById("eventAssignment");
const genreText = document.getElementById("generatedGenre");
const addedSongsBox = document.getElementById("musicSelected");
const playlistTitleIn = document.getElementById("newPlaylistName");
const playlistDescriptionIn = document.getElementById("newPlaylistDescription");
var templateSongCard = document.getElementsByClassName("addedSongCard")[0];
document.getElementById("generatedID").innerText = generatePlaylistID();

const createdPlaylist = 
{
    playlistId : document.getElementById("generatedID").innerText,
    playlistTitle : "",
    playlistDescription : "",
    playlistGenreScope: [ ],
    playlistCover: "../assets/images/backgrounds/backg6.jpg", //randomize covers 1 - 6
    playlistCreator: "", //to be updated
    playlistDuration: 0,
    playlistSongs: [ ],
    playlistSongCount: 0,
}
function addToSelection(button)
{
    if(!addedSongs.includes(button.parentElement.children[0].id))
    {
        //find id
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
        var newSongCard = templateSongCard.cloneNode(true);
        newSongCard.id = "";
        newSongCard.children[2].children[0].src = newSongSource;
        newSongCard.children[2].children[0].id = newSongId;
        newSongCard.children[0].children[0].src = newSongAlbumArt;
        newSongCard.children[1].children[0].innerText = newSongName;
        newSongCard.children[1].children[1].innerText = newSongArtist;
        newSongCard.children[1].children[2].innerText = newSongDuration;
        console.log(newSongGenre);
        addedSongsBox.appendChild(newSongCard);
        addedSongs.push(newSongId);
        newSongCard.display = "flex";
        if(genreScope.includes(newSongGenre) == false)
        {
            console.log(genreScope);
            genreScope.push(newSongGenre);
            createdPlaylist.playlistGenreScope.push(newSongGenre); //TODO: may need to update remove function to cater for the opposite
            if(genreScope.length <= 3)
                genreText.innerText = scopeString(genreScope);
        }
        if(addedSongs.length < 10)
        {
            document.getElementById("selectedSongCount").innerText = "0" + addedSongs.length.toString();
        }
        else
        {
            document.getElementById("selectedSongCount").innerText = addedSongs.length.toString();
        }
        createdPlaylist.playlistSongCount += 1;
        createdPlaylist.playlistSongs.push(newSongId);
        //update playlist duration
    }
    else
    {
        alert("Song already added");
    }
}

function removeSong(button)
{
    var songId = button.parentElement.children[0].id;
    var index = addedSongs.indexOf(songId);
    addedSongs.splice(index, 1);
    button.parentElement.parentElement.remove();
    if(addedSongs.length < 10)
    {
        document.getElementById("selectedSongCount").innerText = "0" + addedSongs.length.toString();
    }
    else
    {
        document.getElementById("selectedSongCount").innerText = addedSongs.length.toString();
    }
    createdPlaylist.playlistSongCount -= 1;
    createdPlaylist.playlistSongs.splice(index, 1);
}


function scopeString(genreArray)
{
    return genreArray.join(' | ');
}
function generatePlaylistID()
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
    
    return prefix + id;
}

function resetEntries(button)
{
    const overlayRoot = button.parentElement.parentElement; 
    console.log(overlayRoot);
    var addedSongCards = overlayRoot.getElementsByClassName("addedSongCard");
    console.log(addedSongCards.length);
    const addedSongsContainer = document.getElementById("musicSelected");
    for (var i = addedSongCards.length - 1; i >= 0; i--) 
    {
        addedSongsContainer.removeChild(addedSongCards[i]);
        addedSongs.pop();
    }
    if(addedSongs.length < 10)
    {
        document.getElementById("selectedSongCount").innerText = "0" + addedSongs.length.toString();
    }
    else
    {
        document.getElementById("selectedSongCount").innerText = addedSongs.length.toString();
    }

}

function discardCreation(button)
{
    const overlayRoot = button.parentElement.parentElement; 
    resetEntries(button);
    closeOverlay(button.parentElement);
}

function playAudio(button)
{
    var allAudio = document.getElementsByTagName("audio");
    console.log("got audio??")
    for(var i = 0; i < allAudio.length; i++)
    {
        allAudio[i].pause();
        allAudio[i].currentTime = 0;
    }
    var soundParent = button.parentElement;
    var soundSiblings = soundParent.children;
    var soundTrack = soundSiblings[0];
    console.log(soundTrack);
    soundTrack.play();
    button.style.display = "none";
    soundSiblings[2].style.display = "flex";
}
function stopAudio(button) 
{
    var soundParent = button.parentElement;
    var soundSiblings = soundParent.children;
    var soundTrack = soundSiblings[0];
    button.style.display = "none";
    soundSiblings[1].style.display = "flex";
    soundTrack.pause();
    soundTrack.currentTime = 0;
}

eventAssign.addEventListener("change", function()
{
    if(eventAssign.value === "0")
    {
        createdPlaylist.eventAssignment = "";
    }
    else
    {
        createdPlaylist.eventAssignment = eventAssign.value;
        console.log(createdPlaylist);
    }

})

playlistTitleIn.addEventListener("change", function()
{
    createdPlaylist.playlistTitle = playlistTitleInput.value;
    console.log(createdPlaylist);
})

playlistDescriptionIn.addEventListener("change", function()
{
    createdPlaylist.playlistDescription = playlistDescriptionInput.value;
    console.log(createdPlaylist);
})

async function confirmCreation(button)
{
    //break if playlistName is empty
    //adjust for event assignment
    createdPlaylist.playlistTitle = playlistTitleIn.value;
    createdPlaylist.playlistDescription = playlistDescriptionIn.value;
    console.log(createdPlaylist);
    await fetch('/playlistCreation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdPlaylist),
    })
    .then(res => {
        console.log(body);
        console.log(res); // Log the response object
        return res.json();
      })
    .then(data => {
        console.log(data);
        closeOverlay(button.parentElement);
        alert("Playlist Created");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Playlist Creation Failed:(");
    })
}