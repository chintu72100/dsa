// Function to determine the letter grade based on score
function assignGrade() {
    
    const score = parseInt(prompt("Enter the score: "), 10);
    let grade;

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    alert(`The grade is: ${grade}`);
}


assignGrade();
