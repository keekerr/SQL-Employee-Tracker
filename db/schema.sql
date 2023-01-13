DROP DATABASE IF EXISTS HR_db;
CREATE DATABASE HR_db;
USE HR_db;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS job;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    -- SOURCE :https://www.geeksforgeeks.org/sql-auto-increment/
  id INT PRIMARY KEY AUTO_INCREMENT,
  dept_name VARCHAR(50) NOT NULL
);

CREATE TABLE job (
      -- SOURCE :https://www.geeksforgeeks.org/sql-auto-increment/
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT
);

CREATE TABLE employee (
      -- SOURCE :https://www.geeksforgeeks.org/sql-auto-increment/
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  job_id INT,
  manager_id INT
);