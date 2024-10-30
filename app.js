let bank = 100

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]
let teamNumbers = [1, 2]

const team1Elm = document.getElementById('team 1')
const team2Elm = document.getElementById('team 2')



function changeTeams() {
  for (let i = 0; i < players.length; i++) {
    let player = players[i];
    let randomTeam = Math.floor(Math.random() * teamNumbers.length)
    player.teamNumber = teamNumbers[randomTeam]
    console.log('Team Change')
  }
  drawTeam1()
  drawTeam2()
}







//!SECTION VISUAL/DRAWING CODE

function drawTeam1() {
  team1Elm.innerHTML = ''
  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    if (player.teamNumber == 1) {
      console.log(player);
      team1Elm.innerHTML += `<p>${player.emoji} ${player.name}</p>`
    }
  }
}

drawTeam1()

function drawTeam2() {
  team2Elm.innerHTML = ''
  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    if (player.teamNumber == 2) {
      console.log(player);
      team2Elm.innerHTML += `<p>${player.emoji} ${player.name}</p>`
    }
  }
}

drawTeam2()
