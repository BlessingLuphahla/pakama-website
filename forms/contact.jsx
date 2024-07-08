const form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const mailtoLink = `mailto:pakamholdings@gmail.com?subject=New message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name} (${email})`;
    
    window.location.href = mailtoLink;
  });