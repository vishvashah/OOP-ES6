class vehicle{
    parts()
    {
        console.log('in vehicle');
    }
    static getCompany()
    {
        console.log('hello');
    }
}
class car extends vehicle{
    parts()
    {   super.parts();
        console.log('in car');
    }
    static getCompany()
    {
        super.getCompany();
        console.log('hiii');
    }
}
let c= new car();
c.parts();
//vehicle.getCompany();
car.getCompany();
