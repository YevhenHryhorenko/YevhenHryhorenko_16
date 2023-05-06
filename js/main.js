class Human {
  constructor(humanName, humanAge) {
    this.humanName = humanName
    this.humanAge = humanAge
  }

  getHumanInfo() {
    console.log(`
    Name: ${this.humanName}\n
    Age: ${this.humanAge}\n\n`)
  }
}

class Car {
  constructor(carBrand, carModel, carManufactureYear, carLicensePlate) {
    this.carBrand = carBrand
    this.carModel = carModel
    this.carManufactureYear = carManufactureYear
    this.carLicensePlate = carLicensePlate
  }

  createCarOwner(human) {
    if (human.humanAge >= 18) {
      this.carOwner = human
      return true
    }

    console.log(`
    To get a car, ${human.humanName} must be 18 years old
    `)
    return false
  }

  getCarInfo() {
    console.log(`
    Car brand: ${this.carBrand}\n
    Car model: ${this.carModel}\n
    Year of Manufacture: ${this.carManufactureYear}\n
    License plate of car: ${this.carLicensePlate}
    `)

    this.carOwner.getHumanInfo()
  }
}

let Marko = new Human('Marko', 18)
let Honda = new Car('Honda', 'Civic', 2015, '9826')
Honda.createCarOwner(Marko) ? Honda.getCarInfo() : null

let Vaselyna = new Human('Vaselyna', 16)
let Renault = new Car('Renault', 'Clio', 2012, '0000')
Renault.createCarOwner(Vaselyna) ? Renault.getCarInfo() : null

Yevhen = new Human('Yevhen', 19)
let Toyota = new Car('Toyota', 'Camry', 2016, '0904')
Toyota.createCarOwner(Yevhen) ? Toyota.getCarInfo() : null

let Mykyta = new Human('Mykyta', 19)
let BMW = new Car('BMW', 'M5', 2015, '9999')
BMW.createCarOwner(Mykyta) ? BMW.getCarInfo() : null
