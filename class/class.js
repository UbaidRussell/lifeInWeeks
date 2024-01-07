const studentCreation = (name, age, gender, quote) => {
    return {
        name, age, gender,
        yearQuote() {
            console.log(quote);
        }
    };
};

const students = []; // Array to store created students

function createStudent() {
  // Extract values from the form
  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value, 10);
  const gender = document.getElementById('gender').value;
  const quote = document.getElementById('quote').value;

  // Call studentCreation function
  const newStudent = studentCreation(name, age, gender, quote);

  // Add the new student to the array
  students.push(newStudent);

  //logs the student to the console
    console.log(students);

  // Display the list of created students
  displayStudents();
}

function displayStudents() {
  const studentsList = document.getElementById('studentsList');
  studentsList.innerHTML = '<h2>Students:</h2>';

  if (students.length === 0) {
    studentsList.innerHTML += '<p>No students created yet.</p>';
  } else {
    students.forEach((student, index) => {
      studentsList.innerHTML += `<p>${index + 1}. ${student.name} - Age: ${student.age} - Gender: ${student.gender}</p>`;
    });
  }
}