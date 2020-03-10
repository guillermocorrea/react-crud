const baseUrl = 'http://localhost:8080/api/employee';

class EmployeeService {
  async getAll() {
    return await fetch(baseUrl)
      .then(res => res.json())
      .then(res => res.data);
  }

  async add(employee) {
    return await fetch(baseUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(employee)
    });
  }

  async update(employee) {
    return await fetch(baseUrl + `/${employee.id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(employee)
    });
  }

  async getById(id) {
    return await fetch(baseUrl + `/${id}`)
      .then(res => res.json())
      .then(res => res.data);
  }
}

export default new EmployeeService();
