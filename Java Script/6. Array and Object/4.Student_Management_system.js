const students=[
    {id:1,firstName:"John",lastName:"Doe",age:20,grade:"A"},   
    {id:2,firstName:"Jane",lastName:"Smith",age:22,grade:"B"},   
    {id:3,firstName:"Bob",lastName:"Johnson",age:19,grade:"A"}   
   
   ]
   
   //A) Add a Student: Create a function to add a new student to the array.
   function AddNewStudent(newStudent){
       students.push(newStudent);
   }
   AddNewStudent({id:4,firstName:"Rohit",lastName:"Kumar",age:21,grade:"A"});
   
   
   
   //B) Update Student Information: Create a function to update a student's information based on their id.
   function UpdateStudentInformation(StudentObj,id){
       const UpdatedObject = StudentObj.map(obj=>{
           if(obj.id===id){
               return {...obj,firstName:"Abhimanyu",lastName:"Pathak"}
           }
           return obj;
       })
       return UpdatedObject;
   }
   const updatedSheet = UpdateStudentInformation(students,2);
   
   
   
   //C) Delete a Student: Create a function to delete a student based on their id.
   function DeleteStudentInformation(StudentObj){
       const UpdatedObject = StudentObj.filter(obj=>{
           if(obj.id!=3){
               
               return obj;
           }
       })
       return UpdatedObject;
   }
   DeleteStudentInformation(students,3);
   
   
   
   //D) List All Students: Create a function to display a list of all students.
   function studentsList(){
       students.forEach((element)=>{
   
           console.log(element);
       })
   }
   studentsList();
   
   
   
   // E) Find Students by Grade: Create a function to find all students who have a specific grade.
   function studentByGrade(Grade){
       console.log("Students with grade",Grade);
       students.forEach((student)=>{
           if(student.grade===Grade) 
           console.log(student);
       })
   }
   studentByGrade('A');
   
   
   
   //F) Calculate Average Age: Create a function to calculate the average age of all students using array method.
   function averageAgeOfStudents(){
       let avgAge=students.reduce((accm,currObj)=>{
           return accm+currObj.age;
       },0);
       console.log("Average age of students",avgAge);
   }
   averageAgeOfStudents();