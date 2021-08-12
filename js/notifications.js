const requestNotifications = new XMLHttpRequest();

requestNotifications.open('GET', 'http://localhost:3000/notifications');
requestNotifications.responseType = 'json';
requestNotifications.send();


requestNotifications.onload = ()=>{
    let notificationsJSON = requestNotifications.response;
    let notificationsText = JSON.stringify(notificationsJSON)
    let notifications = JSON.parse(notificationsText)
    createNotifications(notifications)
}

function createNotifications(notifications){

    let notificationsList = document.getElementById("notifications-container")

    for(let i = 0; i <= notifications.length; i++){      
        if (notifications[i] !== undefined){
        let album = notifications[i].album
        let artist = notifications[i].artist
        let cover = notifications[i].img
        let release = notifications[i].release
        let type = notifications[i].type

        let newNotification = 
            `<div class='notifications-item'>
            <div class='notifications-album'>
                <figure class='notifications-album-cover'>
                        <img src="${cover}" alt="">
                </figure>
                <div class='notifications-album-info'>
                    <a class='notifications-album-name'>${album}</a>
                    <p class='notifications-artist-name'>${artist}
                    </p>
                </div>
            </div>
            <div class='notifications-date'>
                <p class='date-info'>${release} atrás - Novo ${type}</p>
            </div>
        </div>`

            notificationsList.innerHTML += newNotification

        }
    }
}