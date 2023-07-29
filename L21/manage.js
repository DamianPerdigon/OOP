// Base class for all employees
class Employee {
    constructor(name, age, salesTarget) {
      this.name = name;
      this.age = age;
      this.salesTarget = salesTarget;
    }

  }
  
  // Class for salaried employees
  class SalariedEmployee extends Employee {
    constructor(name, age, salesTarget, basicSalary) {
      super(name, age, salesTarget);
      this.basicSalary = basicSalary;
    }
  
    calculatePayout() {
      // Calculate the payout for salaried employees
      let payout = this.basicSalary;
      if (this.salesTargetExceeded()) {
        payout += this.basicSalary * 0.1; // 10% bonus if sales target is exceeded
      }
      return payout;
    }
  
    salesTargetExceeded() {
  
      if (this.name === "Damian Perdigon") {
        return true;
      }
      return false;
    }
  }
  
  // Class for hourly employees
  class HourlyEmployee extends Employee {
    constructor(name, age, salesTarget, hourlyRate, hoursLogged) {
      super(name, age, salesTarget);
      this.hourlyRate = hourlyRate;
      this.hoursLogged = hoursLogged;
    }
  
    calculatePayout() {
      // Calculate the payout for hourly employees
      let payout = this.hourlyRate * this.hoursLogged;
      if (this.salesTargetExceeded()) {
        payout += payout * 0.5; // 50% bonus if sales target is exceeded
      }
      return payout;
    }
  
    salesTargetExceeded() {
      //target exceeded
      return true;
    }
  }
  
  // Class for hybrid employees, extends the Employee class
  class HybridEmployee extends Employee {
    constructor(name, age, salesTarget, basicSalary, hourlyRate, hoursLogged) {
      super(name, age, salesTarget);
      this.basicSalary = basicSalary;
      this.hourlyRate = hourlyRate;
      this.hoursLogged = hoursLogged;
    }
  
    calculatePayout() {
      // Calculate the payout for hybrid employees
      let payout = this.basicSalary + this.hourlyRate * this.hoursLogged;
      if (this.salesTargetExceeded()) {
        payout += this.hourlyRate * this.hoursLogged * 0.2; // 20% bonus if sales target is exceeded
      }
      return payout;
    }
  
    salesTargetExceeded() { //target exceeded
      if (this.name === "Roberto Gómez") {
        return true;
      }
      return false;
    }
  }
  
  // Creating instances of each kind of employee
  const salariedEmployee1 = new SalariedEmployee("Damian Perdigon", 30, 10000, 4500);
  const salariedEmployee2 = new SalariedEmployee("María Rodríguez", 25, 8000, 3800);
  
  const hourlyEmployee1 = new HourlyEmployee("Carlos López", 22, 12000, 18, 160);
  const hourlyEmployee2 = new HourlyEmployee("Laura Hernández", 28, 15000, 22, 200);
  
  const hybridEmployee1 = new HybridEmployee("Roberto Gómez", 35, 9000, 2800, 14, 180);
  const hybridEmployee2 = new HybridEmployee("Ana Torres", 29, 11000, 3200, 17, 220);
  
  // Calculate and display their payouts
  const employeesList = [
    salariedEmployee1,
    salariedEmployee2,
    hourlyEmployee1,
    hourlyEmployee2,
    hybridEmployee1,
    hybridEmployee2,
  ];
  
  employeesList.forEach((employee) => {
    const payout = employee.calculatePayout();
    console.log(
      `${employee.name} - ${employee.constructor.name}: £${payout.toFixed(2)}`
    );
  });
  