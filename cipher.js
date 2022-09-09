let ceaserCipher = (str) => {
    //Deciphered reference letters
    let decoded = {
        '<--': "A",
        '***': 'B',
        '++^': 'C',
        '--*': 'D',
        '*+-': 'E',
        '*@%': 'F',
        '$^%': 'G',
        '++#': 'H',
        '###': 'I',
        '<*>': 'J',
        '++#': 'K',
        '--*': 'L',
        '*!!': 'M',
        '<++': 'N',
        '#%&': 'O',
        '#&@': 'P',
        '-->': 'Q',
        '^+*': 'R',
        '#-+': 'S',
        '^#%': 'T',
        '&$#': 'U',
        '+!#': 'V',
        '--^': 'W',
        '$#-': 'X',
        '++>': 'Y',
        '--#': 'Z',
        '^@*': ' '
    };

    //convert the string to lowercase
    str = str.toLowerCase();
  
    //decipher the code
    let decipher = "";
    for (let i = 0; i < str.length; i++) {
      decipher += decoded[str[i]];
    }
  
    //return the output
    return decipher;
  };
    