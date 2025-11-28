
document.getElementById("hotelMenu").onclick = function() {
    window.location.href = "https://manikantadev45.github.io/Hotels/","_blank";
  };

  const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

// Highlight nav link on scroll
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
            });
        }
    });
};
  document.addEventListener("keydown", function (e) {
      if (
          e.key === "F12" || 
          (e.ctrlKey && e.shiftKey && e.key === "I") || 
          (e.ctrlKey && e.shiftKey && e.key === "J") || 
          (e.ctrlKey && e.key === "U")
      ) {
          e.preventDefault();
      }
  });
  document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
  });
document.getElementById("whatsappLink").addEventListener("click", function (e) {
    e.preventDefault();
    const phoneNumber = "917013063222"; 
    const message = "Hi @Manikanta , I'm visiting your portfolio and wanted to connect!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = this;
    emailjs.send("service_4pq8ula", "template_alnhwoa", {
      full_name: form.full_name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value

    }).then(function (response) {
      alert("Message sent successfully!");
            form.full_name.value = '';
            form.email.value = '';
            form.phone.value = '';
            form.message.value = '';
      console.log("SUCCESS!", response.status, response.text);
    }, function (error) {
      alert("Failed to send message.");
      console.log("FAILED...", error);
    });
  });
   const skillLinks = {
    "C#": "https://www.w3schools.com/cs/",
    "ASP.NET Core": "https://learn.microsoft.com/en-us/aspnet/core/get-started?view=aspnetcore-10.0",
    "Angular": "https://www.w3schools.com/angular/",
    "TypeScript": "https://www.w3schools.com/typescript/",
    "JavaScript": "https://www.w3schools.com/js/",
    "SQL Server": "https://www.w3schools.com/sql/",
    "HTML5": "https://www.w3schools.com/html/",
    "CSS3": "https://www.w3schools.com/css/",
    "Bootstrap": "https://www.w3schools.com/bootstrap5/",
    "Blazor": "https://learn.microsoft.com/en-us/aspnet/core/blazor/tutorials/?view=aspnetcore-10.0", 
    "Azure": "https://azure.microsoft.com/en-us/solutions/devops/tutorial",
    "Visual Studio": "https://learn.microsoft.com/en-us/visualstudio/get-started/visual-studio-ide?view=visualstudio",
    "VS Code": "https://learn.microsoft.com/en-us/shows/visual-studio-code/",
    "Git": "https://www.w3schools.com/git/",
    "GitHub": "https://www.w3schools.com/git/",
    "Unit Testing": "https://learn.microsoft.com/en-us/visualstudio/test/getting-started-with-unit-testing?view=visualstudio&tabs=dotnet%2Cmstest",
    "LINQ": "https://learn.microsoft.com/en-us/dotnet/csharp/linq/",
    "Postman": "https://learning.postman.com/docs/getting-started/overview/"
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".skill-box").forEach(box => {
      box.addEventListener("click", () => {
        let skillName = box.innerText.trim();
        if (skillLinks[skillName]) {
          window.open(skillLinks[skillName], "_blank");
        } else {
          alert("Link not found for: " + skillName);
        }
      });
    });
  });
