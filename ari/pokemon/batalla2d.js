let playerHP = 100;
let opponentHP = 100;

function updateHP() {
  document.getElementById('player-hp').style.width = `${playerHP}%`;
  document.getElementById('opponent-hp').style.width = `${opponentHP}%`;
}

function log(text) {
  document.getElementById('battle-log').textContent = text;
}

function playerAttack(move) {
  if (playerHP <= 0 || opponentHP <= 0) return;

  let damage = move === "Pistola d'Aigua" ? 25 : 15;
  opponentHP = Math.max(opponentHP - damage, 0);
  updateHP();
  log(`Squirtle usa ${move}! Fa ${damage} de mal.`);

  if (opponentHP <= 0) {
    log("Has guanyat! Charmander ha caigut.");
    return;
  }

  setTimeout(opponentTurn, 1000);
}

function opponentTurn() {
  let damage = Math.floor(Math.random() * 15) + 5;
  playerHP = Math.max(playerHP - damage, 0);
  updateHP();
  log(`Charmander ataca! Fa ${damage} de mal.`);

  if (playerHP <= 0) {
    log("Has perdut... Squirtle ha caigut.");
  }
}

// Inicialitza
updateHP();
