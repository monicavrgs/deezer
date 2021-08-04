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
                    <button class='play-button'>
                        <span class='play-icon'>
                            <svg class="svg-icon svg-icon-play" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z"></path></svg>
                        </span>
                    </button>

                    <div class='playlist-more-options'>
                        <button class='playlist-option-more-button' onclick="showPlaylistOptions()">
                            <span class='more-button-icon'>
                                <svg class="svg-icon svg-icon-options" focusable="false" height="12" width="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M10.5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                            </span>
                        </button>

                        <ul class='playlist-options-menu' >
                            <li class='playlist-options-menu-item'>
                                <button class='playlist-options-menu-item-btn'>
                                    <span class='playlist-options-menu-icon'><svg class="svg-icon svg-icon-play-next" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M0 8.5h2.5v2H0v-2zM2.5 7l3 2.5-3 2.5V7zm6.75-1.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5zm0 5.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm0 1a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5z"></path></svg></span>
                                    <span class='playlist-options-menu-item-text'>Ouvir em seguida</span>
                                </button>
                            </li>
                            <li class='playlist-options-menu-item'>
                                <button class='playlist-options-menu-item-btn'>
                                    <span class='playlist-options-menu-icon'><svg class="svg-icon svg-icon-qlist-add" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 11v-1h9v1H3zm9-4v1H5V7h7zM4 4V1H3v3H0v1h3v3h1V5h3V4H4zm4 0h4v1H8V4z"></path></svg></span>
                                    <span class='playlist-options-menu-item-text'>Adicionar à lista de espera</span>
                                </button>
                            </li>
                            <li class='playlist-options-menu-item'>
                                <button class='playlist-options-menu-item-btn'>
                                    <span class='playlist-options-menu-icon'><svg class="svg-icon svg-icon-share" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M0 3.754C0 3.062.56 2.5 1.251 2.5H11v7.246C11 10.438 10.44 11 9.749 11H1.25A1.25 1.25 0 0 1 0 9.746V3.754zM1 3.5l1-1h9v5l-1 1.01V10H1V3.5z" fill-rule="evenodd"></path><path d="M8 4.8v2.4l4-3.7L8 0v2.5c-5 0-6 2.907-6 7 0-1.63 1.03-4.7 5.636-4.7H8z" fill-rule="evenodd"></path></svg></span>
                                    <span class='playlist-options-menu-item-text'>Ouvir em seguida</span>
                                </button>
                            </li>
                        </ul>
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