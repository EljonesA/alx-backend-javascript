export default function updateStudentGradeByCity(students, city, newGrades) {
  // students & newGrades - an array
  // filter students by city
  const filteredStudents = students.filter(student => student.location === city);
  
  // update studnet grades
  const updatedStudents = filteredStudents.map(student => {
    // check for new grade of current student
    const matchedGrade = newGrades.find(grade => grade.studentId === student.id);
    // if grade, assign it else N/A
    const grade = matchedGrade ? matchedGrade.grade : 'N/A';

    return {
      ...student,
      grade: grade
    };
  });

  return updatedStudents;
}
