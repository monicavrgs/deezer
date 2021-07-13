function showCloseSearchButton(){
    let button = document.getElementById("albuns-search-clear")

    button.style.display = "flex"
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
}

searchAlbuns()