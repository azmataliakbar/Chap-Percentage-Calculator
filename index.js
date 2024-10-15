function calculatePercentage() {
  // Get the values entered by the user
  const course1 = parseFloat(document.getElementById("course1").value);
  const course2 = parseFloat(document.getElementById("course2").value);
  const course3 = parseFloat(document.getElementById("course3").value);
  const course4 = parseFloat(document.getElementById("course4").value);
  const course5 = parseFloat(document.getElementById("course5").value);

  // Check if all input fields have valid numbers
  if (isNaN(course1) || isNaN(course2) || isNaN(course3) || isNaN(course4) || isNaN(course5)) {
    document.getElementById("result").innerHTML = "Please enter valid marks for all courses.";
    return;
  }

  // Calculate total obtained marks
  const obtainedMarks = course1 + course2 + course3 + course4 + course5;
  const totalMarks = 500;

  // Calculate the percentage
  const percentage = (obtainedMarks * 100) / totalMarks;

  // Display the result in the result div
  document.getElementById("result").innerHTML = `You obtained ${obtainedMarks} out of ${totalMarks}. Your percentage is ${percentage.toFixed(2)}%.`;
}
