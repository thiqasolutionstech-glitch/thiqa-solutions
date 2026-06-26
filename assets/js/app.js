console.log("Thiqa Solutions Loaded Successfully");




const backToTop = document.getElementById("backToTop");

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}



const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    navbar.classList.toggle(

        "scrolled",

        window.scrollY>60

    );

});



const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const btn = contactForm.querySelector("button");

        btn.disabled = true;
        btn.innerText = "Sending...";

        emailjs.send("service_lei5mqa", "template_2baeysn", {

            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value

        })

        .then(() => {

            alert("✅ Your message has been sent successfully!");

            contactForm.reset();

        })

        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send message.");

        })

        .finally(() => {

            btn.disabled = false;
            btn.innerText = "Send Message";

        });

    });

}