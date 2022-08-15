
const toEmoticon = emoticon => {
  switch (emoticon){
    case 'shrug':
    return '|_{"}_|';
    break;
    case 'smiley face':
    return ':)'
    break;
    case 'frowny face':
    return ':(';
    break;
    case 'winky face':
    return ';)';
    break;
    case 'heart':
    return '<3';
    default: 
    return '|_(* ~ *)_|';
  }
}

console.log(toEmoticon("whatever"));
