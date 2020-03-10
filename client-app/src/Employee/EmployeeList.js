import React, { useState, useEffect, Fragment } from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import EmployeeService from '../services/employee';

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await EmployeeService.getAll();
      setEmployees(data);
    }
    fetchData();
  }, []);
  return (
    <Fragment>
      <h2>Employees</h2>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map(employee => (
            <Table.Row key={employee.id}>
              <Table.Cell>{employee.id}</Table.Cell>
              <Table.Cell>{employee.firstName}</Table.Cell>
              <Table.Cell>{employee.lastName}</Table.Cell>
              <Table.Cell>{employee.email}</Table.Cell>
              <Table.Cell>{employee.gender}</Table.Cell>
              <Table.Cell>
              <Link to={`/edit/${employee.id}`}>Edit</Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default ListEmployee;

// {
//   id: 20,
//   firstName: 'Sancho',
//   lastName: 'Dunham',
//   email: 'sdunhamj@plala.or.jp',
//   gender: 'Male'
// }
