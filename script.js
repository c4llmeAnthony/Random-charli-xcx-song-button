// Lista piosenek z oficjalnymi adresami URL do plików audio (previews)
const bratSongs = [
  { title: "360", url: "https://kfs.io" },
  { title: "Club classics", url: "https://kfs.io" },
  { title: "Sympathy is a knife", url: "https://kfs.io" },
  { title: "I might say something stupid", url: "https://kfs.io" },
  { title: "Talk talk", url: "https://kfs.io" },
  { title: "Von dutch", url: "https://kfs.io" },
  { title: "Everything is romantic", url: "https://kfs.io" },
  { title: "Rewind", url: "https://kfs.io" },
  { title: "So I", url: "https://kfs.io" },
  { title: "Girl, so confusing", url: "https://kfs.io" },
  { title: "Apple", url: "https://kfs.io" },
  { title: "B2b", url: "https://kfs.io" },
  { title: "365", url: "https://kfs.io" }
];

const button = document.getElementById('bratButton');
const message = document.getElementById('message');
const audioPlayer = document.getElementById('audioPlayer');

let lastSelectedIndex = -1;

button.addEventListener('click', () => {
  let randomIndex;
  
  // Losowanie (zabezpieczenie przed powtórkami pod rząd)
  do {
    randomIndex = Math.floor(Math.random() * bratSongs.length);
  } while (randomIndex === lastSelectedIndex);
  
  lastSelectedIndex = randomIndex;
  const selectedSong = bratSongs[randomIndex];

  // Zmiana tekstu i źródła dźwięku
  message.textContent = selectedSong.title;
  audioPlayer.src = selectedSong.url;
  
  // Wymuszenie odtworzenia po kliknięciu
  audioPlayer.play().catch(error => {
    console.log("Odtwarzanie zablokowane przez przeglądarkę:", error);
  });
});
