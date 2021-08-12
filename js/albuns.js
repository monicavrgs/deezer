const request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3000/albuns');
request.responseType = 'json';
request.send();


request.onload = ()=>{
    let albunsJSON = request.response;
    let albunsText = JSON.stringify(albunsJSON)
    let albuns = JSON.parse(albunsText)
    createAlbuns(albuns)
}


function createAlbuns(albuns){

    let albunsList = document.getElementById("albuns-list")

    for(let i = 0; i <= albuns.length; i++){      
        if (albuns[i] !== undefined){
        let name = albuns[i].name
        let artist = albuns[i].artist
        let cover = albuns[i].img

        let newAlbum = 
            `<li  class='albuns-list-item'>
            <figure class='albuns-cover'>
                <img src="${cover}">

                <div class='albuns-option-buttons'>
                    <div class='albuns-play'>
                        <button class='play-button'>
                            <span class='play-icon'>
                                <svg class="svg-icon svg-icon-play" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z"></path></svg>
                            </span>
                        </button>
                    </div>

                    <div class='albuns-like'>
                            <button class='albuns-like-button'>
                                <span class='like-icon'>
                                    <svg class="svg-icon svg-icon-love-outline is-active" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path class="svg-path" fill="none" stroke-width="1.2" d="M6 10.77a26.815 26.815 0 0 0 2.595-2.087c.996-.913 1.78-1.8 2.267-2.612.356-.594.538-1.124.538-1.571 0-1.734-1.207-2.9-2.65-2.9-.616 0-1.17.229-1.656.619a3.006 3.006 0 0 0-.595.614L6 3.582l-.5-.75a3.006 3.006 0 0 0-.593-.613C4.42 1.829 3.867 1.6 3.25 1.6 1.807 1.6.6 2.766.6 4.5c0 .447.182.977.538 1.571.488.812 1.271 1.699 2.267 2.612A26.815 26.815 0 0 0 6 10.77z"></path></svg>
                                </span>
                            </button>
                        </div>

                    <div class='albuns-more-options'>
                        <button class='albuns-option-more-button' onclick="showAlbunsOptions()">
                            <span class='more-button-icon'>
                                <svg class="svg-icon svg-icon-options" focusable="false" height="12" width="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M10.5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                            </span>
                        </button>
                    </div>
                </div>

                <figcaption class='album-infos'>
                    <div class='album-infos-container'>
                        <a href="#" class='album-name'>${name}</a>
                        <span class='album-artist'>${artist}</span>
                    </div>
                </figcaption>
            </figure>
        </li>`

            albunsList.innerHTML += newAlbum

        }
    }
}
function showCloseSearchButton(){
    let button = document.getElementById("albuns-search-clear")

    button.style.display = "flex"
}

function clearInput(){
    let button = document.getElementById("albuns-search-clear")
    let inputField = document.getElementById("albuns-search")

    let albuns = document.getElementsByClassName("albuns-list-item")

    inputField.value = ""
    inputField.placeholder = "Buscar"
    button.style.display = "none"

    for(let i = 0; i <= albuns.length; i++){
        albuns[i].style.display = 'flex'
    }

}

function searchAlbuns(){

    let inputField = document.getElementById("albuns-search")
    inputField.addEventListener("input", ()=>{
    
    let filter = inputField.value.toLowerCase() 
    let albuns = document.getElementsByClassName("albuns-list-item")

        for(let i = 0; i <= albuns.length; i++){
            let albumName = albuns[i].getElementsByClassName("album-name")[0]
            let albumNameText = albumName.innerHTML.toLowerCase()

            if(albumNameText.indexOf(filter) > -1){
               albuns[i].style.display = "flex"
            }else{
                albuns[i].style.display = 'none'
            }
        }      
    })    
}


function showOrderMenu(){
    let orderMenu = document.getElementById("order-dropdown-menu")
    let searchInput = document.getElementById("albuns-search")


    if(orderMenu.style.display == "none"){
        orderMenu.style.display = 'block'
        searchInput.style.zIndex = "-1"
    }else{
        orderMenu.style.display = "none"
        searchInput.style.zIndex = "1"
    }

    window.onclick = (event)=>{
        if(!event.target.closest("#order-dropdown")){
            orderMenu.style.display = 'none'
        }
    }
}

searchAlbuns()