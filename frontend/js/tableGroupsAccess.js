$(document).ready(function() {
/*
    $("button[name='GroupsModalButtonCleanGroup']").click(function(event){ 
        event.preventDefault();
    });

    $("button[name='GroupsModalButtonCloseModalGroup']").on("click",function(event) {
        window.location.href="#";
        event.preventDefault();
    });
*/
    $("form[name='groupModalAccessGroup']").submit(function(event) {    

        var formURL = $(this).attr("action");
        var formMethod = $(this).attr("method");
        
        var accessValueArray=[];

        $(".access").each(function(){
            accessValueArray.push($(this).attr("data-active"));
        });

        var ajax_data = {
            "access"    : accessValueArray
        };

        $.ajax({
            url : formURL,
            type: formMethod,
            data : ajax_data,
            dataType : 'json',
            beforeSend:function (){
                console.log("insert information");
                            
                $("button[name='GroupsModalButtonApplyChangesGroup']").html('<i class="icon-loading"></i> Loading...');
                $("button[name='GroupsModalButtonApplyChangesGroup']").text("Loading...");
                $("button[name='GroupsModalButtonApplyChangesGroup']").prop("disabled",true);
                        },
            success:function(data, textStatus, jqXHR){
                window.location.href="#";
                var not = $.Notify({
                    caption: data.caption,
                    content: data.content,
                    timeout: 4500, // 4.5 seconds
                    style: ({background: '#60A917', color: '#FFFFFF'})          
                });
            },
            error:function(jqXHR, textStatus, errorThrown){
                console.log("error information");
                var not = $.Notify({
                    caption: "Error",
                    content: "No se pudo agregar la información ingresada",
                    timeout: 5000, // 10 seconds
                    style: ({background: 'red', color: '#FFFFFF'})          
                });
                if(jqXHR.status==0){
                    console.log('You are offline!!\n Please Check Your Network.');
                }else if(jqXHR.status==404){
                    console.log('Requested URL not found.');
                }else if(jqXHR.status==500){
                    console.log('Internel Server Error.');
                }else if(textStatus=='parsererror'){
                    console.log('Error.\nParsing JSON Request failed.');
                }else if(textStatus=='timeout'){
                    console.log('Request Time out.');
                }else {
                    console.log('Unknow Error.\n'+jqXHR.responseText);
                }
            },
            complete: function() {
                console.log("process complete");
                $("button[name='GroupsModalButtonApplyChangesGroup']").text("Aplicar Cambios");
                $("button[name='GroupsModalButtonApplyChangesGroup']").prop("disabled",false);
            }
        });
        event.preventDefault(); 
       //     event.unbind(); //unbind. to stop multiple form submit.
    });


});



