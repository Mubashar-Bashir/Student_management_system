import inquirer from 'inquirer';
import Adm_dash_obj from './admin.js';
import { std_obj } from './student.js';
import { faculty_obj } from './faculty.js';
export async function startAuthentication() {
    let exit = false;
    while (!exit) {
        const { role } = await inquirer.prompt([
            {
                name: 'role',
                type: 'list',
                message: 'Select Role to Login as:',
                choices: ['Admin', 'Student', 'Faculty', 'Exit'],
            },
        ]);
        if (role === 'Exit') {
            exit = true;
            process.exit();
        }
        else {
            let portalRole = '';
            if (role.toLowerCase() === 'admin') {
                portalRole = 'Admin';
                await Adm_dash_obj.mainMenu(portalRole);
            }
            else if (role.toLowerCase() === 'student') {
                // Handle student login and actions here
                portalRole = 'Student';
                await std_obj.mainMenue(portalRole);
                //await Student.studentDashboard(portalRole);
            }
            else if (role.toLowerCase() === 'faculty') {
                // Handle faculty login and actions here
                portalRole = 'Faculty';
                await faculty_obj.facultyDashboard(portalRole);
            }
        }
    }
}
