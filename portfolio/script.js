document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thanks for reaching out! I will get back to you soon.');
    this.reset();
  });

  