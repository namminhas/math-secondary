export const loadSound = async (sound: any, soundUrl: string) => {
  const { isLoaded } = await sound.getStatusAsync();
  if (!isLoaded) {
    await sound.loadAsync(soundUrl, { shouldPlay: false }, false);
  }
  await sound.playAsync();
};

export const randomNumberToN = (n: number) => {
  return Math.floor(Math.random() * n);
};


export function getRandomArray(arr: any[], numberOfElements: number) {
  const shuffled = arr.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numberOfElements);
}