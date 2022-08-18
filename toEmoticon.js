//An emoticon is a group of keyboard characters like [ : ) ] that typically represent emoji's but are instead made only with a keyboard and a dab of creativity. Here's we tinkered with a few and developed a program that can output one depending on the input.

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
