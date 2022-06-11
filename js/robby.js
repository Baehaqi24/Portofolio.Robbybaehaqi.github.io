const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
    scrollposition = window.scrollY;

    if (scrollposition >= 60) {
        nav.classList.add("nav-dark");
    } else if (this.scrollposition <= 60) {
        nav.classList.remove("nav-dark");
    }
});

// Gmail

const form = document.querySelector('.contact-form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let username = document.querySelector('#username').value;
    let subject = document.querySelector('#subject').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    document.querySelector('.contact-form').reset();

    sendEmail(username, subject, email, message);
})

function sendEmail(username, subject, email, message){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "robbybaehaqi8@gmail.com",
        Password : "EE66FD6C93B358062BEE8AF1C0E50BA63ED4",
        To : 'robbybaehaqi8@gmail.com',
        From : "robbybaehaqi8@gmail.com",
        Subject : `${subject} just message you from the website form`,
        Body : `name: ${username} <br> subject: ${subject} <br> email: ${email} <br> message ${message} <br>`,
    }).then((success)=>{
        alert('Pesan Anda Sudah terikirim');
    }).catch((error)=>{
        alert('Pesan gagal terkirim');
    })
};