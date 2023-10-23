// Song removal from playlist
const playlistTable = document.getElementById("playlistTable");
const playlistRuntime = document.getElementById("playlistRuntime");
const songCounter = document.getElementById("songCount");
const allAudio = document.getElementsByTagName("audio");

window.addEventListener("load", function() {
    // Load page with initial song count
    var songtable = (playlistTable.children[0]);
    var songTableBody = (songtable.children[1]);
    console.log(songTableBody.parentElement);
    if(songTableBody.children.length < 10)
        songCounter.innerHTML = "0" + songTableBody.children.length + " SONGS";
    else
        songCounter.innerHTML = songTableBody.children.length + " SONGS";
    // load page with audio runtime total
    var runtime = 0;
    for(var i = 0 ; i < allAudio.length; i++)
    {
        runtime += allAudio[i].duration;
        console.log("song dur" + allAudio[i].duration);
    }
    runtime = secondsToTime(runtime);
    if(runtime[0] == 0)
        playlistRuntime.innerHTML = runtime[1] + "<sub>MINUTES</sub> " + runtime[2] + "<sub>SECONDS</sub>";
    else
        playlistRuntime.innerHTML = runtime[0] + "<sub>HOURS</sub> " + runtime[1] + "<sub>MINUTES</sub> " + runtime[2] + "<sub>SECONDS</sub>";
    // update individual song runtime in playlist
    var currentSongRuntime = allAudio[1].parentElement.parentElement;
    var computedTime = 0;
    currentSongRuntime = currentSongRuntime.children[4];
    currentSongRuntime.innerHTML = secondsToTime(allAudio[1].duration)[2];
    console.log(currentSongRuntime);
    for(var a = 0; a < allAudio.length; a++)
    {
        currentSongRuntime = allAudio[a].parentElement.parentElement;
        currentSongRuntime = currentSongRuntime.children[4];
        computedTime = secondsToTime(allAudio[a].duration);
        currentSongRuntime.innerHTML = computedTime[1] + "<sub>min</sub> " + computedTime[2] + "<sub>sec</sub>";
    }
}
);
function removeSong(deleteButton)
{
    var songRow = deleteButton.parentElement.parentElement;
    alert("You are deleting the following song. No backsies!!\nYou'll have to readd the song.")
    songRow.remove();
    console.log(allAudio.length);
    updatePlaylistSongCount(-1);
    updateTotalRuntime();
}

function updateTotalRuntime()
{
    var runtime = 0;
    for(var i = 0 ; i < allAudio.length; i++)
    {
        runtime += allAudio[i].duration;
        console.log("song dur" + allAudio[i].duration);
    }
    runtime = secondsToTime(runtime);
    if(runtime[0] == 0)
        playlistRuntime.innerHTML = runtime[1] + "<sub>MINUTES</sub> " + runtime[2] + "<sub>SECONDS</sub>";
    else
        playlistRuntime.innerHTML = runtime[0] + "<sub>HOURS</sub> " + runtime[1] + "<sub>MINUTES</sub> " + runtime[2] + "<sub>SECONDS</sub>";
}

function updatePlaylistSongCount(change)
{
    console.log(songCounter.innerHTML);
    var counterSplit = songCounter.textContent.split(" ");
    var count = parseInt(counterSplit[0]);
    count += change;
    if(count == 1)
    {
        counterSplit[1] = "SONG";
    }
    songCounter.innerHTML = count + " " + counterSplit[1];
}