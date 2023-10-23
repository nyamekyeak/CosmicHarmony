function secondsToTime(seconds)
{
    var returnArray = [0, 0, 0] //hrs, minutes, seconds
    returnArray[0] = Math.floor(seconds / 3600);
    returnArray[1] = Math.floor((seconds % 3600) / 60);
    returnArray[2] = Math.floor((seconds % 3600) % 60);
    return returnArray;
}