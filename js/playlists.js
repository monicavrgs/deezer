const request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3000/playlists');
request.responseType = 'json';
request.send();

request.onload = ()=>{
    let playlistsJSON = request.response;
    let playlistsText = JSON.stringify(playlistsJSON)
    let playlists = JSON.parse(playlistsText)
    createPlaylist(playlists)
}


function createPlaylist(playlists){

    let playlistList = document.getElementById("playlist-list")

    for(let i = 0; i <= playlists.length; i++){      
        if (playlists[i] !== undefined){
        let name = playlists[i].name
        let type = playlists[i].type
        let cover = playlists[i].img

        let newPlaylist = 
            `<li  class='playlist-list-item'>
                <figure class='playlist-cover'>
                    <img src="${cover}" alt="">

                    <div class='playlist-option-buttons'>
                        <div class='playlist-play'>
                            <button class='play-button'>
                                <span class='play-icon'>
                                    <svg class="svg-icon svg-icon-play" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z"></path></svg>
                                </span>
                            </button>
                        </div>

                        <div class='playlist-more-options'>
                            <button class='playlist-option-more-button' onclick="showPlaylistOptions()">
                                <span class='more-button-icon'>
                                    <svg class="svg-icon svg-icon-options" focusable="false" height="12" width="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M10.5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <figcaption class='playlist-infos'>
                        <a href="#" class='playlist-name'>${name}</a>
                        <span class='playlist-access-specifier'>${type}</span>
                    </figcaption>
                </figure>
            </li>`

            playlistList.innerHTML += newPlaylist

        }
    }
}