//your JS code here. If required.
// Function to display the length of the current URL
function displayUrlLength() {
    // Get the current URL from the location object
    var currentUrl = window.location.href;
    
    // Get the length of the URL
    var urlLength = currentUrl.length;
    
    // Show the URL length in an alert box
    alert("The length of the URL is: " + urlLength);
}
