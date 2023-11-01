 
import inquirer from 'inquirer';
//import  Faculty  from './faculty.js';
import {Student,std_obj} from './student.js';
//import faculty_obj from './faculty.js';


class Course {
  
  courseCode: string;
  title: string;
  description: string;
  creditHours: number;
  courseFee: number;
  facultyName:string ;
  public students: Student[] = [];
  public availableCourses: Course[] = [];

  constructor(
    courseCode: string,
    title: string,
    description: string,
    creditHours: number,
    courseFee: number,
    facultyName: string
  ) {
    this.courseCode = courseCode;
    this.title = title;
    this.description = description;
    this.creditHours = creditHours;
    this.courseFee = courseFee;
    this.facultyName = facultyName;
    //this.availableCourses.push(Course);
  }

  public addCourse(course: Course) {
    this.availableCourses.push(course);
  }
/////////////////////////////
public async addNewCourse()  
{
  console.log('\nAdding a New Course\n');
  
  // Get the list of faculty members
  //const facultyList = faculty_obj.getFacultyList();

  const courseDetails = await inquirer.prompt([
    {
      type: 'input',
      name: 'courseCode',
      message: 'Enter Course code:',
    },
    {
      type: 'input',
      name: 'title',
      message: 'Enter Course title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter Course description:',
    },
    {
      type: 'number',
      name: 'creditHours',
      message: 'Enter Course credit hours:',
    },
    {
      type: 'number',
      name: 'courseFee',
      message: 'Enter Course fee:',
    },
    {
      type: 'input',
      name: 'faculty',
      message: 'Enter the faculty Name:',
      //choices: facultyList, // Use the list of faculty members as choices
    },
  ]);

  //const faculty = faculty_obj.findFacultyByName(courseDetails.faculty);

  // if (!faculty) {
  //   console.log('Faculty not found. Please add faculty first.');
  //   return;
  // }

  const course_obj1 = new Course(
    courseDetails.courseCode,
    courseDetails.title,
    courseDetails.description,
    courseDetails.creditHours,
    courseDetails.courseFee,
    courseDetails.faculty,
  );

  console.log(`Course "${course_obj1.title}" added successfully.`);
  this.addCourse(course_obj1);
}
/////////////////////////
  public getCourses() {
    return this.availableCourses;
  }

  public viewCourses() {
    if (this.availableCourses.length > 0) {
      return this.availableCourses.map((course) => course.title);
    } else {
      console.log('No courses available.');
      return [];
    }
  }

  getTitle() {
    return this.title;
  }

  getFee() {
    return this.courseFee;
  }

  setFee(fee: number) {
    this.courseFee = fee;
  }

  getCourseCode() {
    return this.courseCode;
  }
}
/////////////////////////////////////////////////
//                   Hard coded Courses
////////////////////////////////////////////////

const course_obj=new Course("CS-601",
"Cloud Computing and DevOps",
"Learn about cloud computing and DevOps practices to efficiently manage and deploy applications in the cloud.",
11,
0,
"Dr. Lisa Jones");

const courses = [
  new Course(
    "CS-101",
    "Object-Oriented Programming using TypeScript",
    "We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.",
    13,
    0,
    "Sir Jahanzeb Tayyab"
  ),
  new Course(
    "CS-201",
    "Data Structures and Algorithms",
    "This course will cover various data structures and algorithms that are essential for software development.",
    10,
    4500,
    "Dr. Sarah Ahmed"
  ),
  new Course(
    "CS-301",
    "Web Development with React and Node.js",
    "Learn how to build web applications using React for the front-end and Node.js for the back-end.",
    12,
    4500,
    "Prof. Alex Martin"
  ),
  new Course(
    "CS-401",
    "Machine Learning and Artificial Intelligence",
    "Explore the world of machine learning and artificial intelligence, and learn how to build intelligent systems.",
    15,
    5000,
    "Dr. Emily Brown"
  ),
  new Course(
    "CS-501",
    "Cybersecurity and Ethical Hacking",
    "Become a cybersecurity expert and learn the art of ethical hacking to protect computer systems from cyber threats.",
    14,
    5000,
    "Prof. John Smith"
  ),
  new Course(
    "CS-601",
    "Cloud Computing and DevOps",
    "Learn about cloud computing and DevOps practices to efficiently manage and deploy applications in the cloud.",
    11,
    5000,
    "Dr. Lisa Jones"
  ),
];

// Add each course to the course_obj list
for (const course of courses) {
  course_obj.addCourse(course);
}
export { Course,course_obj};
