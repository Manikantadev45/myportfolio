
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

