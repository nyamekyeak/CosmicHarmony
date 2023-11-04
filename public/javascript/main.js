function secondsToTime(seconds)
{
    var returnArray = [0, 0, 0] //hrs, minutes, seconds
    returnArray[0] = Math.floor(seconds / 3600);
    if(returnArray[0] < 10 && returnArray[0] !== 0)
        returnArray[0] = "0" + returnArray[0];
    returnArray[1] = Math.floor((seconds % 3600) / 60);
    if(returnArray[1] < 10 && returnArray[1] !== 0)
        returnArray[1] = "0" + returnArray[1];
    returnArray[2] = Math.floor((seconds % 3600) % 60);
    if(returnArray[2] < 10 && returnArray[2] !== 0)
        returnArray[2] = "0" + returnArray[2];
    return returnArray;
}

function currentTime()
{
    var time = new Date();
    var returnArray = [0, 0, 0, -1] //hrs, minutes, seconds, unit(1 : am, -1 : pm)
    returnArray[0] = time.getHours();
    returnArray[1] = time.getMinutes();
    returnArray[2] = time.getSeconds();
    if(returnArray[0] < 12)
        returnArray[3] = 1;
    if(returnArray[0] != 0)
        returnArray[0] = returnArray[0] % 12;
    return returnArray;
}