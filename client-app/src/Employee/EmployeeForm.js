import React, { Fragment, useState, useEffect } from 'react';
import { Segment, Form, Radio, Button, Message } from 'semantic-ui-react';
import EmployeeService from '../services/employee';
import { useParams } from 'react-router-dom';

const emptyEmployee = {
  firstName: '',
  lastName: '',
  email: '',
  gender: ''
};

const EmployeeForm = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(emptyEmployee);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    async function fetchEmployee() {
      const emp = await EmployeeService.getById(id);
      setEmployee(emp);
    }
    if (id) {
      fetchEmployee();
    } else {
      setEmployee(emptyEmployee);
    }
    setShowSuccessMessage(false);
  }, [id]);

  const handleSubmit = async () => {
    if (id) {
      await EmployeeService.update(employee);
    } else {
      await handleCreation();
    }
    
    setShowSuccessMessage(true);
  };

  const handleCreation = async () => {
    await EmployeeService.add(employee);
    setEmployee(emptyEmployee);
  }

  const handleInputChange = (e, { value, name }) => {
    setEmployee({ ...employee, [name]: value });
  };

  const handleDissmis = () => {
    setShowSuccessMessage(false);
  };

  return (
    <Fragment>
      {showSuccessMessage && (
        <Message
          color='green'
          content={id ? 'Employee updated!' : 'Employee created!'}
          onDismiss={handleDissmis}
        ></Message>
      )}

      <h2>{id ? 'Edit' : 'Create'}</h2>
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>First Name</label>
            <Form.Input
              onChange={handleInputChange}
              name='firstName'
              placeholder='First Name'
              required
              value={employee.firstName}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <Form.Input
              onChange={handleInputChange}
              name='lastName'
              placeholder='Last Name'
              required
              value={employee.lastName}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Form.Input
              onChange={handleInputChange}
              name='email'
              type='email'
              placeholder='Email'
              required
              value={employee.email}
            />
          </Form.Field>
          <Form.Field>
            <label>Gender</label>
            <div>
              <Radio
                label='Male'
                value='Male'
                onChange={handleInputChange}
                name='gender'
                checked={employee.gender === 'Male'}
              />
            </div>
            <div>
              <Radio
                label='Female'
                value='Female'
                onChange={handleInputChange}
                name='gender'
                checked={employee.gender === 'Female'}
              />
            </div>
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
        </Form>
      </Segment>
    </Fragment>
  );
};

export default EmployeeForm;
