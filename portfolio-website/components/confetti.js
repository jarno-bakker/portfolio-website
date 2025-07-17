import confetti from "canvas-confetti";

export function dateEqualsDateAndMonth(date, dateToCompare) {
  return (
    date.getDate() === dateToCompare.getDate() &&
    date.getMonth() === dateToCompare.getMonth()
  );
}

export function confettiExplosion() {
  const anniversaryDate = new Date("2023-12-09");
  const birthdayKim = new Date("2004-12-02");
  const birthdayJarno = new Date("2001-06-26");
  const moveInHouseDay = new Date("2025-10-01");
  const currentDate = new Date();

  if (
    dateEqualsDateAndMonth(currentDate, anniversaryDate) ||
    dateEqualsDateAndMonth(currentDate, birthdayKim) ||
    dateEqualsDateAndMonth(currentDate, birthdayJarno) ||
    dateEqualsDateAndMonth(currentDate, moveInHouseDay)
  ) {
    confetti({
      particleCount: 80,
      spread: 120,
      origin: { y: 0.6 },
    });
  }
}

export function confettiAnimation() {
  const currentDate = new Date();
  const anniversaryDate = new Date("2023-12-09");
  const moveInHouseDay = new Date("2025-10-01");

  if (!dateEqualsDateAndMonth(currentDate, anniversaryDate) && !dateEqualsDateAndMonth(currentDate, moveInHouseDay)) {
    return;
  }
  const duration = 8 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      }),
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      }),
    );
  }, 250);
}
