function isPalindrome(word) {
    const length = kata.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (word[i] !== word[length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  const kata = "katak";
  if (isPalindrome(kata)) {
    console.log(`${kata} adalah sebuah palindrom.`);
  } else {
    console.log(`${kata} bukan sebuah palindrom.`);
  }
  