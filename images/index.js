function searchUser() {
    var username = document.getElementById("username").value.trim();
  
    if (username !== "") {
      fetch('./userMappings.json')
        .then(response => response.json()) // Assuming the file is in JSON format
        .then(userMappings => {
          if (userMappings.hasOwnProperty(username)) {
            window.open(userMappings[username], "_blank");
          } else {
            alert("User not found!");
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
  