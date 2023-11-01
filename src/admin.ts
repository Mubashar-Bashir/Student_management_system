 
import inquirer from 'inquirer';
import chalk from 'chalk'; // Import chalk for styling
import {std_obj,Student} from './student.js';
import {Course,course_obj} from './course.js';
import {faculty_obj,Faculty} from './faculty.js';
import { exit } from 'process';
import {line,welcomeMsg} from './welcome.js'

class AdminDashboard {
  // viewNotifications() {
  //   if ()
  // }
  private  students: Student[] = [];
  private  predefinedCourses: Course[] = [];
  private  faculty_list: Faculty[] = [];
  private notification:[]=[];
  // Main menu for the Admin
  async mainMenu(portal_role: string) {
    //----------------------------------------------------
    console.clear(); // Clear the console for a clean display
    console.log(line);
    console.log(welcomeMsg);
    console.log(line);
    console.log(`\t\t\t ${chalk.blue(portal_role)}`);
    //--------------------------------------------------
    let condition:boolean=true;
    while (condition=true) {
    const { choice } = await inquirer.prompt({
      type: 'list',
      name: 'choice',
      message: 'Admin can:',
      choices: [
        'Add Faculty',
        'Add Courses',
        'View List of Courses',
        'View Faculty List',
        'Send Notifications',
        'Exit / Logout',
      ],
    });

    switch (choice) {
      case 'Add Faculty':
       await this.addFaculty();  // Done 
        break;
      case 'Add Courses':
        await this.addCourses();
        break;
      case 'View List of Courses':
        await this.viewListofCourses();
        break;
      case 'View Faculty List':
        await   this.viewFacultyList();
        break;
      case 'Send Notifications':
        await this.sendNotifications();
        break;
      case 'Exit / Logout':
        condition=true;
        // Handle exit or logout
        return;
    }
  }
  }
  // Method to add a new faculty
   async addFaculty() { //Done
    await faculty_obj.addNewFaculty()
  }

  // Method to add new courses
  async addCourses() {  //Done
    
   await course_obj.addNewCourse(); //Done
    // You can use inquirer to gather course details and add them to the predefinedCourses list
    // Example: Ask for course code, title, description, credit hours, fee, and add to predefinedCourses
  }

  // Method to view the list of available courses
  async  viewListofCourses() {
    if(course_obj.availableCourses.length>0)
    {
      console.log("Available Course List:")
      course_obj.availableCourses.forEach(course => {
        this.predefinedCourses.push(course);
      });
      console.log(this.predefinedCourses);
    }
    else
    {
      console.log('Add courses to The List please.');
      console.log('No courses available.');
    }
  }

  // Method to view the list of faculty members
   async viewFacultyList() {
    if (faculty_obj.facultyList.length>0) 
    {
      console.log('List of Faculty Members:');
    
      faculty_obj.facultyList.forEach(member => {
        this.faculty_list.push(member);
      });
      //this.faculty_list=faculty_obj.getFacultyList();
      console.log(this.faculty_list)
    } 
    else
    {
      
      console.log(chalk.bgRed.yellowBright('\t\tPlease Add faculty members.'));
      console.log(chalk.bgRed.yellowBright('\t\tNo faculty members available.'));
    }
  }

  // Method to send notifications
  async sendNotifications() {
    console.log(chalk.bgWhite.greenBright('\nSending Notifications\n'));

    // Use Inquirer to select recipients
    const recipientChoices = this.students.map((student) => ({
      name: student.getFullName(),
      value: student, // You can store the selected student object
    }));

    const selectedRecipients = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'recipients',
        message: 'Select recipients:',
        choices: recipientChoices,
      },
    ]);

    if (selectedRecipients.recipients.length === 0) {
      console.log('No recipients selected. Exiting...');
      return;
    }

    // Compose your notification message
    const { notificationMessage } = await inquirer.prompt([
      {
        type: 'input',
        name: 'notificationMessage',
        message: 'Enter the notification message:',
      },
    ]);

    interface Recipient {
      name: string;
      // Add other properties if needed
    }
    
    // Then, use the defined type/interface for 'recipient'
    selectedRecipients.recipients.forEach((recipient: Recipient) => {
      console.log(`Sending notification to ${recipient.name}`);
      // You can access 'recipient.name' with type safety now
    });

    console.log('Notifications sent successfully.');
  }
}

const Adm_dash_obj=new AdminDashboard();
// Adm_dash_obj.viewNotifications();
//Adm_dash_obj.mainMenu(portal_role:string)
// Export the AdminDashboard class
export default Adm_dash_obj;
