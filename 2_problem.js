const countAlphabet = (str) => {
    let count = 0;
    let letterFrequency = new Map();
    for (let i = 0; i < str.length; i++) {
      if (letterFrequency.get(str[i])) {
        letterFrequency.set(str[i], count + 1);
      } else letterFrequency.set(str[i], 1);
      count = letterFrequency.get(str[i]);
    }
    console.log(letterFrequency);
  };
  
  countAlphabet("abcadeecfb");