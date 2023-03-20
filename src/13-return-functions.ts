(()=>{

  const calcTotal = (prices: number[]) => {
    let total = 0;
    prices.forEach(price => {
      total += price;
    });
    return total.toString();
  };

  const printTotal = (price: number[]): void => {
    const rta = calcTotal(price);
    console.log(`El total es: ${rta}`);
  };

  printTotal([10, 20, 30, 40, 50]);

})();
