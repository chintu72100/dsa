    const minutes = parseInt(prompt("Enter the number of minutes: "), 10);
    const hours = Math.floor(minutes / 60); 
    const remainingMinutes = minutes % 60;
    console.log(`Total hours: ${hours} hours and ${remainingMinutes} minutes`);

