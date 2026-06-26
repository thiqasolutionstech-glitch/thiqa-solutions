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

    contactForm.addEventListener("submit", async function (e) {
        

        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

        try {

            const response = await fetch("http://localhost:5000/send-email", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            });

            const result = await response.json();

            if (result.success) {

                alert("Message sent successfully!");

                contactForm.reset();

            } else {

                alert("Failed to send message.");

            }

        } catch (error) {

            console.error(error);

            alert("Cannot connect to the server.");

        }

    }
    
);

}