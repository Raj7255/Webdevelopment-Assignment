function gradeStudents(marks){
    let grade;

    if(marks > 90){
        grade='A';

    }
    if(marks<90 && marks>70){
        grade='B';
    } 
    if(marks<70 && marks>50){
        grade='C';
    } 
    if(marks<50){
        grade='F';
    } 
    return grade;
}
