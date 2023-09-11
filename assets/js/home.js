$('.ticked').click(function(){
    if ($('.ticked').is(':checked')) {
        let h3 = $(this).parent().siblings('.item-des').find('h3');
        $(h3).css({
        "text-decoration" : "line-through"
        });
    } else {
        let h3 = $(this).parent().siblings('.item-des').find('h3');
        $(h3).css({
        "text-decoration" : "none"
        });
    }
    // let formElement = $('.ticked').closest('form');
    // formElement.submit();

    // console.log($(this).parent().siblings('.item-des').html());
})


