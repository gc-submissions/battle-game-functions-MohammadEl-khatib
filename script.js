const randomDamage = () => Math.floor(Math.random() * 10) + 1;
const chooseOption = (opt1, opt2) => {
  const randNum = Math.round(Math.random());
  if (randNum === 0) {
    return opt1;
  } else {
    return opt2;
  }
};
function attackPlayer(health) {
  return health - randomDamage();
}
const logHealth = (player, health) =>
  console.log(`${player} Health: ` + health);

const logDeath = (winner, loser) => console.log(`${winner} deafeted ${loser}`);

const isDead = (health) => health <= 0;

function fight(player1, player2, player1health, player2health) {
  while (true) {
    var attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2health = attackPlayer(player2health);
      logHealth(player2, player2health);
      if (isDead(player2health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1health = attackPlayer(player1health);
      logHealth(player1, player1health);
      if (isDead(player1health) === true) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
fight("bazzi", "zony", 70, 65);
