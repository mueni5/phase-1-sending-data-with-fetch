function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => response.json())
    .then(data => {
      const newId = data.id;
      document.body.append(newId);
    })
    .catch(error => {
      const errorMessage = error.message;
      document.body.append(errorMessage);
    });
  
    // Return the fetch chain to ensure that the tests run correctly
    return fetch('http://localhost:3000/users');
  }
  
  
  
  
  