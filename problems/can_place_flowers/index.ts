function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let availableFlowerPlots = 0;
  for (let i = 0; i < flowerbed.length; i += 1) {
    const prev = flowerbed[i - 1] ?? 0;
    const cur = flowerbed[i];
    const next = flowerbed[i + 1] ?? 0;

    if (prev === 0 && next === 0 && cur === 0) {
      availableFlowerPlots += 1;
      flowerbed[i] = 1;
    }
  }

  return availableFlowerPlots >= n;
}
