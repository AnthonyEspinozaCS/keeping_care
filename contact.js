const public_key = "ECZnDfndQHxfORbGd";

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init(public_key);
})();

window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.client.value = "markdelaney@keepingcare.ca";
    this.client_name.value = "Mark";
    console.log("hello");
    setTimeout(3000);
    // these IDs from the previous steps
    emailjs.sendForm("contact_service", "contact_form", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
};
