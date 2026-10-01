/* =====================================================
   AURAPLAYER
   Professional JavaScript Music Player
===================================================== */


/* =====================================================
   SONG DATABASE
===================================================== */

const songs = [

    {
        title: "Midnight Dreams",
        artist: "Aura Collective",
        audio: "music/song1.mp3",
        cover: "images/cover1.jpg",
        mood: "chill"
    },

    {
        title: "Neon Skies",
        artist: "Nova Lights",
        audio: "music/song2.mp3",
        cover: "images/cover2.jpg",
        mood: "night"
    },

    {
        title: "Ocean Echo",
        artist: "Blue Horizon",
        audio: "music/song3.mp3",
        cover: "images/cover3.jpg",
        mood: "chill"
    },

    {
        title: "Golden Hour",
        artist: "Solara",
        audio: "music/song4.mp3",
        cover: "images/cover4.jpg",
        mood: "energy"
    },

    {
        title: "Dreamscape",
        artist: "Luna Waves",
        audio: "music/song5.mp3",
        cover: "images/cover5.jpg",
        mood: "chill"
    },

    {
        title: "Electric Heart",
        artist: "Neon Pulse",
        audio: "music/song6.mp3",
        cover: "images/cover6.jpg",
        mood: "energy"
    },

    {
        title: "Afterglow",
        artist: "Velvet Sky",
        audio: "music/song7.mp3",
        cover: "images/cover7.jpg",
        mood: "chill"
    },

    {
        title: "City Lights",
        artist: "Night Theory",
        audio: "music/song8.mp3",
        cover: "images/cover8.jpg",
        mood: "night"
    },

    {
        title: "Aurora",
        artist: "Northern Soul",
        audio: "music/song9.mp3",
        cover: "images/cover9.jpg",
        mood: "chill"
    },

    {
        title: "Lost In Time",
        artist: "Echo Room",
        audio: "music/song10.mp3",
        cover: "images/cover10.jpg",
        mood: "night"
    },

    {
        title: "Moonlight",
        artist: "Stellar",
        audio: "music/song11.mp3",
        cover: "images/cover11.jpg",
        mood: "night"
    },

    {
        title: "Paradise",
        artist: "Sunset Avenue",
        audio: "music/song12.mp3",
        cover: "images/cover12.jpg",
        mood: "energy"
    },

    {
        title: "Velvet Night",
        artist: "Dream Theory",
        audio: "music/song13.mp3",
        cover: "images/cover13.jpg",
        mood: "night"
    },

    {
        title: "Crystal Waves",
        artist: "Ocean Bloom",
        audio: "music/song14.mp3",
        cover: "images/cover14.jpg",
        mood: "chill"
    },

    {
        title: "Starlight",
        artist: "Luna Nova",
        audio: "music/song15.mp3",
        cover: "images/cover15.jpg",
        mood: "night"
    },

    {
        title: "Wild Energy",
        artist: "Pulse Factory",
        audio: "music/song16.mp3",
        cover: "images/cover16.jpg",
        mood: "energy"
    },

    {
        title: "Blue Horizon",
        artist: "Silent Ocean",
        audio: "music/song17.mp3",
        cover: "images/cover17.jpg",
        mood: "chill"
    },

    {
        title: "Neon Dreams",
        artist: "Future Lights",
        audio: "music/song18.mp3",
        cover: "images/cover18.jpg",
        mood: "energy"
    },

    {
        title: "Solar Flare",
        artist: "Sunset Motion",
        audio: "music/song19.mp3",
        cover: "images/cover19.jpg",
        mood: "energy"
    },

    {
        title: "Infinite Sky",
        artist: "Aurora Project",
        audio: "music/song20.mp3",
        cover: "images/cover20.jpg",
        mood: "chill"
    }

];


/* =====================================================
   DOM ELEMENTS
===================================================== */

const audio =
    document.getElementById("audio");

const playBtn =
    document.getElementById("playBtn");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const progress =
    document.getElementById("progress");

const volume =
    document.getElementById("volume");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const albumCover =
    document.getElementById("albumCover");

const heroCover =
    document.getElementById("heroCover");

const songTitle =
    document.getElementById("songTitle");

const songArtist =
    document.getElementById("songArtist");

const songsGrid =
    document.getElementById("songsGrid");

const homeSongsGrid =
    document.getElementById("homeSongsGrid");

