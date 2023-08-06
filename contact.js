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
    this.client = "aespinoza.cs@gmail.com";
    // these IDs from the previous steps
    emailjs.sendForm("contact_service", "contact_form", this).then(
      function () {
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
};
