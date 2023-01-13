const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3000,
  user: 'root',
  password: '',
  database: 'HR_db',
});

connection.connect(err => {
  if (err) throw err;
  console.log("Metals Manufactoring HR System");
  startMenu();
});

// Source: https://stackoverflow.com/questions/72941835/employee-tracker-setting-table-relationship-using-mysql-and-java-spring-boot
const startMenu = () => {
  inquirer.prompt({
      message: 'Select Actions From List',
      name: 'menu',
      type: 'list',
      choices: [ 
        'View all departments',
        'View all jobs',
        'View all employees',
        'Add a department',
        'Add a job',
        'Add an employee',
        'Update employee job',
        'Exit',
      ],
    })
    .then(response => {
        switch (response.menu) {
        case 'View all departments':
          viewDepartment();
          break;
        case 'View all jobs':
          viewJobs();
          break;
        case 'View all employees':
          viewEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a job':
          addJob();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update employee job':
          updateEmployee();
          break;
        case "Exit":
          connection.end();
          break;
        default:
          connection.end();
      }
    });
};

const viewDepartment = () => {
  connection.query('SELECT * FROM department', function (err, res) {
    if (err) throw err;
    console.table(res);
    startMenu();
  });
};

const viewJobs = () => {
  connection.query('SELECT * FROM job', function (err, res) {
    if (err) throw err;
    console.table(res);
    startMenu();
  });
};

const viewEmployees = () => {
  connection.query(
    'SELECT employee.id, first_name, last_name, title, salary, broad_dept, manager_id FROM ((department JOIN job ON department.id = job.department_id) JOIN employee ON job.id = employee.job_id);',
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startMenu();
    }
  );
};

const addDepartment = () => {
  inquirer.prompt([
      {
        name: 'department',
        type: 'input',
        message: 'Enter Broad Department Name',
      },
    ])
    .then(answer => {
      connection.query(
        'INSERT INTO department (broad_dept) VALUES (?)',
        [answer.department],
        function (err, res) {
          if (err) throw err;
          console.log('Successfully Added!');
          startMenu();
        }
      );
    });
};

const addJob = () => {
  inquirer.prompt([
      {
        name: 'jobTitle',
        type: 'input',
        message: 'Enter job title?',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Enter Salary for this Position',
      },
      {
        name: 'deptId',
        type: 'input',
        message: 'Enter the Department ID for this Position',
      },
    ])
    .then(answer => {
      connection.query(
        'INSERT INTO job (title, salary, department_id) VALUES (?, ?, ?)',
        [answer.jobTitle, answer.salary, answer.deptId],
        function (err, res) {
          if (err) throw err;
          console.log('Successfully Added');
          startMenu();
        }
      );
    });
};

const addEmployee = () => {
  inquirer.prompt([
      {
        name: 'nameFirst',
        type: 'input',
        message: "First Name",
      },
      {
        name: 'nameLast',
        type: 'input',
        message: "Last Name",
      },
      {
        name: 'jobId',
        type: 'input',
        message: "Job ID#",
      },
      {
        name: 'managerId',
        type: 'input',
        message: 'Manager ID#',
      },
    ])
    .then(answer => {
      connection.query(
        'INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES (?, ?, ?, ?)',
        [answer.nameFirst, answer.nameLast, answer.jobId, answer.managerId],
        function (err, res) {
          if (err) throw err;
          console.log('Successfully Added');
          startMenu();
        }
      );
    });
};

const updateEmployee = () => {
  inquirer
    .prompt([
      {
        name: 'id',
        type: 'input',
        message: 'Enter employee ID#',
      },
      {
        name: 'jobId',
        type: 'input',
        message: 'Enter new job ID#',
      },
    ])
    .then(answer => {
      connection.query(
        'UPDATE employee SET job_id=? WHERE id=?',
        [answer.jobId, answer.id],
        function (err, res) {
          if (err) throw err;
          console.log('Successfully Updated');
          startMenu();
        }
      );
    });
};