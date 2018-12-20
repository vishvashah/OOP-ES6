class A{
    constructor(num,name){
          this._num=num;
          this.name=name;
        //console.log('hello');
    }
    get num()
    {
        console.log('get id');
        return this._num+ 'TEMPORARY';
    }
    set num(value)
    {
        this._num = value;
    }
    fly()
    {
        console.log('drone'+ this.num + 'flying');
    }
    static getCompany()
    {
        console.log('in the company');
    }
}
//a.maxheight = 2000;
//class B extends A{
  //  constructor(num){
    //    super(num);
        //console.log('hi');
    //}

//}
//class C extends A{

//}
let a= new A('123', 'vishva');
a.num='4158';
console.log(a.num);
a.fly();
A.getCompany();

//a.getCompany();
//console.log(a.maxheight);