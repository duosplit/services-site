// FORM
$("#form-contact").submit(function (e) {
    e.preventDefault();
    var action = $(this).attr("action");
    var formData = new FormData(this);
    formData.set("message", formData.get("message").replace(/\n/g, '%0A'));
    $.ajax({
        type: "POST",
        url: action,
        crossDomain: true,
        data: formData,
        dataType: "json",
        processData: false,
        contentType: false,
        headers: {
            "Accept": "application/json"
        }
    }).done(function () {
        alert("Message received. We will contact you briefly.")
    }).fail(function () {
        alert('An error occurred. Please try again later.')
    });
});