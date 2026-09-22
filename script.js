// Lista piosenek z albumu BRAT wraz z ich ID z serwisu YouTube
const bratSongs = [
  { title: "360", id: "WJW-VvmDrsk" },
  { title: "Club classics", id: "m6M3K_hC7LI" },
  { title: "Sympathy is a knife", id: "K3l1H5n-uYc" },
  { title: "I might say something stupid", id: "5g1z77rFWhw" },
  { title: "Talk talk", id: "Z94k-4Z_f5E" },
  { title: "Von dutch", id: "cochyK29D94" },
  { title: "Everything is romantic", id: "i-wZ_LgM-lU" },
  { title: "Rewind", id: "m1a44cR0Jms" },
  { title: "So I", id: "nndz6_4K1U0" },
  { title: "Girl, so confusing", id: "p3L0aY9H5qY" },
  { title: "Apple", id: "q9r7u3rF_qM" },
  { title: "B2b", id: "PZ_eBqC2aL0" },
  { title: "365", id: "zG_gM69fC9k" }
];

let player;
let lastSelectedIndex = -1;

// Funkcja wymagana przez YouTube API do zainicjowania odtwarzacza
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: '',
    playerVars: {
      'autoplay': 0,
      'controls': 0
    }
  });
}

const button = document.getElementById('bratButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  if (!player || typeof player.loadVideoById !== 'function') {
    message.textContent = "odtwarzacz się ładuje... spróbuj ponownie";
    return;
  }

  let randomIndex;
  
  // Losowanie piosenki (zabezpieczenie przed wylosowaniem tej samej pod rząd)
  do {
    randomIndex = Math.floor(Math.random() * bratSongs.length);
  } while (randomIndex === lastSelectedIndex && bratSongs.length > 1);
  
  lastSelectedIndex = randomIndex;
  const selectedSong = bratSongs[randomIndex];

  // Wyświetlenie tytułu na ekranie
  message.textContent = selectedSong.title;

  // Załadowanie i automatyczne odtworzenie piosenki
  player.loadVideoById(selectedSong.id);
});
