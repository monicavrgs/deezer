const request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3000/albuns');
request.responseType = 'json';
request.send();

request.onload = ()=>{
    let albunsJSON = request.response;
    let albunsText = JSON.stringify(albunsJSON)
    let albuns = JSON.parse(albunsText)
    createAlbuns(albuns)
}


function createAlbuns(albuns){

    let albunsList = document.getElementById("albuns-list")

    for(let i = 0; i <= albuns.length; i++){      
        if (albuns[i] !== undefined){
        let name = albuns[i].name
        let artist = albuns[i].fans
        let cover = albuns[i].img

        let newAlbum = 
            `<li  class='albuns-list-item'>
            <figure class='albuns-cover'>
                <img src="${cover}">

                <div class='albuns-option-buttons'>
                    <button class='play-button'>
                        <span class='play-icon'>
                            <svg class="svg-icon svg-icon-play" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z"></path></svg>
                        </span>
                    </button>

                    <div class='albuns-more-options'>
                        <button class='albuns-option-more-button' onclick="showAlbunsOptions()">
                            <span class='more-button-icon'>
                                <svg class="svg-icon svg-icon-options" focusable="false" height="12" width="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M10.5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                            </span>
                        </button>

                        <ul class='albuns-options-menu'>
                            <li class='albuns-options-menu-item'>
                                <button class='albuns-options-menu-item-btn'>
                                    <span class='albuns-options-menu-icon'><svg class="svg-icon svg-icon-cancel" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M1.75 10.25l8.5-8.5m.002 8.505L1.75 1.75" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-width="1.5"></path></svg></span>
                                    <span class='albuns-options-menu-item-text'>Ouvir em seguida</span>
                                </button>
                            </li>
                            <li class='albuns-options-menu-item'>
                                <button class='albuns-options-menu-item-btn'>
                                    <span class='albuns-options-menu-icon'><svg class="svg-icon svg-icon-qlist-add" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 11v-1h9v1H3zm9-4v1H5V7h7zM4 4V1H3v3H0v1h3v3h1V5h3V4H4zm4 0h4v1H8V4z"></path></svg></span>
                                    <span class='albuns-options-menu-item-text'>Adicionar à lista de espera</span>
                                </button>
                            </li>
                            <li class='albuns-options-menu-item'>
                                <button class='albuns-options-menu-item-btn'>
                                    <span class='albuns-options-menu-icon'><svg class="svg-icon svg-icon-share" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M0 3.754C0 3.062.56 2.5 1.251 2.5H11v7.246C11 10.438 10.44 11 9.749 11H1.25A1.25 1.25 0 0 1 0 9.746V3.754zM1 3.5l1-1h9v5l-1 1.01V10H1V3.5z" fill-rule="evenodd"></path><path d="M8 4.8v2.4l4-3.7L8 0v2.5c-5 0-6 2.907-6 7 0-1.63 1.03-4.7 5.636-4.7H8z" fill-rule="evenodd"></path></svg></span>
                                    <span class='albuns-options-menu-item-text'>Excluir dos meus favoritos</span>
                                </button>
                            </li>
                            <li class='albuns-options-menu-item'>
                                <button class='albuns-options-menu-item-btn'>
                                    <span class='albuns-options-menu-icon'><svg class="svg-icon svg-icon-share" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M0 3.754C0 3.062.56 2.5 1.251 2.5H11v7.246C11 10.438 10.44 11 9.749 11H1.25A1.25 1.25 0 0 1 0 9.746V3.754zM1 3.5l1-1h9v5l-1 1.01V10H1V3.5z" fill-rule="evenodd"></path><path d="M8 4.8v2.4l4-3.7L8 0v2.5c-5 0-6 2.907-6 7 0-1.63 1.03-4.7 5.636-4.7H8z" fill-rule="evenodd"></path></svg></span>
                                    <span class='albuns-options-menu-item-text'>Compartilhar</span>
                                </button>
                            </li>
                            <li class='albuns-options-menu-item'>
                                <button class='albuns-options-menu-item-btn'>
                                    <span class='albuns-options-menu-icon'><svg class="svg-icon svg-icon-resize-up" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.132 10.934h1.601c.294 0 .532.236.532.533a.535.535 0 0 1-.532.533H0V8.267c0-.294.237-.532.533-.532.295 0 .533.241.533.531v1.601L3.7 7.235a.8.8 0 0 1 1.13-.002l-.062-.062a.8.8 0 0 1-.002 1.13l-2.633 2.633zm7.736-9.868H8.267a.531.531 0 0 1-.532-.533c0-.294.242-.533.532-.533H12v3.733a.531.531 0 0 1-.533.532.535.535 0 0 1-.533-.531V2.133L8.3 4.765a.8.8 0 0 1-1.13.002l.062.062a.8.8 0 0 1 .002-1.13l2.633-2.633z"></path></svg></span>
                                    <span class='albuns-options-menu-item-text'>Ampliar capa</span>
                                </button>
                            </li>
                            <li class='albuns-options-menu-item'>
                                <button class='albuns-options-menu-item-btn'>
                                    <span class='albuns-options-menu-icon'><svg class="svg-icon svg-icon-comment" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M1.995 2h8.01c.55 0 .995.447.995 1.001V7A1 1 0 0 1 10.005 8h-8.01A.997.997 0 0 1 1 6.999V3A1 1 0 0 1 1.995 2zM6 8h3v2L6 8z"></path></svg></span>
                                    <span class='albuns-options-menu-item-text'>Reportar um problema</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <figcaption class='album-infos'>
                    <a href="#" class='album-name'>${name}</a>
                    <span class='album-artist'>${artist}</span>
                </figcaption>
            </figure>
        </li>`

            albunsList.innerHTML += newAlbum

        }
    }
}