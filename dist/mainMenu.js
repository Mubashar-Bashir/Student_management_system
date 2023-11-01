import inquirer from 'inquirer';
import chalk from 'chalk';
const menuOptions = [
    'Add Course',
    'Add Faculty',
    'View Enrolled Students',
    'View Course List',
    'View Faculty List',
    'Send Notifications',
    'Exit',
];
async function mainMenu() {
    console.log(chalk.yellow('\t\tWelcome to Student Management System'));
    let portalRole = '';
    const { role } = await inquirer.prompt({
        type: 'list',
        name: 'role',
        message: 'Login as:',
        choices: ['Admin', 'Student', 'Faculty', 'Exit'],
    });
    if (role === 'Exit') {
        process.exit();
    }
    else {
        portalRole = role;
    }
    while (true) {
        console.log(chalk.blue(`\t\tWelcome to the ${portalRole} Portal`));
        const { choice } = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: `${portalRole} can:`,
            choices: menuOptions,
        });
        switch (choice) {
            case 'Add Course':
                // Call a function to handle adding a course
                break;
            case 'Add Faculty':
                // Call a function to handle adding a faculty
                break;
            case 'View Enrolled Students':
                // Call a function to view enrolled students
                break;
            case 'View Course List':
                // Call a function to view the list of courses
                break;
            case 'View Faculty List':
                // Call a function to view the list of faculty
                break;
            case 'Send Notifications':
                // Call a function to send notifications
                break;
            case 'Exit':
                process.exit();
        }
    }
}
mainMenu();
