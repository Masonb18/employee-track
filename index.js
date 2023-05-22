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
            'view all departments',
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


app.listen(PORT, () => {
    console.log('Server is running on port 3001');
  });

