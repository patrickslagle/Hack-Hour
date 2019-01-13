// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors,
// one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.

function sumPrimes(num) {
  let count = 0;
  const primes = [];
  for (let i = 2; i <= num; i += 1) {
    let isPrime = true;
    let primePointer = 0;
    while (primes[primePointer] && isPrime) {
      if (i % primes[primePointer] === 0) isPrime = false;
      primePointer += 1;
    }
    if (isPrime) {
      primes.push(i);
      count += i;
    }
  }
  return count;
}
