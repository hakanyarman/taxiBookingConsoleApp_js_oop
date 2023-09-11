taxi = {
    driving: false,
    location : '',
    startDriving(){
        this.driving = true
    },
    stopDriving(){
        this.driving = false
    },
    navigateTo(destination){
        this.startDriving()
        this.location = destination
        this.stopDriving()
    }
}

passanger = {
    name: 'Hakan',
    location: 'Istanbul',
    destination: 'Ankara',
    book(taxi){
        taxi.navigateTo(this.location) 
        taxi.navigateTo(this.destination)
    },
    enterTaxi(){

    },
    leaveTaxi(){

    },

}