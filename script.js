document.getElementById("appointmentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const message =
        "Hello Glow Beauty Salon!%0A%0A" +
        "I would like to book an appointment.%0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Service: " + service + "%0A" +
        "Date: " + date + "%0A" +
        "Time: " + time;

    const whatsappNumber = "916301246887";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + message;

    window.open(whatsappURL, "_blank");
    alert("✅ Appointment details are ready! Please send the WhatsApp message to confirm your booking.");
});