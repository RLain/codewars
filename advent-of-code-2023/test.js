const data = `51591twosix4dhsxvgghxq,
425nine
llvmhjtr8nbbhrfsixone`;

const makeDigitRegex = (digit) => {
  const has_number_after = `(?:.\\D*${digit})`;
  return new RegExp(
    `(${digit})(?:(?:(?=${has_number_after})(?:.)|(${digit})))*\\D*$`
  );
};

const partTwoRegex = makeDigitRegex(
  `(?:\\d|${Object.keys(wordDigitMap).join('|')})`
);

export const partTwo = (input) => {
  return input
    .lines()
    .filter((line) => line.replaceAll(' ', '').length > 0)
    .map((line) => line.match(partTwoRegex))
    .map(([_, first, second = first]) =>
      Number(
        `${wordToDigit(first)}${wordDigitMap[second] ?? wordToDigit(second)}`
      )
    )
    .reduce((total, next) => total + next, 0);
};
