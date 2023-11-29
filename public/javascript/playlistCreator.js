// fetching data that might come in handy
// fetch('/')
//   .then(response => {
//     console.log(response); // Log the response object
//     return response.text(); // Try reading the response body as text
//   })
//   .then(data => {
//     console.log(data); // Log the response body
//   })
//   .catch(error => {
//     console.error('Error retrieving data from the server', error);
//   });

const addedSongs = [];
const genreScope = [];
const eventAssign = document.getElementById("eventAssignment");
const genreText = document.getElementById("generatedGenre");
const addedSongsBox = document.getElementById("musicSelected");
const playlistTitleIn = document.getElementById("newPlaylistName");
const playlistDescriptionIn = document.getElementById("newPlaylistDescription");
var templateSongCard = document.getElementsByClassName("addedSongCard")[0];
document.getElementById("generatedID").innerText = generatePlaylistID();
var randomCoverSuffix = Math.floor(Math.random() * 7);
const createdPlaylist = 
{
    playlistId: document.getElementById("generatedID").innerText,
    playlistTitle: "",
    playlistDescription: "",
    playlistGenreScope: [],
    playlistCover: `../assets/images/backgrounds/backg${randomCoverSuffix}.jpg`,
    creatorId: "CH-PROD-MNO01234",
    duration: 0,
    songCount: 0,
    songs: []
}

eventAssign.addEventListener("change", function()
{
    if(eventAssign.value === "0")
    {
        // createdPlaylist.eventAssignment = "";
    }
    else
    {
        // createdPlaylist.eventAssignment = eventAssign.value;
        console.log(createdPlaylist);
    }
})

playlistTitleIn.addEventListener("change", function()
{
    createdPlaylist.playlistTitle = playlistTitleIn.value;
    console.log(createdPlaylist);
})

playlistDescriptionIn.addEventListener("change", function()
{
    createdPlaylist.playlistDescription = playlistDescriptionIn.value;
    console.log(createdPlaylist);
})

/**
 * Adds a song to the selection if it is not already added.
 * @param {Element} button - The button element to be added to the selection.
 * @return {void} This function does not return a value.
 */
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
        createdPlaylist.songs.push(newSongId);

        //TODO: update playlist duration
    }
    else
    {
        alert("Song already added");
    }
}

/**
 * Removes a song from the playlist being created.
 * @param {HTMLElement} button - The button element that triggered the removal.
 * @return {void} This function does not return a value.
 */
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
    createdPlaylist.songCount -= 1;
    createdPlaylist.songs.splice(index, 1);
}


/**
 * Returns a string that represents the concatenation of all elements in the given genreArray,
 * separated by the ' | ' delimiter.
 * @param {array} genreArray - An array of genres.
 * @return {string} - A string representing the concatenated genres.
 */
function scopeString(genreArray)
{
    return genreArray.join(' | ');
}


/**
 * Generates a unique playlist ID.
 * @return {string} The generated playlist ID.
 */
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
    while(document.getElementById(prefix + id) != null)
    {
        andomNum = Math.floor(Math.random() * Math.pow(alphaNumArray.length, 8));
        for (var i = 0; i < 8; i++) {
          index = randomNum % alphaNumArray.length;
          id += alphaNumArray[index];
          randomNum = Math.floor(randomNum / alphaNumArray.length);
        }
        console.log(id);
    }
    return prefix + id;
}

/**
 * Resets the entries in the UI when the reset button is clicked.
 * @param {Element} button - The reset button element.
 */
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
    playlistTitleIn.value = "";
    playlistDescriptionIn.value = "";
    for(var i = 0; i < genreScope.length; i++)
    {
        genreScope.pop();
    }
    genreText.innerText = "";

}

/**
 * Discard the creation by resetting the entries and closing the overlay.
 * @param {Element} button - The button element that triggered the function.
 * @return {undefined} This function does not return a value.
 */
function discardCreation(button)
{
    const overlayRoot = button.parentElement.parentElement; 
    resetEntries(button);
    closeOverlay(button.parentElement);
}

