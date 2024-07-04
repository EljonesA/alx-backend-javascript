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

// Classes & Interfaces
interface StudentConstructor {// class constructor interface
  firstName: string;
  lastName: string;
}

interface StudentClass {
  workonHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workonHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
