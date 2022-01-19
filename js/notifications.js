window.addEventListener('load', loadNotifications)

async function getNotifications(){
    try{
        let response = await fetch("http://localhost:3000/notifications")
        let notifications = await response.json()
        return notifications
    } catch (error){
        console.log(error)
    }
}

async function loadNotifications(){
    let notifications = await getNotifications()
    createNotifications(notifications)
}

function createNotifications(notifications){

    let notificationsList = document.getElementById("notifications-container")

    notifications.forEach(notification =>{
        let newNotification = 
            `<div class='notifications-item'>
            <div class='notifications-album'>
                <figure class='notifications-album-cover'>
                        <img src="${notification.img}" alt="">
                </figure>
                <div class='notifications-album-info'>
                    <a class='notifications-album-name'>${notification.album}</a>
                    <p class='notifications-artist-name'>${notification.artist}
                    </p>
                </div>
            </div>
            <div class='notifications-date'>
                <p class='date-info'>${notification.release} atrás - Novo ${notification.type}</p>
            </div>
        </div>`

        notificationsList.innerHTML += newNotification
    })
}