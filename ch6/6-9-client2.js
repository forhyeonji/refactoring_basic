import { acquireReading, baseRate } from './6-9.js';

const reading = acquireReading();

function taxThreshold(year) {
  return 0.1;
}

export const taxableCharge = reading.taxableCharge;
console.log('taxableCharge', taxableCharge);
