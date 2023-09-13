class Customer {
    constructor(name, location, destination) {
        this.name = name
        this.location = location
        this.destination = destination
    }
    book(taxi) {
        taxi.navigateTo(this.location)
        this.enterTaxi(taxi)
        taxi.navigateTo(this.destination)
        this.location = taxi.location
        this.destination = ''
        this.leaveTaxi(taxi)
    }
    enterTaxi(taxi) {
        taxi.passanger = this
    }
    leaveTaxi(taxi) {
        taxi.passanger = null
    }
}

class Taxi {
    constructor() {
        this.driving = false
        this.location = ''
        this.passanger = null
    }
    startDriving() {
        this.driving = true
    }
    stopDriving() {
        this.driving = false
    }
    navigateTo(destination) {
        this.startDriving()
        this.location = destination
        this.stopDriving()
    }
}

const yellowTaxi = new Taxi()
const customerEmre = new Customer('Emre', 'Antalya', 'Hatay');
console.log(yellowTaxi);


customerEmre.book(yellowTaxi)

console.log(customerEmre, yellowTaxi)