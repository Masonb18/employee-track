INSERT INTO departments (name) VALUES
('sales'),
('marketing'),
('finances');

INSERT INTO roles (title, salary, department_id) VALUES
('sales manager', 60000.00, 1),
('sales representative', 40000.00, 1),
('marketing manager', 55000.00, 2),
('marketing coordinator', 35000.00, 2),
('finance manager', 70000.00, 2),
('accountant', 45000.00, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('John', 'Smith', 1, NULL),
('Jean', 'Frank', 2, 1),
('Lebron', 'James', 3, 1),
('Michael', 'Jordan', 4, 2), 
('Usain', 'Bolt', 5, 3),
('Mason', 'Bauer', 6, 3); 
