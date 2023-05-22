const inquirer= require('inquirer');

const PORT= process.env.PORT || 3001;
const app = inquirer();

inquirer
.prompt([
    {
        type: 'list',
    }
])


app.listen(PORT, () => {
    console.log('Server is running on port 3001');
  });

