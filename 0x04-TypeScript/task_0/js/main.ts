interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// creating student objects
const firstStudent: Student = {
  firstName: "Lori",
  lastName: "Greiner",
  age: 27,
  location: "Nairobi"
};

const secondStudent: Student = {
  firstName: "Rinna",
  lastName: "Hicks",
  age: 23,
  location: "UpperHill"
}

// creating an array of student objects
const studentsList: Student[] = [firstStudent, secondStudent];

// function to render the table
function renderTable(data: Student[]): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  data.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

// rendeing the table
document.addEventListener('DOMContentLoaded', () => {
  renderTable(studentList);
});
