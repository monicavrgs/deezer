function showFilterMenu(){
    let filterMenu = document.getElementById("filter-dropdown-menu")
    let searchInput = document.getElementById("playlist-search")

    if(filterMenu.style.display == "none"){
        filterMenu.style.display = 'block'
        searchInput.style.zIndex = "-1"
    }else{
        filterMenu.style.display = "none"
        searchInput.style.zIndex = "1"
    }
}

function showOrderMenu(){
    let orderMenu = document.getElementById("order-dropdown-menu")
    let searchInput = document.getElementById("playlist-search")
    let searchButton = document.getElementById("playlist-search-clear")


    if(orderMenu.style.display == "none"){
        orderMenu.style.display = 'block'
        searchInput.style.zIndex = "-1"
    }else{
        orderMenu.style.display = "none"
        searchInput.style.zIndex = "1"
    }
}

function showCloseSearchButton(){
    let button = document.getElementById("playlist-search-clear")

    button.style.display = "flex"
}

function searchPlaylist(){

    let inputField = document.getElementById("playlist-search")
    inputField.addEventListener("input", ()=>{
    
    let filter = inputField.value.toLowerCase() 
    let playlist = document.getElementsByClassName("playlist-list-item")

        for(let i = 0; i <= playlist.length; i++){
            let playlistName = playlist[i].getElementsByClassName("playlist-name")[0] //[0] => acesso a coleção HTML
            let playlistNameText = playlistName.innerHTML.toLowerCase()

            if(playlistNameText.indexOf(filter) > -1){
               playlist[i].style.display = "flex"
            }else{
                playlist[i].style.display = 'none'
            }
        }      
    })    
}

function clearInput(){
    let button = document.getElementById("playlist-search-clear")
    let inputField = document.getElementById("playlist-search")
    inputField.value = ""
    inputField.placeholder = "Buscar"
    button.style.display = "none"
}

searchPlaylist()