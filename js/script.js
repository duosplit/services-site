// FORM
function sendForm() {
    var destinationEmail = "contact@solutionslogiciellesmp.com";
    var name = $('#form-name').val();
    var email = $('#form-email').val();
    var subject = $('#form-subject').val();
    var message = $('#form-message').val().replace(/\n/g, '%0A');

    var emailString = "mailto:" + destinationEmail + "?subject=" + subject + "&body=" + message + "%0A%0A" + name + "%0A" + email;

    window.open(emailString);
}

$("#form-contact").submit(function (e) {
    e.preventDefault();
});
