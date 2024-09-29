function searchUser() {
  var username = document.getElementById("username").value.trim();

  if (username !== "") {
    fetch('./userMappings.json')
      .then(response => response.json()) // Assuming the file is in JSON format
      .then(userMappings => {
        if (userMappings.hasOwnProperty(username)) {
          // Changed from window.open to window.location.href for redirection in the same tab
          window.location.href = userMappings[username];
        } else {
          alert("Permit Not Issue Or Not Verified Yet");
        }
      })
      .catch(error => {
        console.error('Error fetching user mappings:', error);
        alert("There was an error processing your request.");
      });
  } else {
    alert("Please enter a username.");
  }
}
