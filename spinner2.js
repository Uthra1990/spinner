//process.stdout.write('Hello Canada Lighthouse Labs \rheyyy\n');
/*setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 700);

  setTimeout(() => {
    process.stdout.write('\r|  ');
  }, 900); */

  const spinner = function(arr) {
    let arr1 = arr;
    for (let i = 0; i < arr1.length; i++) {
      setTimeout(() => {
        process.stdout.write(`\r ${arr1[i]}`);
      if (i === arr1.length - 1) {
        process.stdout.write('\n');
       }
    }, 180 * i);
}
}
spinner(['|','/','-','\\','|']);