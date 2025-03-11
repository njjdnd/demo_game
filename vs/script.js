let pHP = 100;
let bossHealth = 500;
let boss2Health = 1000;
let healQuantity = 4;
function attack() {                                        // УРОН 10ед
  bossHealth = bossHealth - 10;
  bossHP.textContent = `Boss HP: ${bossHealth}`;

  if (bossHealth <= 0) {
    next.style.display = "flex";
    clearTimeout(health);
    win.style.display = "flex";
    document.getElementById("attack").disabled = true;
    document.getElementById("heal").disabled = true;
  } else {
    win.style.display = "none";
  }
}

function pheal() {                                          // + 50 ХП ПРИ НАЖАТИИ НА ХИЛКИ
  pHP + 50;

  if (pHP + 20 > 100) {
    pHP = 100;
  } else {
    pHP = pHP + 50;
  }
  playerHP.textContent = `Your HP: ${pHP}`;

  healQuantity--;
  healqty.textContent = `x${healQuantity}`;

  if (healQuantity <= 0) {
    document.getElementById("heal").disabled = true;
  } else {
    healqty.textContent = `x${healQuantity}`;
  }
}

function damage() {                                       // УРОН БОССА ПО ТЕБЕ 1ед/с
  playerHP.innerHTML = "Your HP: " + pHP;
  pHP--;
  if (pHP < 0) {
    lose.style.display = "flex";
    clearTimeout(health);
  } else {
    lose.style.display = "none";
    health = setTimeout(damage, 1000);
  }
}


function startGame() {
  damage();
  healqty.style.display = 'inline';
  start.style.display = 'none';
  fontLevel1.style.display = 'inline';
}

function nextLevel() {
  damage2();
  win.style.display = 'none';
  next.style.display = 'none';
  fontLevel1.style.display = 'none';
  fontLevel2.style.display = 'inline';
}


function pheal2() {                                          // + 50 ХП ПРИ НАЖАТИИ НА ХИЛКИ
  pHP + 50;

  if (pHP + 20 > 100) {
    pHP = 100;
  } else {
    pHP = pHP + 50;
  }
  playerHP2.textContent = `Your HP: ${pHP}`;

  healQuantity--;
  healqty.textContent = `x${healQuantity}`;

  if (healQuantity <= 0) {
    document.getElementById("heal2").disabled = true;
  } else {
    healqty2.textContent = `x${healQuantity}`;
  }
}

function attack2() {                                        // УРОН 10ед
  boss2Health = boss2Health - 10;
  bossHP2.textContent = `Boss HP: ${boss2Health}`;
  
  if (boss2Health <= 0) {
    // next.style.display = "flex";
    clearTimeout(health);
    win.style.display = "flex";
    document.getElementById("heal2").disabled = true;
    document.getElementById("attack2").disabled = true;
  } else {
    win.style.display = "none";
  }
}

function damage2() {                                       // УРОН БОССА ПО ТЕБЕ 1ед/800мс
  playerHP2.innerHTML = "Your HP: " + pHP;
  pHP--;
  if (pHP < 0) {
    lose.style.display = "flex";
    clearTimeout(health);
  } else {
    lose.style.display = "none";
    health = setTimeout(damage2, 800);
  }
}
