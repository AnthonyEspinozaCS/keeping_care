const public_key = "ECZnDfndQHxfORbGd";

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init(public_key);
})();

window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0;
    this.client.value = "markdelaney@keepingcare.ca";
    this.client_name.value = "Mark";
    // these IDs from the previous steps
    emailjs.sendForm("contact_service", "contact_form", this).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
};
