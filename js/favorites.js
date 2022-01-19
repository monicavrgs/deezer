const request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3000/favorites');
request.responseType = 'json';
request.send();

request.onload = ()=>{
    let favoritesJSON = request.response;
    let favoritesText = JSON.stringify(favoritesJSON)
    let favorites = JSON.parse(favoritesText)
    createFavorite(favorites)
}


function createFavorite(favorites){

    let favoritesList = document.getElementById("favorites-table-body")

    for(let i = 0; i <= favorites.length; i++){      
        if (favorites[i] !== undefined){
        
        let index = i + 1
        let name = favorites[i].name
        let album = favorites[i].album
        let artist = favorites[i].artist
        let duration = favorites[i].duration
        let date = favorites[i].date

        let newFavorite = 
            ` <tr class='favorites-table-body-row'>
                <td class= 'favorites-table-body-cell'>
                    <span class='favorites-table-cell-number'>${index}</span>
                    <button class='favorites-table-cell-play'>
                        <svg class="svg-icon svg-icon-play" focusable="false" height="10" width="10" viewBox="0 0 12 12" aria-hidden="true"><path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z"></path></svg>
                    </button>
                </td>                    <td class= 'favorites-table-body-cell'>${name}</td>
                <td class= 'favorites-table-body-cell'>${artist}</td>
                <td class= 'favorites-table-body-cell'>${album}</td>
                <td class= 'favorites-table-body-cell'>${duration}</td>
                <td class= 'favorites-table-body-cell'>${date}</td>
                <td class= 'favorites-table-body-cell'>
                    <input type="checkbox" name="" id="" class='favorites-table-body-checkbox'>
                </td>
            </tr>`

            favoritesList.innerHTML += newFavorite

        }
    }
}

function showCloseButton(){
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
