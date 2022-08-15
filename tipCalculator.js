function tipCalculator(quality, total){
  switch(quality){
    case 'bad':
    return total * 0.05;
    break;
    case 'ok':
    return total * 0.15;
    break;
    case 'good':
    return total * 0.20;
    break;
    case 'excellent':
    return total * 0.30;
    break;
    default:
    return total * 0.18;
}
}

console.log(tipCalculator('good', 500));
