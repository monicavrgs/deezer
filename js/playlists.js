window.addEventListener('load', loadPlaylists)

async function getPlaylists(){
    try{
        let response = await fetch("http://localhost:3000/playlists")
        let playlists = await response.json()
        return playlists
    } catch (error){
        console.log(error)
    }
}

async function loadPlaylists(){
    let playlists = await getPlaylists()
    createPlaylist(playlists)
}

function createPlaylist(playlists){

    let playlistList = document.getElementById("playlist-list")

    playlistList.innerHTML = ''

    playlists.forEach(playlist =>{
        let newPlaylist = 
            `<li  class='playlist-list-item'>
                <figure class='playlist-cover'>
                    <img src="${playlist.img}" alt="">

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
                        <a href="#" class='playlist-name'>${playlist.name}</a>
                        <span class='playlist-access-specifier'>${playlist.type}</span>
                    </figcaption>
                </figure>
            </li>`

        playlistList.innerHTML += newPlaylist
    })
}

function showCloseSearchButton(){
    let button = document.getElementById("playlist-search-clear")

    button.style.display = "flex"
}

async function clearSearch(){
    let button = document.getElementById("playlist-search-clear")
    let inputField = document.getElementById("playlist-search")

    inputField.value = ""
    inputField.placeholder = "Buscar"
    button.style.display = "none"

    loadPlaylists()
}


async function searchPlaylists(){

    let playlists = await getPlaylists()

    let inputField = document.getElementById("playlist-search")
    inputField.addEventListener('keyup', (event)=>{
        console.log('oi')
        if(event.keyCode === 13){
            let filter = inputField.value.toLowerCase() 

            playlists.forEach(playlist =>{
                if(playlist.name.toLowerCase() == filter){
                    let filteredPlaylist = [playlist]
                    createPlaylist(filteredPlaylist)
                }
            })
        }
    })
}

searchPlaylists()