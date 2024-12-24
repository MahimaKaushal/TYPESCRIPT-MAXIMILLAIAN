const names = ["Mahima", "Mishika"];
const names1: string[] = [];

//Below is generics
const names2: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done ");
  }, 2000);
});
