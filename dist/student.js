import chalk from "chalk";
import { course_obj } from "./course.js";
import inquirer from "inquirer";
class Student {
    constructor(firstName, lastName, age, cell, email, address) {
        this.balance = 0;
        this.notifications = [];
        this.enrolledCourses = [];
        this.list_courses = [];
        this.selcted_course = [];
        this.studentID = Student.lastStudentID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.cell = cell;
        this.email = email;
        this.address = address;
        this.balance = 0;
        this.student_enrolled = false;
        this.selcted_course = [];
        this.student_status = 'Not Enrolled';
        Student.lastStudentID++;
    }
    //////////////////////////////////
    //                 Main Menue
    //
    //////////////////////////////////
    async mainMenue(portal_role) {
        await this.studentDashboard(portal_role);
    }
    async studentDashboard(portalRole) {
        console.clear();
        console.log(chalk.bold.green(`Welcome to the Student Dashboard, ${portalRole}!\n`));
        const choices = [
            { name: 'My Courses', value: 'myCourses' },
            { name: 'Enrollment', value: 'myEnrollement' },
            { name: 'Available Courses', value: 'availableCourses' },
            { name: 'Notifications', value: 'notifications' },
            { name: 'Open Portal', value: 'openPortal' },
            { name: 'Profile', value: 'profile' },
            { name: 'Payment', value: 'payment' },
            { name: 'Online Lectures', value: 'onlineLectures' },
            { name: 'Textbooks', value: 'textbooks' },
            { name: 'Exams', value: 'exams' },
            { name: 'Announcements', value: 'announcements' },
            { name: 'Exit', value: 'exit' },
        ];
        let condition = true;
        while (condition = true) {
            const { action } = await inquirer.prompt({
                type: 'list',
                name: 'action',
                message: 'Please select an option:',
                choices,
            });
            switch (action) {
                case 'myCourses':
                    // Implement code to display a student's enrolled courses
                    await console.log('My Selected Courses');
                    break;
                case 'myEnrollement':
                    // Fetch all available courses
                    console.log('myEnrollment');
                    const courses = course_obj.availableCourses;
                    if (courses.length > 0) {
                        // Display courses in a table format
                        console.log(`List of Available Courses:\n`);
                        console.log('---------------------------------------------------------');
                        console.log('Course Code       | Course Title           | Course Fee');
                        console.log('---------------------------------------------------------');
                        for (const course of courses) {
                            console.log(`${course.courseCode.padEnd(13)}| ${course.title.padEnd(23)}| ${course.courseFee}`);
                        }
                        console.log('---------------------------------------------------------');
                    }
                    else {
                        console.log('No courses available yet.');
                    }
                    async function enrollCourse(availableCourses) {
                        if (availableCourses.length === 0) {
                            console.log('No courses available for enrollment.');
                            return;
                        }
                        const courseChoices = availableCourses.map((course) => ({
                            name: `${course.title} - ${course.courseCode}`,
                            value: course,
                        }));
                        const { selectedCourse } = await inquirer.prompt({
                            type: 'list',
                            name: 'selectedCourse',
                            message: 'Select a course to enroll in:',
                            choices: courseChoices,
                        });
                        std_obj.selcted_course.push(selectedCourse.title);
                        // Here, you have the selected course in the 'selectedCourse' variable.
                        // You can add this course to the student's enrolledCourses array or perform any other action as needed.
                        //console.log(`Enrolled in course: ${selectedCourse.title}`);
                        // Add the course to the student's enrolledCourses array.
                        //selcted_course.push(selectedCourse.title);
                    }
                    // Usage example:
                    // Call this method with the list of available courses.
                    await enrollCourse(course_obj.availableCourses);
                    await this.getAdmission();
                    // await choose(); // This is where the student can choose the next action.
                    break;
                case 'availableCourses':
                    // Implement code to display available courses for enrollment
                    if (course_obj.availableCourses.length === 0) {
                        console.log('No courses available for enrollment.');
                    }
                    else {
                        console.log('Available Courses for Enrollment:\n');
                        course_obj.availableCourses.forEach((course) => {
                            console.log(`Course Code: ${course.courseCode}`);
                            console.log(`Title: ${course.title}`);
                            console.log(`Description: ${course.description}`);
                            console.log(`Credit Hours: ${course.creditHours}`);
                            console.log(`Course Fee: ${course.courseFee}`);
                            console.log(`Faculty: ${course.facultyName}`);
                            console.log('----------------------------------');
                        });
                    }
                    break;
                case 'notifications':
                    // Implement code to display student notifications
                    if (this.notifications.length === 0) {
                        console.log('You have no notifications.');
                    }
                    else {
                        console.log('Your Notifications:\n');
                        this.notifications.forEach((notification) => {
                            console.log(notification);
                            console.log('----------------------');
                        });
                    }
                    break;
                case 'openPortal':
                    // Implement code to display the student's portal status
                    console.log('Open Portal option \n Student RollNumber:', this.studentID);
                    console.log(`Student Name: ${this.getFullName()}`);
                    console.log(`Student Name: ${this.student_enrolled}`);
                    break;
                case 'profile':
                    console.log('Profile option selected.');
                    if (this.enrolledCourses.length > 0) {
                        // Student is enrolled in courses, display profile information
                        console.log(`Student ID: ${this.studentID}`);
                        console.log(`Student Name: ${this.getFullName()}`);
                        console.log(`Student Balance: ${this.getBalance()}`);
                        console.log(`Student Email: ${this.getEmail()}`);
                        console.log(`Student Address: ${this.getAddress()}`);
                        console.log(`Student Status: ${this.getStatus()}`);
                        console.log(`Selected Course: ${this.selcted_course}`);
                        console.log(`Student Balance: $${this.getBalance()}`);
                        //console.log(`Student Status: ${this}`);
                    }
                    else {
                        // Student is not enrolled in any courses
                        console.log('Student Profile Else:\n');
                        console.log(`Student ID: ${this.studentID}`);
                        console.log(`Student Name: ${this.getFullName()}`);
                        console.log(`Student Status: ${this.getStatus()}`);
                        console.log('Message: Please select available courses to enroll.');
                    }
                    break;
                case 'payment':
                    console.log('Payment option selected.');
                    const { amountToPay } = await inquirer.prompt({
                        type: 'number',
                        name: 'amountToPay',
                        message: 'Enter the amount to pay:',
                    });
                    // Here you would typically integrate with a payment service provider and process the payment.
                    // You might need to include additional libraries or modules for payment processing.
                    // For a simple demonstration, we'll just display a message:
                    console.log(`Payment of $${amountToPay} processed successfully.`);
                    break;
                case 'onlineLectures':
                    // Implement code for accessing online lectures
                    console.log('Online Lectures option selected.');
                    break;
                case 'textbooks':
                    console.log('Textbooks option selected.');
                    // Prompt the user to select a course for which they want to access textbooks
                    const courseChoices = course_obj.availableCourses.map((course) => ({
                        name: course.title,
                        value: course,
                    }));
                    const { selectedCourse } = await inquirer.prompt({
                        type: 'list',
                        name: 'selectedCourse',
                        message: 'Select a course to access textbooks:',
                        choices: courseChoices,
                    });
                    // Check if the selected course has textbooks
                    if (selectedCourse.textbooks && selectedCourse.textbooks.length > 0) {
                        console.log(`Textbooks for "${selectedCourse.title}":`);
                        // Display the list of textbooks with their download links
                        selectedCourse.textbooks.forEach((textbook) => {
                            console.log(`- ${textbook.title}: ${textbook.downloadLink}`);
                        });
                    }
                    else {
                        console.log(`No textbooks available for "${selectedCourse.title}".`);
                    }
                    break;
                case 'exams':
                    // Implement code for viewing exam-related information
                    console.log('Exams option selected.');
                    break;
                case 'announcements':
                    // Implement code for viewing announcements
                    console.log(chalk.bgYellow.redBright('No New Announcements Yet.'));
                    break;
                case 'exit':
                    console.log(chalk.bold.yellow('Exiting Student Dashboard. Goodbye!'));
                    condition = false;
                    return;
            }
        }
    }
    getStatus() {
        return `${this}`; ////////////////status
    }
    async getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    async getBalance() {
        return this.balance;
    }
    getEmail() {
        return this.email;
    }
    getAddress() {
        return this.address;
    }
    async getAdmission() {
        // Use inquirer to prompt the student for admission details
        const admissionDetails = await inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter your first name:',
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter your last name:',
            },
            {
                type: 'number',
                name: 'age',
                message: 'Enter your age:',
            },
            {
                type: 'input',
                name: 'cell',
                message: 'Enter your phone number:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address:',
            },
            {
                type: 'input',
                name: 'address',
                message: 'Enter your address:',
            },
            {
                type: 'input',
                name: 'course_code',
                message: 'Enter Course Code:',
            },
        ]);
        this.selcted_course.push(admissionDetails.course_code);
        this.student_enrolled = true;
        this.student_status = 'Enrolled';
        this.enrolledCourses.push(admissionDetails.course_code);
        // Create a new student object with the provided details
        std_obj = new Student(admissionDetails.firstName, admissionDetails.lastName, admissionDetails.age, admissionDetails.cell, admissionDetails.email, admissionDetails.address);
        //   // You can add this new student to a list or perform other actions as needed
        //   // Return some response to indicate successful admission
        //   console.log('Admission request submitted. We will review your application.');
        //   // You can include further logic here, like adding the student to a list of pending admissions
        //   //return newStudent;
        // }
        // public getStudentID(): number {
        //     return this.studentID;
        //   }
        //   public getAge(): number {
        //     return this.age;
        //   }
        //   public getCell(): string {
        //     return this.cell;
        //   }
        //   public addNotification(notification: string): void {
        //     this.notifications.push(notification);
        //   }
        //   public getNotifications(): string[] {
        //     return this.notifications;
        //   }
        //   public enrollInCourse(course: Course): void {
        //     this.enrolledCourses.push(course);
        //   }
        //   public getEnrolledCourses(): Course[] {
        //     return this.enrolledCourses;
        //   }
        //   public calculateTotalCourseFees(): number {
        //     let totalFees = 0;
        //     for (const course of this.enrolledCourses) {
        //       totalFees += course.getFee();
        //     }
        //     return totalFees;
        //   }
    }
}
Student.lastStudentID = 10000;
let std_obj = new Student('John', // Replace with the first name
'Doe', // Replace with the last name
20, // Replace with the age
'123-456-7890', // Replace with the cell
'johndoe@example.com', // Replace with the email
'123 University Ave' // Replace with the address
);
// //std_obj.enrollInCourse()
// //std_obj.getAdmisstion()
const portalRole = 'Student';
//std_obj.mainMenue(portalRole);
export { std_obj, Student };
