class company_employee{
    constructor(name,age,salary){
        this.empname=name;
        this.empage=age;
        this.empsalary=salary;
        console.log(`The employee details are: 
        Name ${this.empname}
        Age ${this.empage}
        Salary ${this.empsalary}`);
        
    }

    age(){
        console.log(`The Age of ${this.empname} is ${this.empage}`)
    }
}

class manager extends company_employee{
info(){
    super.age();
    let totalsalary=this.empsalary + 1000
    console.log(`The total salary of manager is: ${totalsalary}`)


}
}
var a=new manager("Laraib",35,9000);
a.info();