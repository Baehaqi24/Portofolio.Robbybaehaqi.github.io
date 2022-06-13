const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
    scrollposition = window.scrollY;

    if (scrollposition >= 60) {
        nav.classList.add("nav-dark");
    } else if (this.scrollposition <= 60) {
        nav.classList.remove("nav-dark");
    }
});

// Event Ngetik

const hero = ["Robby baehaqi"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  if (count == hero.length) {
    count = 0;
  }

  currentTxt = hero[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }
  setTimeout(ngetik, 300);
})();

// Integrasi dengan gmail

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
        To : "robbybaehaqi8@gmail.com",
        From : "robbybaehaqi8@gmail.com",
        Subject : `${username} Memberikan Pesan Kepada Anda, Yukk Check Sekarang`,
        Body : `name: ${username} <br> subject: ${subject} <br> email: ${email} <br> message: ${message} <br>`,
    }).then((success)=>{
        alert('Pesan Anda Sudah terikirim');
    }).catch((error)=>{
        alert('Pesan gagal terkirim');
    })
};