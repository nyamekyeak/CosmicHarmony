// Song removal from playlist

function removeSongFromPlaylist(playlistId, songId)
{
    var song = document.getElementById(songId);
    var playlist = document.getElementById(playlistId);
    playlist.removeChild(song);
}