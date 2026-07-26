$(document).ready(function(){
    $('#send_message').on('click', function(e){
        e.preventDefault();

        var error = false;
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = $('#phone').val().trim();
        var message = $('#message').val().trim();

        $('#name,#email,#phone,#message').removeClass('error_input');
        $('#mail_fail').hide();
        $('#success_message').hide();

        if(name.length === 0){
            error = true;
            $('#name').addClass('error_input');
        }
        if(email.length === 0 || email.indexOf('@') === -1){
            error = true;
            $('#email').addClass('error_input');
        }
        if(phone.length === 0){
            error = true;
            $('#phone').addClass('error_input');
        }
        if(message.length === 0){
            error = true;
            $('#message').addClass('error_input');
        }

        if(error === false){
            var subject = 'Portfolio Contact Request from ' + name;
            var body = 'Name: ' + name + '%0A' +
                'Email: ' + email + '%0A' +
                'Phone: ' + phone + '%0A%0A' +
                'Message:%0A' + message;

            window.location.href = 'mailto:lastedito8231@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + body;
            $('#success_message').text('Your email app should open with the message prepared.').fadeIn(500);
        } else {
            $('#mail_fail').fadeIn(500);
        }
    });
});