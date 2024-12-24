function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Max";

  constructor() {
    console.log("Creatnnn ing person object...");
  }
}

@Logger("LOGGING - PERSONw")
class Personw {
  name = "Mabbbbzz";

  constructor() {
    console.log("Creating person object...");
  }
}
