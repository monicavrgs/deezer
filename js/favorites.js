function closeSearchButton(){
    let button = document.getElementById("favorites-search-clear")

    button.style.display = "flex"
}

function clearInput(){
    let button = document.getElementById("favorites-search-clear")
    let inputField = document.getElementById("favorites-search")
    let favorites = document.getElementsByClassName("favorites-list-item")

    inputField.value = ""
    inputField.placeholder = "Buscar"
    button.style.display = "none"

}

function showOrderMenu(){
    let orderMenu = document.getElementById("order-dropdown-menu")
    let searchInput = document.getElementById("favorites-search")


    if(orderMenu.style.display == "none"){
        orderMenu.style.display = 'block'
        searchInput.style.zIndex = "-1"
    }else{
        orderMenu.style.display = "none"
        searchInput.style.zIndex = "1"
    }
}
