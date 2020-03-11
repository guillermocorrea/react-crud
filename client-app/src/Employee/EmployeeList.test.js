import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeeList from './EmployeeList';
import EmployeeServiceMock from '../services/employee';
import { employeesMockData } from '../services/employee.test';

afterEach(cleanup);

describe('', () => {
  beforeEach(() => {
    EmployeeServiceMock.getAll = jest
      .fn()
      .mockResolvedValueOnce(employeesMockData);
  });

  it('should render', async () => {
    EmployeeServiceMock.getAll.mockResolvedValueOnce([...employeesMockData]);
    const { getByTestId } = render(
      <BrowserRouter>
        <EmployeeList />
      </BrowserRouter>
    );
    expect(getByTestId('loading-spinner')).toBeVisible();
    const tableNode = await waitForElement(() => getByTestId('data-table'));
    expect(EmployeeServiceMock.getAll).toHaveBeenCalledTimes(1);
    expect(tableNode.querySelectorAll('tbody > tr').length).toBe(employeesMockData.length);
  });
});
