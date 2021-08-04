const request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3000/artists');
request.responseType = 'json';
request.send();

request.onload = ()=>{
    let artistsJSON = request.response;
    let artistsText = JSON.stringify(artistsJSON)
    let artists = JSON.parse(artistsText)
    createArtist(artists)
}


function createArtist(artists){

    let artistList = document.getElementById("artists-list")

    for(let i = 0; i <= artists.length; i++){      
        if (artists[i] !== undefined){
        let name = artists[i].name
        let fans = artists[i].fans
        let cover = artists[i].img

        let newArtist = 
            `<li  class='artists-list-item'>
                <figure class='artists-cover'>
                    <img src="${cover}">

                    <div class='artists-buttons'>
                        <button class='play-button'>
                            <span class='play-icon'>
                                <svg class="svg-icon svg-icon-play" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z"></path></svg>
                            </span>
                        </button>

                        <button class='artists-like'>
                            <span class='like-icon'>
                                <svg class="svg-icon svg-icon-love-outline is-active" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path class="svg-path" fill="none" stroke-width="1.2" d="M6 10.77a26.815 26.815 0 0 0 2.595-2.087c.996-.913 1.78-1.8 2.267-2.612.356-.594.538-1.124.538-1.571 0-1.734-1.207-2.9-2.65-2.9-.616 0-1.17.229-1.656.619a3.006 3.006 0 0 0-.595.614L6 3.582l-.5-.75a3.006 3.006 0 0 0-.593-.613C4.42 1.829 3.867 1.6 3.25 1.6 1.807 1.6.6 2.766.6 4.5c0 .447.182.977.538 1.571.488.812 1.271 1.699 2.267 2.612A26.815 26.815 0 0 0 6 10.77z"></path></svg>
                            </span>
                        </button>
                    </div>    
                    
                    <figcaption class='artist-infos'>
                        <a href="#" class='artist-name'>${name}</a>
                        <span class='artist-fans'>${fans}</span>
                    </figcaption>
                </figure>

            </li>`

            artistList.innerHTML += newArtist

        }
    }
}