const queueList =
    document.getElementById("queueList");

const favoriteBtn =
    document.getElementById("favoriteBtn");

const shuffleBtn =
    document.getElementById("shuffleBtn");

const repeatBtn =
    document.getElementById("repeatBtn");

const backwardBtn =
    document.getElementById("backwardBtn");

const forwardBtn =
    document.getElementById("forwardBtn");

const equalizer =
    document.getElementById("equalizer");

const searchInput =
    document.getElementById("searchInput");

const sortSongs =
    document.getElementById("sortSongs");

const heroPlay =
    document.getElementById("heroPlay");

const importBtn =
    document.getElementById("importBtn");

const musicInput =
    document.getElementById("musicInput");

const favoriteCount =
    document.getElementById("favoriteCount");

const favoriteNavCount =
    document.getElementById("favoriteNavCount");

const songCount =
    document.getElementById("songCount");

const recentCount =
    document.getElementById("recentCount");

const toast =
    document.getElementById("toast");

const volumeValue =
    document.getElementById("volumeValue");

const muteBtn =
    document.getElementById("muteBtn");

const themeButton =
    document.getElementById("themeButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const sidebar =
    document.getElementById("sidebar");

const mobileOverlay =
    document.getElementById("mobileOverlay");


/* =====================================================
   STATE
===================================================== */

let currentIndex = 0;

let isPlaying = false;

let shuffle = false;

let repeat = false;

let currentSection = "home";

let currentPlaylist = "all";

let previousVolume = 0.8;


/* =====================================================
   LOCAL STORAGE
===================================================== */

let favorites =
    JSON.parse(
        localStorage.getItem(
            "auraFavorites"
        )
    ) || [];

let recentlyPlayed =
    JSON.parse(
        localStorage.getItem(
            "auraRecentlyPlayed"
        )
    ) || [];


/* =====================================================
   SAVE STORAGE
===================================================== */

function saveFavorites() {

    localStorage.setItem(
        "auraFavorites",
        JSON.stringify(favorites)
    );
}


function saveRecentlyPlayed() {

    localStorage.setItem(
        "auraRecentlyPlayed",
        JSON.stringify(recentlyPlayed)
    );
}


/* =====================================================
   LOAD SONG
===================================================== */

function loadSong(index) {

    if (!songs[index]) {
        return;
    }

    currentIndex = index;

    const song =
        songs[index];

    songTitle.textContent =
        song.title;

    songArtist.textContent =
        song.artist;

    albumCover.src =
        song.cover;

    heroCover.src =
        song.cover;

    audio.src =
        song.audio;

    progress.value = 0;

    currentTime.textContent =
        "0:00";

    duration.textContent =
        "0:00";

    updateFavoriteButton();

    renderQueue();
}


/* =====================================================
   FORMAT TIME
===================================================== */

function formatTime(time) {

    if (
        isNaN(time) ||
        !isFinite(time)
    ) {

        return "0:00";
    }

    const minutes =
        Math.floor(
            time / 60
        );

    const seconds =
        Math.floor(
            time % 60
        )
            .toString()
            .padStart(2, "0");

    return `${minutes}:${seconds}`;
}


/* =====================================================
   PLAY
===================================================== */

function playSong() {

    audio.play()
        .then(() => {

            isPlaying = true;

            updatePlayButton();

            albumCover.classList.add(
                "playing"
            );

            equalizer.classList.add(
                "playing"
            );

            addRecentlyPlayed();

        })
        .catch(() => {

            showToast(
                "Please add your MP3 files first"
            );

        });
}


/* =====================================================
   PAUSE
===================================================== */

function pauseSong() {

    audio.pause();

    isPlaying = false;

    updatePlayButton();

    albumCover.classList.remove(
        "playing"
    );

    equalizer.classList.remove(
        "playing"
    );
}


/* =====================================================
   UPDATE PLAY BUTTON
===================================================== */

function updatePlayButton() {

    if (isPlaying) {

        playBtn.innerHTML =
            `<i class="fa-solid fa-pause"></i>`;

        heroPlay.innerHTML =
            `<i class="fa-solid fa-pause"></i>
             Pause Music`;

    } else {

        playBtn.innerHTML =
            `<i class="fa-solid fa-play"></i>`;

        heroPlay.innerHTML =
            `<i class="fa-solid fa-play"></i>
             Start Listening`;
    }
}


/* =====================================================
   MAIN PLAY BUTTON
===================================================== */

playBtn.addEventListener(
    "click",
    () => {

        if (isPlaying) {

            pauseSong();

        } else {

            playSong();
        }

    }
);


/* =====================================================
   HERO PLAY
===================================================== */

heroPlay.addEventListener(
    "click",
    () => {

        if (isPlaying) {

            pauseSong();

        } else {

            playSong();
        }

    }
);


/* =====================================================
   NEXT SONG
===================================================== */

function nextSong() {

    let nextIndex;

    if (shuffle) {

        do {

            nextIndex =
                Math.floor(
                    Math.random()
                    * songs.length
                );

        } while (
            nextIndex === currentIndex &&
            songs.length > 1
        );

    } else {

        nextIndex =
            (
                currentIndex + 1
            ) % songs.length;
    }

    loadSong(nextIndex);

    playSong();
}


/* =====================================================
   PREVIOUS SONG
===================================================== */

function previousSong() {

    const previousIndex =
        (
            currentIndex - 1
            + songs.length
        ) % songs.length;

    loadSong(previousIndex);

    playSong();
}


nextBtn.addEventListener(
    "click",
    nextSong
);

previousBtn.addEventListener(
    "click",
    previousSong
);


/* =====================================================
   AUDIO ENDED
===================================================== */

audio.addEventListener(
    "ended",
    () => {

        if (repeat) {

            audio.currentTime = 0;

            playSong();

        } else {

            nextSong();
        }

    }
);


/* =====================================================
   AUDIO METADATA
===================================================== */

audio.addEventListener(
    "loadedmetadata",
    () => {

        duration.textContent =
            formatTime(
                audio.duration
            );

    }
);


/* =====================================================
   PROGRESS
===================================================== */

audio.addEventListener(
    "timeupdate",
    () => {

        if (!audio.duration) {
            return;
        }

        const percent =
            (
                audio.currentTime /
                audio.duration
            ) * 100;

        progress.value =
            percent;

        currentTime.textContent =
            formatTime(
                audio.currentTime
            );

    }
);


/* =====================================================
   SEEK
===================================================== */

progress.addEventListener(
    "input",
    () => {

        if (!audio.duration) {
            return;
        }

        audio.currentTime =
            (
                progress.value /
                100
            ) * audio.duration;

    }
);


/* =====================================================
   VOLUME
===================================================== */

volume.addEventListener(
    "input",
    () => {

        audio.volume =
            Number(
                volume.value
            );

        previousVolume =
            audio.volume;

        updateVolumeUI();

    }
);


audio.volume = 0.8;


/* =====================================================
   VOLUME UI
===================================================== */

function updateVolumeUI() {

    const value =
        Math.round(
            audio.volume * 100
        );

    volumeValue.textContent =
        `${value}%`;

    if (audio.volume === 0) {

        muteBtn.innerHTML =
            `<i class="fa-solid fa-volume-xmark"></i>`;

    } else if (audio.volume < .5) {

        muteBtn.innerHTML =
            `<i class="fa-solid fa-volume-low"></i>`;

    } else {

        muteBtn.innerHTML =
            `<i class="fa-solid fa-volume-high"></i>`;
    }

    volume.value =
        audio.volume;
}


updateVolumeUI();


/* =====================================================
   MUTE
===================================================== */

muteBtn.addEventListener(
    "click",
    () => {

        if (audio.volume > 0) {

            previousVolume =
                audio.volume;

            audio.volume = 0;

        } else {

            audio.volume =
                previousVolume || .8;
        }

        updateVolumeUI();

    }
);


/* =====================================================
   BACKWARD
===================================================== */

backwardBtn.addEventListener(
    "click",
    () => {

        audio.currentTime =
            Math.max(
                0,
                audio.currentTime - 10
            );

    }
);


/* =====================================================
   FORWARD
===================================================== */

forwardBtn.addEventListener(
    "click",
    () => {

        audio.currentTime =
            Math.min(
                audio.duration || 0,
                audio.currentTime + 10
            );

    }
);


/* =====================================================
   SHUFFLE
===================================================== */

shuffleBtn.addEventListener(
    "click",
    () => {

        shuffle =
            !shuffle;

        shuffleBtn.classList.toggle(
            "active",
            shuffle
        );

        showToast(
            shuffle
                ? "Shuffle enabled"
                : "Shuffle disabled"
        );

    }
);


/* =====================================================
   REPEAT
===================================================== */

repeatBtn.addEventListener(
    "click",
    () => {

        repeat =
            !repeat;

        repeatBtn.classList.toggle(
            "active",
            repeat
        );

        showToast(
            repeat
                ? "Repeat enabled"
                : "Repeat disabled"
        );

    }
);


/* =====================================================
   FAVORITE BUTTON
===================================================== */

favoriteBtn.addEventListener(
    "click",
    () => {

        toggleFavorite(
            currentIndex
        );

    }
);


/* =====================================================
   TOGGLE FAVORITE
===================================================== */

function toggleFavorite(index) {

    const song =
        songs[index];

    if (!song) {
        return;
    }

    const exists =
        favorites.includes(
            song.title
        );

    if (exists) {

        favorites =
            favorites.filter(
                title =>
                    title !== song.title
            );

        showToast(
            "Removed from favorites"
        );

    } else {

        favorites.push(
            song.title
        );

        showToast(
            "Added to favorites ❤️"
        );
    }

    saveFavorites();

    updateCounts();

    updateFavoriteButton();

    renderCurrentView();

}


/* =====================================================
   UPDATE FAVORITE BUTTON
===================================================== */

function updateFavoriteButton() {

    const liked =
        favorites.includes(
            songs[currentIndex].title
        );

    favoriteBtn.classList.toggle(
        "liked",
        liked
    );

    favoriteBtn.innerHTML =
        liked

            ? `<i class="fa-solid fa-heart"></i>`

            : `<i class="fa-regular fa-heart"></i>`;
}


/* =====================================================
   SONG CARD
===================================================== */

function createSongCard(
    song,
    realIndex
) {

    const liked =
        favorites.includes(
            song.title
        );

    const card =
        document.createElement(
            "div"
        );

    card.className =
        "song-card";

    card.innerHTML = `

        <div class="song-image">

            <img
                src="${song.cover}"
                alt="${song.title}">

            <div class="song-overlay"></div>

            <button
                class="song-play"
                title="Play">

                <i class="fa-solid fa-play"></i>

            </button>

        </div>

        <div class="song-details">

            <h3>
                ${song.title}
            </h3>

            <p>
                ${song.artist}
            </p>

            <div class="song-meta">

                <span>
                    ${realIndex + 1}
                </span>

                <button
                    class="song-like
                    ${liked ? "liked" : ""}"
                    title="Favorite">

                    <i class="fa-${
                        liked
                            ? "solid"
                            : "regular"
                    } fa-heart"></i>

                </button>

            </div>

        </div>
    `;


    const playButton =
        card.querySelector(
            ".song-play"
        );

    const likeButton =
        card.querySelector(
            ".song-like"
        );


    playButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            playSelected(
                realIndex
            );

        }
    );


    likeButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            toggleFavorite(
                realIndex
            );

        }
    );


    card.addEventListener(
        "click",
        () => {

            playSelected(
                realIndex
            );

        }
    );


    return card;
}


