var dateDiffInDays = function(date1, date2) {
    // Convert input dates to Date objects
    const startDate = new Date(date1);
    const endDate = new Date(date2);
    
    // Calculate the time difference in milliseconds
    const timeDiff = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) - 
                     Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    
    // Convert time difference from milliseconds to days
    const diffInDays = timeDiff / (1000 * 60 * 60 * 24);
    
    // Return the difference in days
    return diffInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date (YYYY-MM-DD).");
const dateTwo = prompt("Enter End Date (YYYY-MM-DD).");
alert(dateDiffInDays(dateOne, dateTwo));
