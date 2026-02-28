(() => {
  const deadCounter = document.getElementById('dead');
  const lostCounter = document.getElementById('lost');
  const maxDead = 10;
  const maxLost = 5;

  let dead = 0;
  let lost = 0;

  const getHole = index => document.getElementById(`hole${index}`);

  const resetGame = () => {
    dead = 0;
	lost = 0;
	deadCounter.textContent = dead;
	lostCounter.textContent = lost;

  for (let i = 1; i <= 9; i++) {
    getHole(i).className = 'hole';
	}
  };

  for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', function() {
	  if (this.classList.contains('hole_has-mole')) {
	    dead++;
		deadCounter.textContent = dead;
		this.classList.remove('hole_has-mole');
		} else {
		  lost++;
		  lostCounter.textContent = lost;
		}

	  if (dead >= maxDead) {
	    alert('Вы выиграли! Поздравляем!');
		resetGame();
	  } else if (lost >= maxLost) {
	    alert('Вы проиграли! Попробуйте снова.');
		resetGame();
	  }
    });
  }
})();