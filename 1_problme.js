const unique_occurrences = (str) => {
    set = [...new Set(str)];
    let uniqueString = "";
    for (let value of set) uniqueString += value;
    console.log(uniqueString);
  };
  
  unique_occurrences("abcadeecfb");