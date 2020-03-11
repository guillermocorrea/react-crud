let employees = require('./data');

class EmployeeStore {
  getAll() {
    return employees;
  }

  getById(id) {
    return employees.find(e => e.id === id);
  }

  add(employee) {
    employee.id = employees.length + 1;
    employees.push(employee);
    return employee;
  }

  edit(employee) {
    const index = employees.findIndex(e => e.id === employee.id);
    if (index === -1) throw 'Employee not found';
    employees[index] = employee;
  }

  delete(id) {
    employees = employees.filter(e => e.id !== id);
  }
}

module.exports = EmployeeStore;
