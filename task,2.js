function reverseWords(sentence) {
    let reversedSentence = '';
    let word = '';
  
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== ' ') {
        word += sentence[i];
      } else {
        reversedSentence = word + ' ' + reversedSentence;
        word = '';
      }
    }
    reversedSentence = word + ' ' + reversedSentence;
    
    return reversedSentence.trim();
  }
  const sentenceToReverse = "aku suka kamu";
  const reversedSentence = reverseWords(sentenceToReverse);
  console.log(reversedSentence);
  