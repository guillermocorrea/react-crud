import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import './App.css';
import EmployeeForm from './Employee/EmployeeForm';
import ListEmployee from './Employee/EmployeeList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item name='home'>
            <Link to='/'>Employees List</Link>
          </Menu.Item>

          <Menu.Item name='create'>
            <Link to='/create'>Create</Link>
          </Menu.Item>
        </Container>
      </Menu>
      <Container style={{ marginTop: '7em', marginBottom: '7em' }}>
        <Switch>
          <Route path='/create'>
            <EmployeeForm />
          </Route>
          <Route path='/edit/:id'>
            <EmployeeForm />
          </Route>
          <Route exact path='/'>
            <ListEmployee />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
