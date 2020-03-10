const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const EmployeeStore = require('./store/employee-store');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// ROUTES
const router = express.Router();
const store = new EmployeeStore();

// Middleware
router.use((req, res, next) => {
  console.log('request', req.body, req.params);
  next();
});

router
  .route('/employee')
  .get((req, res) => {
    res.json({ data: store.getAll() });
  })
  .post((req, res) => {
    res.json({ data: store.add(req.body) });
  });

router
  .route('/employee/:id')
  .get((req, res) => {
    const emp = store.getById(parseInt(req.params.id));
    if (!emp) {
      return res.sendStatus(404);
    }
    res.json({ data: emp });
  })
  .put((req, res) => {
      debugger
    const emp = { ...req.body, id: parseInt(req.params.id) };
    res.json(store.edit(emp));
  })
  .delete((req, res) => {
    res.json(store.delete(parseInt(req.params.id)));
  });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
