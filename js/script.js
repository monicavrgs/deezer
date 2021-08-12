function showCloseButton(){
    let closeButton = document.getElementById("search-clear")

    closeButton.style.display = 'flex'
}

function showNotifications(){
    let notifications = document.getElementById("notifications-content")
    let account = document.getElementById("account-navigation")


    if(notifications.style.display == "block"){
        notifications.style.display = "none"
        account.style.zIndex = "1"
    }else if (account.style.display == "block"){
        account.style.display = "none"
        notifications.style.display = "block"
    }else{  
        notifications.style.display = "block"
    }    

    window.onclick = (event)=>{
        if(!event.target.closest("#topbar-notifications")){
            notifications.style.display = 'none'
        }
    }
}

function showAccount(){
    let account = document.getElementById("account-navigation")
    let notifications = document.getElementById("notifications-content")

    if(account.style.display == "block"){
        account.style.display = "none"
    }else if (notifications.style.display == "block"){
        notifications.style.display = "none"
        account.style.display = "block"
    }else{  
        account.style.display = "block"
    }

    window.onclick = (event)=>{
        if(!event.target.closest("#topbar-account")){
            account.style.display = 'none'
        }
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
    let logo = document.getElementById("logo");
    let bodyDocument = document.body

    nightMode.classList.toggle("label-input-checked")
    bodyDocument.classList.toggle("dark-mode")

    if(nightModeInput.checked == false){
        nightModeInput.checked = true
        logo.src = "../img/deezer-logo-white.png"
    }else{
        nightModeInput.checked = false
        logo.src = "../img/deezer-logo.png"
    }
}

function highlightCurrent(){
    let curPage = document.URL;
    let links = document.getElementsByTagName("a")


    for(let link of links){

        function highlightTopbar(){
            if(curPage.split("/").pop() == link.href.split("/").pop() && link.classList.contains("header-nav-link") == true){
                link.classList.add("current-page-header-nav")
            }else{
                link.classList.remove("current-page-header-nav")
            }
        }

        function highlightSidebar(){
            if(curPage.split("/").pop() == link.href.split("/").pop() && link.classList.contains("sidebar-link") == true){
                link.classList.add("current-page-sidebar")
            }else{
                link.classList.remove("current-page-sidebar")
            }
        }
    highlightTopbar()
    highlightSidebar()
    }
}


function showMenuMore(){
    let menuMore = document.getElementById("menu-more-container")


    if(menuMore.style.display == "flex"){
        menuMore.style.display = "none"
    }else{
        menuMore.style.display = "flex"
        menuMore.style.zIndex = "4"
    }
}

highlightCurrent()

