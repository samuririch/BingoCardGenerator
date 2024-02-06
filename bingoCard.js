function generateRandomNumbers() {
    let numbers = Array.from({ length: 21 }, (_, index) => index); // Create an array of numbers from 0 to 20
    let result = [];
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      const selectedNumber = numbers[randomIndex];
  
      // Remove the selected number from the array to avoid repetition
      numbers.splice(randomIndex, 1);
  
      result.push(selectedNumber);
    }
  
    return result;
  }

const randomNumbers = generateRandomNumbers();
console.log(randomNumbers);

/* B = (1-15)
I = (16-30)
N = (31-45)
G = (46-60)
O = (61-75) */