/**
 * Plays an audio track and hides the corresponding button.
 * @param {HTMLElement} button - The button element that triggered the audio play.
 * @return {undefined} This function does not return a value.
 */
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

/**
 * Stops the audio playback and hides the audio control button.
 * @param {Element} button - The button element that triggered the audio stop.
 * @return {void} This function does not return a value.
 */
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

/**
 * Appends a new playlist card to the DOM based on the provided playlist object.
 * @param {Object} playlistObject - The playlist object to be used for creating the new card.
 * @return {undefined} This function does not return a value.
 */
function appendNewPlaylistCard(playlistObject)
{
    // const playlistCardTemplate = document.getElementsByClassName("playlistOverlayCard")[0];
    // const entryPoint = playlistCardTemplate.parentElement;
    fetch('/')
    .then(response => {
        console.log(response); // Log the response object
        return response.text(); // Try reading the response body as text
    })
    .then(html => {
        const parser = new DOMParser();
        const newPage = parser.parseFromString(html, 'text/html');
        const newPagePreviews = newPage.getElementsByClassName('playlistPreview');
        //add new page preview to playlist archives
        document.getElementById("playlistViewOverlay").appendChild(newPagePreviews[newPagePreviews.length - 1]);
        // add new playlist to preview selector
        const newPlaylistPreviewSelector = newPage.getElementById('playlistViewSelector');
        document.getElementById("playlistViewSelector").appendChild(newPlaylistPreviewSelector.children[newPlaylistPreviewSelector.children.length - 1]);
        
        // add new playlist to event creation playlist selector
       const newEventPlaylistSelector = newPage.getElementById('playlistSelect');
       document.getElementById("playlistSelect").appendChild(newEventPlaylistSelector.children[newEventPlaylistSelector.children.length - 1]);

       //add new playlist content to event creation
       const newPlaylistContent = newPage.getElementsByClassName('playlistContent');
       document.getElementsByClassName("playlistSelector")[0].appendChild(newPlaylistContent[newPlaylistContent.length - 1]);
    })
    .catch(error => {
        console.error('Error retrieving data from the server', error);
    });
}

/**
 * Confirms the creation of a playlist.
 * @param {Element} button - The button element that triggered the playlist creation.
 * @return {Promise} A promise that resolves when the playlist creation is confirmed.
 */
async function confirmCreation(button)
{
    if(playlistTitleIn.value === "")
    {
        alert("Playlist Name cannot be empty");
        return;
    }
    else
    {
        createdPlaylist.playlistTitle = playlistTitleIn.value;
        createdPlaylist.playlistDescription = playlistDescriptionIn.value;
        if(document.getElementById("eventAssignment").value === "0") //playlist not being assigned an event
        {
            alert("fetching data");
            await fetch('/playlistCreation', 
            {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(createdPlaylist),
            })
            .then(res => 
            {
                console.log(res);
                return res.json();
            })
            .then(data => 
            {
                console.log(data);
                resetEntries(button.parentElement);
                closeOverlay(button.parentElement);
                alert("Playlist Created");
                //dom operation into playlist views
                appendNewPlaylistCard(createdPlaylist);
                // Resetting globals
                //-------------------------------------------------------------------
                document.getElementById("generatedID").innerText = generatePlaylistID();
                genreText.innerText = "";
                while(genreScope.length > 0 && addedSongs.length > 0)
                {
                    genreScope.pop();
                    addedSongs.pop();
                }
                randomCoverSuffix = Math.floor(Math.random() * 7);
                //resetting created playlist object
                createdPlaylist.songCount = 0;
                createdPlaylist.songs = [];
                createdPlaylist.cover = `../assets/images/backgrounds/backg${randomCoverSuffix}.jpg`;
                createdPlaylist.duration = 0;
                createdPlaylist.songCount = 0;
                createdPlaylist.playlistTitle = "";
                createdPlaylist.genreScope = [];
                createdPlaylist.playlistId = document.getElementById("generatedID").innerText;
            })
            .catch(error => 
            {
                console.log(createdPlaylist);
                console.log(error);
                alert("Playlist Creation Failed Client Side");
            })
        }
        else
        {
            //TODO: update assigned event
        }
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