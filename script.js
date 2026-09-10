const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const newMessage = {
        name: name,
        email: email,
        message: message,
        date: new Date().toLocaleString()
    };

    let savedMessages =
        JSON.parse(localStorage.getItem("devsyncMessages")) || [];

    savedMessages.push(newMessage);

    localStorage.setItem(
        "devsyncMessages",
        JSON.stringify(savedMessages)
    );

    formStatus.textContent = "Message sent successfully!";

    contactForm.reset();
});