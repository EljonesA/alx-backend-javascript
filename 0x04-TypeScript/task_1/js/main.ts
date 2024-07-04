interface Teacher {
  readonly firstName: string;
  readonly lastName: string;  // cannot be modified once initialized
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // optional attribute
  location: string;
  [key: string]: any;  // allow any additional property
}
