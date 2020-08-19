
const details = {};

$(document).ready(function () {
    $("#btnSubmit").click(function (e) {
        var x = $("form").serializeArray();
        $.each(x, function (i, field) {
            details[field.name] = field.value
        });
        var f_name = details['f_name'];
        var l_name = details['l_name'];
        var email = details['email'];
        var phone = details['phone']
        var password = details['password'];
        var password = details['password'];
        e.preventDefault();
        console.log(details)

        // $.ajax({
        //     type:"POST",
        //     url:"https://preparationplus.in/authorization/signup",
        //     data:details,
        //     processData:false,
        //     contentType: false,
        //     cache: false,
        //     timeout: 800000,
        //     success: function (data) {
 
        //         // $("#output").text(data);
        //         console.log("SUCCESS : ", data);
        //         $("#btnSubmit").prop("disabled", false);
 
        //     },
        //     error: function (e) {
 
        //         // $("#output").text(e.responseText);
        //         console.log("ERROR : ", e);
        //         $("#btnSubmit").prop("disabled", false);
 
        //     }
        // })
    });
});




 

// const details2 = {};

// $(document).ready(function () {
//     $("#btnSubmit1").click(function (e) {
//         var x = $("form").serializeArray();
//         $.each(x, function (i, field) {
//             details2[field.name] = field.value
//         });
//         var Email_ = details2['Email_'];
//         var Password_ = details2['Password_'];
//         e.preventDefault();
//         console.log(details2)

        // $.ajax({
        //     type:"POST",
        //     url:"https://preparationplus.in/authorization/signup",
        //     data:details,
        //     processData:false,
        //     contentType: false,
        //     cache: false,
        //     timeout: 800000,
        //     success: function (data) {
 
        //         // $("#output").text(data);
        //         console.log("SUCCESS : ", data);
        //         $("#btnSubmit").prop("disabled", false);
 
        //     },
        //     error: function (e) {
 
        //         // $("#output").text(e.responseText);
        //         console.log("ERROR : ", e);
        //         $("#btnSubmit").prop("disabled", false);
 
        //     }
        // })
//     });
// });




 
