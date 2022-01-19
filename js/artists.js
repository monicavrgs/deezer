window.addEventListener('load', loadArtists)

async function getArtists(){
    try{
        let response = await fetch("http://localhost:3000/artists")
        let artists = await response.json()
        return artists
    } catch (error){
        console.log(error)
    }
}

async function loadArtists(){
    let artists = await getArtists()
    createArtists(artists)
}

function createArtists(artists){
    let artistsList = document.getElementById("artists-list")
 
    artistsList.innerHTML = ''
    artists.forEach(artist =>{

    let newArtist = 
        `<li  class='artists-list-item'>
            <figure class='artists-cover'>
                <img src="${artist.img}">

                <div class='artists-buttons'>
                    <div class='artists-play'>    
                        <button class='play-button'>
                                <span class='play-icon'>
                                    <svg class="svg-icon svg-icon-play" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z"></path></svg>
                                </span>
                        </button>
                    </div>
                    <div class='artists-like'>
                        <button class='artists-like-button'>
                            <span class='like-icon'>
                                <svg class="svg-icon svg-icon-love-outline is-active" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path class="svg-path" fill="none" stroke-width="1.2" d="M6 10.77a26.815 26.815 0 0 0 2.595-2.087c.996-.913 1.78-1.8 2.267-2.612.356-.594.538-1.124.538-1.571 0-1.734-1.207-2.9-2.65-2.9-.616 0-1.17.229-1.656.619a3.006 3.006 0 0 0-.595.614L6 3.582l-.5-.75a3.006 3.006 0 0 0-.593-.613C4.42 1.829 3.867 1.6 3.25 1.6 1.807 1.6.6 2.766.6 4.5c0 .447.182.977.538 1.571.488.812 1.271 1.699 2.267 2.612A26.815 26.815 0 0 0 6 10.77z"></path></svg>
                            </span>
                        </button>
                    </div>
                </div>    
                
                <figcaption class='artist-infos'>
                    <a href="#" class='artist-name'>${artist.name}</a>
                    <span class='artist-fans'>${artist.fans} fãs</span>
                </figcaption>
            </figure>

        </li>`
    artistsList.innerHTML += newArtist
    })   
}

function showCloseSearchButton(){
    let button = document.getElementById("artists-search-clear")

    button.style.display = "flex"
}

async function clearSearch(){
    let button = document.getElementById("artists-search-clear")
    let inputField = document.getElementById("artists-search")

    inputField.value = ""
    inputField.placeholder = "Buscar"
    button.style.display = "none"

    
    loadArtists()
}

async function searchArtists(){

    let artists = await getArtists()

    let inputField = document.getElementById("artists-search")
    inputField.addEventListener('keyup', (event)=>{
    
        if(event.keyCode === 13){
            let filter = inputField.value.toLowerCase() 

            artists.forEach(artist =>{
                if(artist.name.toLowerCase() == filter){
                    let filteredArtist = [artist]
                    createArtists(filteredArtist)
                }
            })
        }
    })
}

function showOrderMenu(){
    let orderMenu = document.getElementById("order-dropdown-menu")

    if(orderMenu.style.display == "none"){
        orderMenu.style.display = 'block'
    }else{
        orderMenu.style.display = "none"
    }

    window.onclick = (event)=>{
        if(!event.target.closest("#order-dropdown")){
            orderMenu.style.display = 'none'
        }
    }
}

searchArtists()

