// Import necessary modules and classes
import {welcomeMsg,line} from './welcome.js';
import { startAuthentication } from './login_auth.js';

// Define the login function
// async function login() {
//   let exit = false;
//   let portalRole = '';

//   while (!exit) {
//     const { role } = await inquirer.prompt([
//       {
//         name: 'role',
//         type: 'list',
//         message: 'Login as:',
//         choices: ['Admin', 'Student', 'Faculty', 'Exit'],
//       },
//     ]);

//     if (role === 'Exit') {
//       exit = true;
//     } else {
//       if (role.toLowerCase() === 'admin') {
//         // Handle admin login and actions here
//         portalRole = 'Admin';
        
//        await AdminDashboard.mainMenu(portalRole);
//       } 
//       else if (role.toLowerCase() === 'student') {
//         // Handle student login and actions here
//         portalRole = 'Student';
//         await Student.studentDashboard(portalRole);
//       } else if (role.toLowerCase() === 'faculty') {
//         // Handle faculty login and actions here
//         portalRole = 'Faculty';
//         Faculty.facultyDashboard(portalRole);
//       }
//     }
//   }
// }

// Call the login function to start the authentication process
//console.log('\t\tWelcome to the Student Management System\n');
//login();
console.log(line);
console.log(welcomeMsg);
console.log(line);

startAuthentication();