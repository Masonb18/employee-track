const inquirer= require('inquirer');

const PORT= process.env.PORT || 3001;
const app = inquirer();

inquirer
.prompt([
    {
        type: 'list',
        name: 'action',
        message: 'Please select what you want to do',
        choices:[
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit',
        ]
    }
])

.then(((answers) => {
    switch (answers.action) {
        case 'View all departments':
            viewALLDepartments();
        break;
        case 'View all roles':
            viewAllRoles();
        break;
        case 'View all employees':
            viewAllEmployees();
        break;
        case 'Add a department':
            addDepartment();
        break;
        case 'Add a role':
            addRole();
        break;
        case 'Add an employee':
            addEmployee();
        break;
        case 'Update an employee role':
            updateEmployeeRoll();
        break;
    }
})
)

function viewAllRoles(){
    
}


app.listen(PORT, () => {
    console.log('Server is running on port 3001');
  });

