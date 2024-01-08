const lifePhase = age => {
  if (age < 0 || age > 140) {
  return 'This is not a valid age';
} else if (age < 4) {
  return 'baby';
} else if (age < 13) {
  return 'child';
} else if (age < 20) {
  return 'teen';
} else if (age < 65) {
  return 'adult';
} else {
  return 'senior citizen';
}
}



function calculateLifePhase() {
  const ageInput = document.getElementById('ageInput');
  const resultElement = document.getElementById('result');

  const age = parseInt(ageInput.value, 10);

  if (isNaN(age)) {
    resultElement.textContent = 'Please enter a valid number.';
  } else {
    const phase = lifePhase(age);
    resultElement.textContent = `You are a ${phase}.`;
  }
}


