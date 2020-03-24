const swap = (cups, cup1, cup2): number[] => {
  let output = [...cups];

  output[cup1] = output[cup2];
  output[cup2] = cups[cup1];

  return output;
};

export const getRandomCup = (totalOfCups: number): number =>
  Math.floor(Math.random() * totalOfCups);

const shuffle = (cups, totalOfCups): number[] => {
  const cup1 = getRandomCup(totalOfCups);
  let cup2 = getRandomCup(totalOfCups);

  while (cup1 === cup2) {
    cup2 = getRandomCup(totalOfCups);
  }

  return swap(cups, cup1, cup2);
};

export default shuffle;
