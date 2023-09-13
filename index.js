const batteryBatches = [4, 5, 6, 3, 2, 7, 4];

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalBatteries); // Output: 31