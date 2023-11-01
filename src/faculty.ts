import chalk, { foregroundColorNames } from "chalk";
import inquirer from "inquirer";
import { Course, course_obj } from "./course.js";
import Adm_dash_obj from "./admin.js";

  class Faculty {
    
    public async  addNewFaculty() {
    console.log(chalk.bgYellow.red('Add a New Faculty Member\n'));
    
      const facultyDetails = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter Faculty Member Name:',
        },
        {
          type: 'input',
          name: 'specialization',
          message: 'Enter Specialization:',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter Email Address:',
        },
        {
          type: 'input',
          name: 'contact',
          message: 'Enter Contact Number:',
        },
        {
          type: 'input',
          name: 'address',
          message: 'Enter Address:',
        },
      ]);
    
      // Create a new Faculty object
      const newFaculty = new Faculty(
        facultyDetails.name,
        facultyDetails.specialization,
        facultyDetails.email,
        facultyDetails.contact,
        facultyDetails.address
      );
    
      // Add the faculty member to the faculty list
      this.addFaculty(newFaculty);
    
      console.log(chalk.blue(`Faculty Member "${newFaculty.name}" added successfully in Faculty List.\n`));
    }
    
    // Your other class properties and methods
  
    // public findFacultyByName(facultyName: string): string | undefined {
    //   return this.facultyList.find(faculty => faculty.name === facultyName);
    // }
  
    
    facultyID: number;
    name: string;
    specialization: string;
    email: string;
    contact: string;
    address: string;
    notification:string[] | undefined;
  
    constructor(
      name: string,
      specialization: string,
      email: string,
      contact: string,
      address: string
    ) {
      this.facultyID = this.generateFacultyID();
      this.name = name;
      this.specialization = specialization;
      this.email = email;
      this.contact = contact;
      this.address = address;
    }
  
    private  lastFacultyID: number = 2000;
  
    private  generateFacultyID() {
      return ++this.lastFacultyID;
    }
    // private async getNotifications() {
    //   const notifications = await Adm_dash_obj.sendNotifications();
    //   if (notifications && notifications.length > 0) {
    //     this.notifications.push(...notifications);
    //   }
    // }
    
    private addFaculty(faculty: Faculty) {
      this.facultyList.push(faculty);
    }
  
    public facultyList: Faculty[] = [];
  
    public getFacultyList(): Faculty[] {
      return this.facultyList;
    }
  
  async facultyDashboard(portalRole: string) {
    console.clear();
    console.log(chalk.bold.green(`Welcome to the Faculty Dashboard, ${portalRole}!\n`));

    const choices = [
      { name: 'View Courses I Teach', value: 'viewCourses' },
      { name: 'Grade Student Assignments', value: 'gradeAssignments' },
      { name: 'View Notifications', value: 'viewNotifications' },
      { name: 'Exit', value: 'exit' },
    ];

    while (true) {
      const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Please select an option:',
        choices,
      });

      switch (action) 
      {
        case 'viewCourses':
  console.log('You selected "View Courses I Teach".');
  const courseList: Course[] = course_obj.availableCourses.filter((course) => course.facultyName === this.name);

  if (courseList.length === 0) {
    console.log('You are not currently teaching any courses.');
  } else {
    console.log('Courses Taught by You:\n');
    courseList.forEach((course) => {
      console.log(`Course Code: ${course.courseCode}`);
      console.log(`Title: ${course.title}`);
      console.log(`Description: ${course.description}`);
      console.log('----------------------------------');
    });
  }
  break;


        case 'gradeAssignments':
          console.log('You selected "Grade Student Assignments".');
          // Implement code for grading student assignments.
          break;

        case 'ViewNotifications':
          console.log('You selected "View Notifications".');
          // Implement code for sending notifications to students.
          break;

        case 'exit':
          console.log(chalk.bold.yellow('Exiting Faculty Dashboard. Goodbye!'));
          return;
      }
    }
  }
}
const faculty_obj = new Faculty(
  "John Doe",        // name
  "Computer Science", // specialization
  "johndoe@example.com", // email
  "123-456-7890",   // contact
  "123 University Ave" // address
);
//faculty_obj.facultyDashboard()
  export {Faculty,faculty_obj};
  