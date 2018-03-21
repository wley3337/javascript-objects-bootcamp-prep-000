var playlist = {};

//create a function updatePlaylist that takes 3 peramiters: playlist, artist name, and song title should add the values to playlist, should return the playlist. 

function updatePlaylist (playlist, artistName, songTitle){
  return Object.assign (playlist, { [artistName]: songTitle});
  
}

//create a function removeFromPlaylist that accepst two arguments playlist and artists name. delete the key value pair from the playlist and return the updated playlist