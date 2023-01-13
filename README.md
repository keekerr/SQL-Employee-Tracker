# SQL-Employee-Tracker

## Table of Contents

* [Description](#description)
* [Code Examples](#code-examples)
* [Important links](#important-links)
* [Languages Used](#languages-used)
* [Questions](#questions)

## Description

The purpose of this project was to create an Employee Tracker that fit the following Criteria: 

 - When the application is started, the user is presented with the option to view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.
 - When the user selected which data they would like to view, they are presented with a formmated table displaying that informaiton.
 - When the user selected the option to add data or update data, they are presented with the correct prompts to indicate the type of data needed.


## Code Examples
Example of Code used to create schema file:

```js
CREATE TABLE department (
    -- SOURCE :https://www.geeksforgeeks.org/sql-auto-increment/
  id INT PRIMARY KEY AUTO_INCREMENT,
  broad_dept VARCHAR(50) NOT NULL
);

CREATE TABLE job (
      -- SOURCE :https://www.geeksforgeeks.org/sql-auto-increment/
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT
);
```

Example of Code used to create server file:
```js
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
```

## Important Links
[GitHub Repository](https://github.com/keekerr/SQL-Employee-Tracker)

[Deployed Application](https://github.com/keekerr/SQL-Employee-Tracker/deployments/activity_log?environment=employee-tracker-manufacturing)


## Languages Used

![HTML Badge](https://th.bing.com/th/id/OIP._Ik4_2kbAUkc8WfirxFSLwHaHa?w=100&h=120&c=7&r=0&o=5&pid=1.7)
![CSS Badge](https://th.bing.com/th/id/OIP.bVCzXbidOak-TcOhmW0QTAHaHa?pid=ImgDet&w=100&h=120&c=7)
![JavaScript Badge](https://github.com/keekerr/SQL-Employee-Tracker/blob/main/Java%20Script%20Badge%20resized.png?raw=true)
![SQL](https://github.com/keekerr/SQL-Employee-Tracker/blob/main/SQL%20Icon%20Resized.jpg?raw=true)
## Questions

If you have any questions regarding this project, please feel free to contact me at this email: keeley.s.sprouse@gmail.com

Other examples of projects I have worked on can be viewed on Github via this link: [keekerr](https://github.com/keekerr)