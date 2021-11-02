let delay = 0;
const spinner2 = () => {
  const spinnerArray = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
  spinnerArray.forEach(element => {
    setTimeout(() => {
    process.stdout.write(`\r${element}   `);
    }, delay);
    delay += 200;
  }
)};
    

  // setTimeout(() => {
  //   process.stdout.write('\r/   ');
  // }, 300);

  // setTimeout(() => {
  //   process.stdout.write('\r-   ');
  // }, 500);

  // setTimeout(() => {
  //   // Need to escape the backslash since it's a special character.
  //   process.stdout.write('\r\\   '); 
  // }, 700);

  // setTimeout(() => {
  //   process.stdout.write('\r|   ');
  // }, 900);

  // setTimeout(() => {
  //   process.stdout.write('\r/   ');
  // }, 1100);

  // setTimeout(() => {
  //   process.stdout.write('\r-   ');
  // }, 1300);

  // setTimeout(() => {
  //   // Need to escape the backslash since it's a special character.
  //   process.stdout.write('\r\\   '); 
  // }, 1500);
// };

spinner2();