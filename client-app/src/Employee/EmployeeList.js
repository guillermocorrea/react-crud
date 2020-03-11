import React, { useState, useEffect, Fragment } from 'react';
import { Table, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Loading from '../layout/Loading';
import EmployeeService from '../services/employee';

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await EmployeeService.getAll();
      setEmployees(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleDelete = async id => {
    await EmployeeService.delete(id);
    setShowMessage(true);
    setEmployees(employees.filter(e => e.id !== id));
  };

  const handleDissmis = () => {
    setShowMessage(false);
  };

  return (
    <Fragment>
      {showMessage && (
        <Message
          color='green'
          content='Employee deleted!'
          onDismiss={handleDissmis}
        />
      )}
      <h2>Employees</h2>
      {isLoading ? (
        <Loading inverted={true} />
      ) : (
        <Table celled data-testid="data-table">
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
                  <Link
                    to={`/edit/${employee.id}`}
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </Link>
                  <Button negative onClick={() => handleDelete(employee.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </Fragment>
  );
};

export default ListEmployee;
