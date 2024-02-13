export function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert RGB values to hexadecimal format
  const hexColor =
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return hexColor;
}
