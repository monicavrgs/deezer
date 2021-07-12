let curPage = document.URL;

function showCloseButton(){
    let closeButton = document.getElementById("search-clear")

    closeButton.style.display = 'flex'
}

function showNotifications(){
    let notifications = document.getElementById("notifications-content")
    let userHeader = document.getElementById("user-header")
    let playlistContainer= document.getElementById("playlist-container")

    if(notifications.style.display == "block"){
        notifications.style.display = "none"
        userHeader.style.zIndex = "1"
        playlistContainer.style.zIndex = "1"
    }else{
        notifications.style.display = "block"
        userHeader.style.zIndex = "-1"
        playlistContainer.style.zIndex = "-1"
    }
}

function showProfile(){
    let profile = document.getElementById("profile-navigation")
    let userHeader = document.getElementById("user-header")
    let playlistContainer= document.getElementById("playlist-container")

    if(profile.style.display == "block"){
        profile.style.display = "none"
        userHeader.style.zIndex = "1"
        playlistContainer.style.zIndex = "1"
    }else{  
        profile.style.display = "block"
        userHeader.style.zIndex = "-1"
        playlistContainer.style.zIndex = "-1"
    }
}

function activateKidsMode(){
    let kidsMode = document.getElementById("kids-activate")
    let kidsModeInput = document.getElementById("kids-activate-input")

    if(kidsModeInput.checked == true){
        kidsModeInput.checked = false
        kidsMode.classList.remove("label-input-checked")
    }else{
        kidsModeInput.checked = true
        kidsMode.classList.add("label-input-checked")
    }
}

function activateNightMode(){
    let nightMode = document.getElementById("night-activate")
    let nightModeInput = document.getElementById("night-activate-input")

    if(nightModeInput.checked == true){
        nightModeInput.checked = false
        nightMode.classList.remove("label-input-checked")
    }else{
        nightModeInput.checked = true
        nightMode.classList.add("label-input-checked")
    }
}

function highlightCurrent(){
    let curPage = document.URL;
    let links = document.getElementsByTagName("a")


    for(let link of links){

        if(curPage.split("/").pop() == link.href.split("/").pop() && link.classList.contains("sidebar-link") == true){
            link.classList.add("current-page-sidebar")
        }else{
            link.classList.remove("current-page-sidebar")
        }

        if(curPage.split("/").pop() == link.href.split("/").pop() && link.classList.contains("header-nav-link") == true){
            link.classList.add("current-page-header-nav")
        }else{
            link.classList.remove("current-page-header-nav")
        }
    }
}

function showMenuMore(){
    let menuMore = document.getElementById("menu-more-container")
    let playlistContainer= document.getElementById("playlist-container")

    if(menuMore.style.display == "flex"){
        menuMore.style.display = "none"
        playlistCoonteiner.style.zIndex = "1"
    }else{
        menuMore.style.display = "flex"
        playlistContainer.style.zIndex = "-1"
    }

}

highlightCurrent()


