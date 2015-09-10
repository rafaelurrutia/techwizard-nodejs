$(document).ready(function(){

    var form=$("#login_formLogin");

    $(form).on( "submit", function(e) {
        e.preventDefault();
    //$( "#login_buttonLogin" ).on( "click", function(e) {
        $("#login_buttonLogin").text("Loading...");
        $("#login_buttonLogin").prop("disabled",true);

        // DEFINIR LOCACION DE ARCHIVO DE DESTINO POR PARTE BACKEND
        var location="document.json";
        var redirect="reports.php";

        var username=$("input[name='inputLoginUser']").val();
        var password=$("input[name='inputLoginPassword']").val();

        $.getJSON(location)
          .done(function( json ) {
            console.log( "JSON Data: " + json.login[0].user );
            if((username==json.login[0].username)&&(password==json.login[0].password)){
                window.location=redirect;
            }else{
                $(".login_errorMessageText").text(json.login[0].errorMessage);
                $(".login_errorMessage").fadeIn('slow').delay(4500).fadeOut('slow');
                $("#login_buttonLogin").text("Ingresar");
                $("#login_buttonLogin").prop("disabled",false);
                $("input[name='inputLoginUser']").addClass("login_errorElementsForm");
                $("input[name='inputLoginPassword']").addClass("login_errorElementsForm");
                   
            }
          })
          .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });
        return false;
    });
});

/////////////////////////////////////////////////////////////////////////////////////
/*
$(document).ready(function() {
        $('form#ajaxform').submit(function(e) {
            $.ajax({
                type: 'post',
                cache: false,
                dataType: 'json',
                data: $('form#ajaxform').serialize(),
                beforeSend: function() { 
                    $("#validation-errors").hide().empty(); 
                },
                success: function(data) {
                    if(data.success == false)
                    {
                        var arr = data.errors;
                        $.each(arr, function(index, value)
                        {
                            if (value.length != 0)
                            {
                                $("#validation-errors").append('<div class="alert alert-error"><strong>'+ value +'</strong><div>');
                            }
                        });
                        $("#validation-errors").show();
                    } else {
                         location.reload();
                    }
                },
                error: function(xhr, textStatus, thrownError) {
                    alert('Something went to wrong.Please Try again later...');
                }
            });
            return false;
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    //petición al enviar el formulario de registro
    var form = $('.register_ajax');
        form.bind('submit',function () {
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize(),
                beforeSend: function(){
                    $('.before').append('<img src="imgs/350.gif" />');
                },
                complete: function(data){
                    
                },
                success: function (data) {
                    $('.before').hide();
                    $('.errors_form').html('');
                    $('.success_message').hide().html('');
                    if(data.success == false){
                        var errores = '';
                        for(datos in data.errors){
                            errores += '<small class="error">' + data.errors[datos] + '</small>';
                        }
                        $('.errors_form').html(errores)
                    }else{
                        $(form)[0].reset();//limpiamos el formulario
                        $('.success_message').show().html(data.message)
                    }
                },
                error: function(errors){
                    $('.before').hide();
                    $('.errors_form').html('');
                    $('.errors_form').html(errors);
                }
            });
       return false;
    });
    
   
});

/////////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
        $('#loginBtn').click(function(e){
            e.preventDefault();
            $.ajax({
                url: 'login',
                type: 'post',
                dataType: 'json',
                data: $('form#login').serialize(),
                success: function(data) {
                    alert("Logged in"); // <- this would have to be your own way of showing that user is logged in
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.responseText); // <- same here, your own div, p, span, whatever you wish to use
                }
            });
            return false;
        });
    });

    */