interface Teacher {
  readonly firstName: string;
  readonly lastName: string;  // cannot be modified once initialized
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // optional attribute
  location: string;
  [key: string]: any;  // allow any additional property
}

// Extending interfaces
interface Directors extends Teacher {
  numberOfReports: number;
}

// printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstname: string, lastName: string): string {
  const firstInitial = firstName.charAt(0);

  return `${firstInitial}. ${lastName}`;
}
