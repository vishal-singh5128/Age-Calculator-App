let userEmail
userEmail=$("input").val()

let response=false


$("button").on("click", function() {
    userEmail=$("input").val()
    console.log(userEmail)        

    if (userEmail.length==0){
    $(".email_warning").show()
    }

    else if (response==false){
    $(".content_hidden").show()
    $("#root").html("<b>"+ userEmail +" " + "</b>" );
    $(".content").hide()
    $(".desktop").hide()
    $(".mobile").hide()
    response=true
}
else {
    
    $(".content_hidden").hide()

    if ($(window).width() <= 979){
    $(".mobile").show() }

    else { $(".desktop").show() }
    $(".content").show()
    
    $(".email_warning").hide()
    response=false
    
}
})