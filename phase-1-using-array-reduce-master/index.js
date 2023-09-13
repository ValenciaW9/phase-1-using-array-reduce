const batteryBatches = [4, 5, 6, 3, 2, 7];

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalBatteries); // Output: 27