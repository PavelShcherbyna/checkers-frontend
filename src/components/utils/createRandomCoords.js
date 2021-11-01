function createRandomCoords() {
    const xB = 0;
    const xW = 7;
    let yB;
    let yW;
    const randomB = Math.random();
    const randomW = Math.random();
  
    if (randomB < 0.25) {
      yB = 1;
    } else if (randomB > 0.25 && randomB < 0.5) {
      yB = 3;
    } else if (randomB > 0.5 && randomB < 0.75) {
      yB = 5;
    } else if (randomB > 0.75 && randomB < 1) {
      yB = 7;
    }
  
    if (randomW < 0.25) {
      yW = 0;
    } else if (randomW > 0.25 && randomW < 0.5) {
      yW = 2;
    } else if (randomW > 0.5 && randomW < 0.75) {
      yW = 4;
    } else if (randomW > 0.75 && randomW < 1) {
      yW = 6;
    }
  
    return [{x: xB, y: yB}, {x: xW, y: yW}];
    
    // return console.log([{x: xB, y: yB}, {x: xW, y: yW} ]);
  }
  export default createRandomCoords;