INSERT INTO department (broad_dept)
VALUES 
('Environmental'),
('Production (Melt Shop)'),
('Production (General)')
('Finance')
('IT')
('Safety')
('HR')
('Sales and Commercial')
('Production (Rolling)');


INSERT INTO job (title, salary, department_id)
VALUES 
('HR Administrator', 55000, 8),
('HR Supervisor', 85000, 8),
('Metalurgist', 180000, 21),
('Senior Engineer', 95000, 2),
('Software Developer', 80000, 7),
('Talent Specialist', 65000, 8),
('District Sales Manager', 45000, 18);

INSERT INTO employee (first_name, last_name, job_id, manager_id)
VALUES 
('Andrea', 'Johnson', 1, NULL),
('Lindsay', 'Maxwell', 2, 1),
('Amy', 'Fishlederer', 3, 2),
('Beth', 'Richardson', 4, NULL),
('Rachel', 'DeBoar', 5, NULL),
('Yusef', 'Murphey', 6, 3),
('Susan', 'Hansen', 7, NULL);