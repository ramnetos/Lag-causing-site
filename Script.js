function createLag() {
  // Simulate heavy processing
  const startTime = Date.now();
  while (Date.now() - startTime < 5000) {
    // Perform more complex calculations
    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += Math.sqrt(Math.random() * i);
    }
  }
}
// adding a comment to re-deploy
