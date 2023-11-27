const allMusic = document.getElementsByTagName("audio");
const allTitles = document.getElementsByClassName("songTitle");
const allArtists = document.getElementsByClassName("songArtist");
const allPlayTimes = document.getElementsByClassName("songDuration");

function scrollToCollection(buttonClicked)
{
    var genreContainer = (buttonClicked.parentElement).parentElement;
    console.log(genreContainer);
    var collectionID = genreContainer.id + "Container";
    var collection = document.getElementById(collectionID);
    if(collection != null)
        collection.scrollIntoView();
}
function replaceSequence(str, sequence, replacement) 
{
    var regex = new RegExp(sequence, "g");
    return str.replace(regex, replacement);
}

function parseSource(source)
{
    var sourceString = source.toString();
    var sourceArray = sourceString.split("/");
    var fileName = sourceArray[sourceArray.length - 1];
    var parsedSource = fileName.split("_");
    parsedSource[1] = replaceSequence(parsedSource[1], ".mp3", "");
    parsedSource[1] = replaceSequence(parsedSource[1], "%20", " ");
    parsedSource[0] = replaceSequence(parsedSource[0], "%20", " ");
    return parsedSource; // [0]: song title, [1]: artist
}

window.addEventListener("load", function()
{
    console.log("initializing music library...");
    var currentAudio = allMusic[0];
    var currentTitle = allTitles[0];
    var currentArtist = allArtists[0];
    var sourceParsing = ["placeholder 1", "placeholder 2"];
    var currentPlayTime = allPlayTimes[0];
    var runsecondsToTime = secondsToTime(currentAudio.duration);
    for(var i = 0; i < allMusic.length; i++)
    {
        currentAudio = allMusic[i];
        sourceParsing = parseSource(currentAudio.src);
        currentTitle = allTitles[i];
        currentArtist = allArtists[i];
        currentTitle.innerHTML = sourceParsing[0];
        currentArtist.innerHTML = sourceParsing[1];
        runsecondsToTime = secondsToTime(currentAudio.duration);
        currentPlayTime = allPlayTimes[i];
        currentPlayTime.innerHTML = runsecondsToTime[1] + ":" + runsecondsToTime[2];
    }
})