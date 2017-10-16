var playlist = {sade:"smooth operator"};

function updatePlaylist(playlist, artist, song) {
  Object.assign({}, playlist, { artist: song })
}

function removeFromPlaylist(playlist,artist){
  
}