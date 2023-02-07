// FORM
function sendForm() {
    var name = $('#form-name').val();
    var email = $('#form-email').val();
    var subject = $('#form-subject').val();
    var message = $('#form-message').val();

    var emailString = "mailto:" + email + "?subject=" + subject + "&body=" + message + "%0A%0A" + name;

    window.open(emailString);
}

$("#form-contact").submit(function (e) {
    e.preventDefault();
});
