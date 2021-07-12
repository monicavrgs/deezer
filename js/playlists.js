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

function clearInput(){
    let button = document.getElementById("playlist-search-clear")
    let inputField = document.getElementById("playlist-search")
    inputField.value = ""
    inputField.placeholder = "Buscar"
}