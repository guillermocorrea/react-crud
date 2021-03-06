import EmployeeService from './employee';

export const employeesMockData = [
  {
    id: 1,
    firstName: 'Aretha',
    lastName: 'Rigolle',
    email: 'arigolle0@bloglines.com',
    gender: 'Female'
  },
  {
    id: 2,
    firstName: 'Lisbeth',
    lastName: 'Askaw',
    email: 'laskaw1@domainmarket.com',
    gender: 'Female'
  },
  {
    id: 3,
    firstName: 'Vasily',
    lastName: 'Maffei',
    email: 'vmaffei2@whitehouse.gov',
    gender: 'Male'
  },
  {
    id: 4,
    firstName: 'Putnem',
    lastName: 'Davydenko',
    email: 'pdavydenko3@goo.ne.jp',
    gender: 'Male'
  },
  {
    id: 5,
    firstName: 'Barrie',
    lastName: 'Breach',
    email: 'bbreach4@hubpages.com',
    gender: 'Male'
  },
  {
    id: 6,
    firstName: 'Read',
    lastName: 'Enterle',
    email: 'renterle5@arizona.edu',
    gender: 'Male'
  },
  {
    id: 7,
    firstName: 'Syd',
    lastName: 'Musterd',
    email: 'smusterd6@plala.or.jp',
    gender: 'Male'
  },
  {
    id: 8,
    firstName: 'Marjorie',
    lastName: 'Beveredge',
    email: 'mbeveredge7@instagram.com',
    gender: 'Female'
  },
  {
    id: 9,
    firstName: 'Winthrop',
    lastName: 'Itzhaiek',
    email: 'witzhaiek8@samsung.com',
    gender: 'Male'
  },
  {
    id: 10,
    firstName: 'Fay',
    lastName: 'Duckerin',
    email: 'fduckerin9@foxnews.com',
    gender: 'Female'
  },
  {
    id: 11,
    firstName: 'Aurelea',
    lastName: 'McIan',
    email: 'amciana@scribd.com',
    gender: 'Female'
  },
  {
    id: 12,
    firstName: 'Dave',
    lastName: 'Christophersen',
    email: 'dchristophersenb@g.co',
    gender: 'Male'
  },
  {
    id: 13,
    firstName: 'Julee',
    lastName: 'Phoebe',
    email: 'jphoebec@posterous.com',
    gender: 'Female'
  },
  {
    id: 14,
    firstName: 'Zaneta',
    lastName: 'Harmar',
    email: 'zharmard@ox.ac.uk',
    gender: 'Female'
  },
  {
    id: 15,
    firstName: 'Giraud',
    lastName: "O'Neill",
    email: 'goneille@yellowbook.com',
    gender: 'Male'
  },
  {
    id: 16,
    firstName: 'Richardo',
    lastName: 'Saurat',
    email: 'rsauratf@gov.uk',
    gender: 'Male'
  },
  {
    id: 17,
    firstName: 'Roberta',
    lastName: 'Clara',
    email: 'rclarag@ft.com',
    gender: 'Female'
  },
  {
    id: 18,
    firstName: 'Rubetta',
    lastName: 'Tumility',
    email: 'rtumilityh@wikipedia.org',
    gender: 'Female'
  },
  {
    id: 19,
    firstName: 'Tucky',
    lastName: 'Towndrow',
    email: 'ttowndrowi@yahoo.co.jp',
    gender: 'Male'
  },
  {
    id: 20,
    firstName: 'Sancho',
    lastName: 'Dunham',
    email: 'sdunhamj@plala.or.jp',
    gender: 'Male'
  }
];

const mockFetch = response => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve({ data: response }) })
  );
};

it('should get all the employees', async () => {
  mockFetch(employeesMockData);
  const result = await EmployeeService.getAll();
  expect(result).toEqual(employeesMockData);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it('should add a new employee', async () => {
  mockFetch({});
  const employee = { name: 'John' };
  await EmployeeService.add(employee);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(expect.any(String), {
    headers: expect.any(Object),
    method: 'POST',
    body: JSON.stringify(employee)
  });
});

it('should update an employee', async () => {
  mockFetch({});
  const employee = { name: 'John' };
  await EmployeeService.update(employee);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(expect.any(String), {
    headers: expect.any(Object),
    method: 'PUT',
    body: JSON.stringify(employee)
  });
});

it('should delete an employee', async () => {
  mockFetch({});
  await EmployeeService.delete(1);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(expect.any(String), {
    headers: expect.any(Object),
    method: 'DELETE'
  });
});

it('should get an employee by id', async () => {
  mockFetch(employeesMockData[0]);
  await EmployeeService.getById(1);
  expect(fetch).toHaveBeenCalledTimes(1);
});
