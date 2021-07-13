function showCloseSearchButton(){
    let button = document.getElementById("artists-search-clear")

    button.style.display = "flex"
}

function searchArtists(){

    let inputField = document.getElementById("artists-search")
    inputField.addEventListener("input", ()=>{
    
    let filter = inputField.value.toLowerCase() 
    let artists = document.getElementsByClassName("artists-list-item")

        for(let i = 0; i <= artists.length; i++){
            let artistName = artists[i].getElementsByClassName("artist-name")[0] //[0] => acesso a coleção HTML
            let artistNameText = artistName.innerHTML.toLowerCase()

            if(artistNameText.indexOf(filter) > -1){
               artists[i].style.display = "flex"
            }else{
                artists[i].style.display = 'none'
            }
        }      
    })    
}


function clearInput(){
    let button = document.getElementById("artists-search-clear")
    let inputField = document.getElementById("artists-search")
    let artists = document.getElementsByClassName("artists-list-item")

    inputField.value = ""
    inputField.placeholder = "Buscar"
    button.style.display = "none"

    for(let i = 0; i <= artists.length; i++){
        artists[i].style.display = 'flex'
    }
}

function showOrderMenu(){
    let orderMenu = document.getElementById("order-dropdown-menu")
    let searchInput = document.getElementById("artists-search")


    if(orderMenu.style.display == "none"){
        orderMenu.style.display = 'block'
        searchInput.style.zIndex = "-1"
    }else{
        orderMenu.style.display = "none"
        searchInput.style.zIndex = "1"
    }
}

searchArtists()