/* =====================================================
   RENDER SONGS
===================================================== */

function renderSongs(
    list,
    container
) {

    container.innerHTML = "";


    if (!list.length) {

        container.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-music"></i>

                <h3>
                    No music found
                </h3>

                <p>
                    Try another search or
                    add some music.
                </p>

            </div>
        `;

        return;
    }


    list.forEach(song => {

        const realIndex =
            songs.indexOf(song);

        container.appendChild(
            createSongCard(
                song,
                realIndex
            )
        );

    });
}


/* =====================================================
   HOME SONGS
===================================================== */

function renderHomeSongs() {

    const list =
        songs.slice(0, 8);

    renderSongs(
        list,
        homeSongsGrid
    );
}


/* =====================================================
   PLAY SELECTED
===================================================== */

function playSelected(index) {

    loadSong(index);

    playSong();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   RECENTLY PLAYED
===================================================== */

function addRecentlyPlayed() {

    const song =
        songs[currentIndex];

    recentlyPlayed =
        recentlyPlayed.filter(
            title =>
                title !== song.title
        );

    recentlyPlayed.unshift(
        song.title
    );

    if (
        recentlyPlayed.length > 20
    ) {

        recentlyPlayed.pop();

    }

    saveRecentlyPlayed();

    updateCounts();
}


/* =====================================================
   GET RECENT SONGS
===================================================== */

function getRecentSongs() {

    return recentlyPlayed
        .map(title =>
            songs.find(
                song =>
                    song.title === title
            )
        )
        .filter(Boolean);
}


/* =====================================================
   GET FAVORITES
===================================================== */

function getFavoriteSongs() {

    return songs.filter(
        song =>
            favorites.includes(
                song.title
            )
    );
}


/* =====================================================
   PLAYLIST FILTER
===================================================== */

function getPlaylistSongs(
    playlist
) {

    if (
        playlist === "favorites"
    ) {

        return getFavoriteSongs();

    }


    return songs.filter(
        song =>
            song.mood === playlist
    );
}


/* =====================================================
   RENDER CURRENT VIEW
===================================================== */

function renderCurrentView() {

    if (
        currentSection === "home"
    ) {

        renderHomeSongs();

        return;
    }


    let list = [];


    if (
        currentSection === "library"
    ) {

        list = [...songs];

    } else if (
        currentSection === "favorites"
    ) {

        list =
            getFavoriteSongs();

    } else if (
        currentSection === "recent"
    ) {

        list =
            getRecentSongs();

    } else if (
        currentSection === "playlist"
    ) {

        list =
            getPlaylistSongs(
                currentPlaylist
            );
    }


    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    if (search) {

        list =
            list.filter(song =>

                song.title
                    .toLowerCase()
                    .includes(search)

                ||

                song.artist
                    .toLowerCase()
                    .includes(search)
            );
    }


    if (
        sortSongs.value ===
        "title"
    ) {

        list.sort(
            (a,b) =>
                a.title.localeCompare(
                    b.title
                )
        );

    }


    if (
        sortSongs.value ===
        "artist"
    ) {

        list.sort(
            (a,b) =>
                a.artist.localeCompare(
                    b.artist
                )
        );
    }


    renderSongs(
        list,
        songsGrid
    );
}


/* =====================================================
   UPDATE COUNTS
===================================================== */

function updateCounts() {

    songCount.textContent =
        songs.length;

    favoriteCount.textContent =
        favorites.length;

    favoriteNavCount.textContent =
        favorites.length;

    recentCount.textContent =
        recentlyPlayed.length;
}


updateCounts();


/* =====================================================
   NAVIGATION
===================================================== */

const navItems =
    document.querySelectorAll(
        ".nav-item[data-section]"
    );


navItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            const section =
                item.dataset.section;

            openSection(
                section
            );

        }
    );

});


/* =====================================================
   OPEN SECTION
===================================================== */

function openSection(
    section
) {

    currentSection =
        section;

    document
        .querySelectorAll(
            ".nav-item"
        )
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });


    const matching =
        document.querySelector(
            `.nav-item[data-section="${section}"]`
        );


    if (matching) {

        matching.classList.add(
            "active"
        );
    }


    document
        .getElementById(
            "homeSection"
        )
        .classList.remove(
            "active-section"
        );


    document
        .getElementById(
            "dynamicSection"
        )
        .classList.remove(
            "active-section"
        );


    if (
        section === "home"
    ) {

        document
            .getElementById(
                "homeSection"
            )
            .classList.add(
                "active-section"
            );

        renderHomeSongs();

    } else {

        document
            .getElementById(
                "dynamicSection"
            )
            .classList.add(
                "active-section"
            );

        updateDynamicPage();

    }


    closeMobileMenu();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   DYNAMIC PAGE
===================================================== */

function updateDynamicPage() {

    const title =
        document.getElementById(
            "dynamicTitle"
        );

    const label =
        document.getElementById(
            "dynamicLabel"
        );

    const description =
        document.getElementById(
            "dynamicDescription"
        );


    if (
        currentSection === "library"
    ) {

        label.textContent =
            "YOUR COLLECTION";

        title.textContent =
            "My Library";

        description.textContent =
            `${songs.length} songs in your music collection.`;

    }


    else if (
        currentSection === "favorites"
    ) {

        label.textContent =
            "YOUR FAVORITES";

        title.textContent =
            "Favorite Songs";

        description.textContent =
            "The songs you never want to lose.";

    }


    else if (
        currentSection === "recent"
    ) {

        label.textContent =
            "LISTENING HISTORY";

        title.textContent =
            "Recently Played";

        description.textContent =
            "Your latest listening activity.";

    }


    else if (
        currentSection === "playlist"
    ) {

        const names = {

            chill:
                "Chill Vibes",

            night:
                "Night Drive",

            energy:
                "Energy Hits",

            favorites:
                "My Favorites"
        };


        label.textContent =
            "PLAYLIST";

        title.textContent =
            names[currentPlaylist];

        description.textContent =
            "A carefully selected collection of music.";
    }


    renderCurrentView();
}


/* =====================================================
   PLAYLIST BUTTONS
===================================================== */

document
    .querySelectorAll(
        "[data-playlist]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                currentSection =
                    "playlist";

                currentPlaylist =
                    button.dataset.playlist;

                document
                    .querySelectorAll(
                        ".nav-item"
                    )
                    .forEach(item => {

                        item.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                document
                    .getElementById(
                        "homeSection"
                    )
                    .classList.remove(
                        "active-section"
                    );


                document
                    .getElementById(
                        "dynamicSection"
                    )
                    .classList.add(
                        "active-section"
                    );


                updateDynamicPage();

                closeMobileMenu();

            }

        );

    });


/* =====================================================
   GENRE CARDS
===================================================== */

document
    .querySelectorAll(
        ".genre-card[data-playlist]"
    )
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                currentSection =
                    "playlist";

                currentPlaylist =
                    card.dataset.playlist;


                document
                    .getElementById(
                        "homeSection"
                    )
                    .classList.remove(
                        "active-section"
                    );


                document
                    .getElementById(
                        "dynamicSection"
                    )
                    .classList.add(
                        "active-section"
                    );


                updateDynamicPage();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    });


/* =====================================================
   SORT
===================================================== */

sortSongs.addEventListener(
    "change",
    () => {

        renderCurrentView();

    }
);


/* =====================================================
   SEARCH
===================================================== */

searchInput.addEventListener(
    "input",
    () => {

        if (
            currentSection ===
            "home"
        ) {

            const search =
                searchInput.value
                    .trim()
                    .toLowerCase();


            const filtered =
                songs.filter(
                    song =>

                        song.title
                            .toLowerCase()
                            .includes(search)

                        ||

                        song.artist
                            .toLowerCase()
                            .includes(search)
                );


            renderSongs(
                filtered,
                homeSongsGrid
            );

        } else {

            renderCurrentView();

        }

    }
);


/* =====================================================
   CTRL + K SEARCH
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.ctrlKey &&
            event.key.toLowerCase()
            === "k"
        ) {

            event.preventDefault();

            searchInput.focus();

        }

    }
);


/* =====================================================
   EXPLORE
===================================================== */

document
    .getElementById(
        "exploreBtn"
    )
    .addEventListener(
        "click",
        () => {

            openSection(
                "library"
            );

        }
    );


/* =====================================================
   VIEW ALL
===================================================== */

document
    .querySelectorAll(
        ".view-all"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openSection(
                    "library"
                );

            }
        );

    });


/* =====================================================
   IMPORT MUSIC
===================================================== */

importBtn.addEventListener(
    "click",
    () => {

        musicInput.click();

    }
);


musicInput.addEventListener(
    "change",
    event => {

        const files =
            Array.from(
                event.target.files
            );


        if (!files.length) {
            return;
        }


        files.forEach(
            (file, index) => {

                const objectURL =
                    URL.createObjectURL(
                        file
                    );


                const newIndex =
                    songs.length + 1;


                songs.push({

                    title:
                        file.name.replace(
                            /\.[^/.]+$/,
                            ""
                        ),

                    artist:
                        "Imported Track",

                    audio:
                        objectURL,

                    cover:
                        `images/cover${
                            ((newIndex - 1)
                            % 20) + 1
                        }.jpg`,

                    mood:
                        "energy"

                });

            }
        );


        updateCounts();

        renderCurrentView();

        renderHomeSongs();

        renderQueue();


        showToast(
            `${files.length} song(s) imported successfully`
        );


        musicInput.value = "";

    }
);


/* =====================================================
   QUEUE
===================================================== */

function renderQueue() {

    queueList.innerHTML = "";


    if (!songs.length) {
        return;
    }


    const upcoming = [];


    for (
        let i = 1;
        i <= Math.min(5,songs.length - 1);
        i++
    ) {

        const index =
            (
                currentIndex + i
            ) % songs.length;

        upcoming.push(
            songs[index]
        );

    }


    upcoming.forEach(
        song => {

            const index =
                songs.indexOf(
                    song
                );


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "queue-item";


            item.innerHTML = `

                <img
                    src="${song.cover}"
                    alt="${song.title}">

                <div>

                    <strong>
                        ${song.title}
                    </strong>

                    <span>
                        ${song.artist}
                    </span>

                </div>

                <i
                    class="fa-solid fa-play">
                </i>

            `;


            item.addEventListener(
                "click",
                () => {

                    playSelected(
                        index
                    );

                }
            );


            queueList.appendChild(
                item
            );

        }
    );


    document
        .getElementById(
            "queueCount"
        )
        .textContent =
        `${upcoming.length} songs`;
}


/* =====================================================
   MOBILE MENU
===================================================== */

mobileMenu.addEventListener(
    "click",
    () => {

        sidebar.classList.toggle(
            "open"
        );

        mobileOverlay.classList.toggle(
            "show"
        );

    }
);


mobileOverlay.addEventListener(
    "click",
    closeMobileMenu
);


function closeMobileMenu() {

    sidebar.classList.remove(
        "open"
    );

    mobileOverlay.classList.remove(
        "show"
    );
}


/* =====================================================
   THEME
===================================================== */

themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-theme"
        );


        const light =
            document.body.classList.contains(
                "light-theme"
            );


        themeButton.innerHTML =
            light

                ? `<i class="fa-solid fa-sun"></i>`

                : `<i class="fa-solid fa-moon"></i>`;


        localStorage.setItem(
            "auraTheme",
            light
                ? "light"
                : "dark"
        );

    }
);


/* =====================================================
   LOAD THEME
===================================================== */

if (
    localStorage.getItem(
        "auraTheme"
    ) === "light"
) {

    document.body.classList.add(
        "light-theme"
    );

    themeButton.innerHTML =
        `<i class="fa-solid fa-sun"></i>`;
}


/* =====================================================
   NOTIFICATION
===================================================== */

document
    .getElementById(
        "notificationBtn"
    )
    .addEventListener(
        "click",
        () => {

            showToast(
                "You're all caught up 🎵"
            );

        }
    );


/* =====================================================
   PLAYER MORE
===================================================== */

document
    .getElementById(
        "morePlayerBtn"
    )
    .addEventListener(
        "click",
        () => {

            showToast(
                "AuraPlayer Premium controls"
            );

        }
    );


/* =====================================================
   KEYBOARD CONTROLS
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.target.tagName ===
            "INPUT" ||

            event.target.tagName ===
            "SELECT"
        ) {

            return;
        }


        /* SPACE */

        if (
            event.code ===
            "Space"
        ) {

            event.preventDefault();

            isPlaying
                ? pauseSong()
                : playSong();
        }


        /* RIGHT */

        if (
            event.key ===
            "ArrowRight"
        ) {

            audio.currentTime =
                Math.min(
                    audio.duration || 0,
                    audio.currentTime + 5
                );
        }


        /* LEFT */

        if (
            event.key ===
            "ArrowLeft"
        ) {

            audio.currentTime =
                Math.max(
                    0,
                    audio.currentTime - 5
                );
        }


        /* UP */

        if (
            event.key ===
            "ArrowUp"
        ) {

            event.preventDefault();

            audio.volume =
                Math.min(
                    1,
                    audio.volume + .05
                );

            updateVolumeUI();
        }


        /* DOWN */

        if (
            event.key ===
            "ArrowDown"
        ) {

            event.preventDefault();

            audio.volume =
                Math.max(
                    0,
                    audio.volume - .05
                );

            updateVolumeUI();
        }


        /* N = NEXT */

        if (
            event.key.toLowerCase()
            === "n"
        ) {

            nextSong();

        }


        /* P = PREVIOUS */

        if (
            event.key.toLowerCase()
            === "p"
        ) {

            previousSong();

        }

    }
);


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(message) {

    toast
        .querySelector("span")
        .textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* =====================================================
   INITIALIZE
===================================================== */

loadSong(0);

renderHomeSongs();

renderCurrentView();

renderQueue();

updateCounts();
