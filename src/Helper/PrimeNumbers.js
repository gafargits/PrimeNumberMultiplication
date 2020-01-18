import isPrime from './isPrime'

const PrimeNumbers = () => {
  let n = 11;
  let num = 2;
  let primeCount = 0;
  let primeNumbers = [];

  while (primeCount < n) {
    if (isPrime(num)) {
      primeCount += 1;
      primeNumbers.push(num);
    }
    num += 1;
  }
  return primeNumbers;
}

export default PrimeNumbers