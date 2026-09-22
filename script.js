// Dokładna lista Twoich plików mp3 (z uwzględnieniem spacji i wielkich liter)
const bratSongs = [
  { title: "360", file: "360.mp3" },
  { title: "365", file: "365.mp3" },
  { title: "apple", file: "Apple.mp3" },
  { title: "b2b", file: "B2b.mp3" },
  { title: "club classics", file: "Club classics.mp3" },
  { title: "everything is romantic", file: "Everything is romantic.mp3" },
  { title: "girl, so confusing", file: "Girl, so confusing.mp3" },
  { title: "i might say something stupid", file: "I might say something stupid.mp3" },
  { title: "i think about it all the time", file: "I think about it all the time.mp3" },
  { title: "mean girls", file: "Mean girls.mp3" },
  { title: "rewind", file: "Rewind.mp3" },
  { title: "so i", file: "So I.mp3" },
  { title: "sympathy is a knife", file: "Sympathy is a knife.mp3" },
  { title: "talk talk", file: "Talk talk.mp3" },
  { title: "von dutch", file: "Von dutch.mp3" }
];

const button = document.getElementById('bratButton');
const message = document.getElementById('message');
const audioPlayer = document.getElementById('audioPlayer');

let lastSelectedIndex = -1;

button.addEventListener('click', () => {
  let randomIndex;
  
  // Zabezpieczenie przed wylosowaniem tej samej piosenki dwa razy z rzędu
  do {
    randomIndex = Math.floor(Math.random() * bratSongs.length);
  } while (randomIndex === lastSelectedIndex);
  
  lastSelectedIndex = randomIndex;
  const selectedSong = bratSongs[randomIndex];

  // Wyświetlenie tytułu (zgodnie ze stylem płyty, małymi literami)
  message.textContent = selectedSong.title;
  
  // Wskazanie pliku mp3 znajdującego się w tym samym folderze
  audioPlayer.src = selectedSong.file;
  
  // Odtwarzanie dźwięku
  audioPlayer.play().catch(error => {
    console.log("Przeglądarka zablokowała odtwarzanie: ", error);
  });
});
