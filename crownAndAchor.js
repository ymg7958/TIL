const rand = (m, n) => {
  return m + Math.floor((n - m + 1) * Math.random());
  //   return Math.floor(Math.random() * (n - m + 1));
};
const randFace = () => {
  return ["crown", "heart", "diamond", "achor", "spade", "love"][rand(0, 5)];
};

let gemble = 50; // 시작 조건
let gameRound = 0;

while (gemble > 1 && gemble < 100) {
  // 100만원 이상 따거나 0원이 될때까지 반복
  gameRound++;
  console.log("Round: " + gameRound);
  console.log("Starting gemble: " + gemble);

  // 각 카드의 베팅금액
  let bets = {
    crown: 0,
    diamond: 0,
    achor: 0,
    spade: 0,
    love: 0,
    heart: 0,
  };
  let totalBet = rand(1, gemble); // 랜덤금액으로 라운드마다 베팅할 돈

  if (totalBet === 7) {
    totalBet = gemble;
    bets.heart = totalBet;
  } else {
    // 랜덤금액이 0원이 될 때가지 카드에 베팅한다.
    let rest = totalBet; // 27 line, 에서의 랜덤 금액
    do {
      let bet = rand(1, rest); // 한 번 베팅시 투자하는 랜덤 금액 (기존 랜덤금액 - 매 카드 랜덤금액)
      let card = randFace(); // 한 장의 랜덤카드 뽑기
      bets[card] += bet; // 랜덤카드에 첫번째부터 베팅 금액을 넣기
      rest = rest - bet; // 그 다음 베팅을 위해 랜덤베팅금액에서 차감
    } while (rest > 0); // 랜덤베팅금액이 1원이 될 때 까지 반복 Do ~ while
  }
  // 투자한 다음 남은 금액
  gemble -= totalBet;
  console.log(
    Object.keys(bets).map((card) => `${card}: ${bets[card]}\n`) + `${totalBet}`
  );

  // 주사위 던지기

  const hand = []; // 카드를 담을 배열
  for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace()); // 3장의 랜덤 카드 배열에 담기
  }
  console.log(`${hand}`);

  // 딴 돈을 가져옵니다.
  let getMoney = 0;
  for (let dice = 0; dice < hand.length; dice++) {
    let card = hand[dice];
    if (bets[card] > 0) {
      getMoney = getMoney + bets[card];
    }
  }
  console.log(`${getMoney}`);
  gemble = gemble + getMoney;
}
console.log(gemble);
