document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
    } else {
        alert('Message sent!');
    }
});