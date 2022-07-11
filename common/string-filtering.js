// #1 String filtering

const string = "Привет! Как дела?";
const vowels = [
  'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я',
  'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'
];

const getVowels = string => {
  let extractedVowels = "";

  for (let i = 0; i < string.length; i++) {
    const currentLetter = string[i];

    if (vowels.includes(currentLetter)) {
      extractedVowels += currentLetter;
    }
  }

  return extractedVowels;
}

console.log(getVowels(string));
