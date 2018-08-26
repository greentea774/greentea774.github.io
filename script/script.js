//準備中ページクリック時、Sorryポップアップを表示する
$('.Sorry').click(function(){
    $('#Sorry-modal').fadeIn();
});

//Sorryポップアップのバツアイコンクリック時、ポップアップを消す
$('.close-modal').click(function(){
    $('#Sorry-modal').fadeOut();
});

// 各リンク先のマウスオン時bottom_messageを表示する
// Twitter
$("#items_twitter").hover(
    function(){
        /* mouse enter の処理 */
        $('.bottom_message_blank').css('display','none');
        $('.bottom_message_twitter').css('display','block');
        $(this).css("background-color","#75f39b");

    }, 
    function(){
        /* mouse leave の処理 */
        $('.bottom_message_twitter').css('display','none');
        $('.bottom_message_blank').css('display','block');
        $(this).css("background-color","#f7f7f7");
    }
);
// GitHub
$("#items_github").hover(
    function(){
        /* mouse enter の処理 */
        $('.bottom_message_blank').css('display','none');
        $('.bottom_message_github').css('display','block');
        $(this).css("background-color","#75f39b");
    }, 
    function(){
        /* mouse leave の処理 */
        $('.bottom_message_github').css('display','none');
        $('.bottom_message_blank').css('display','block');
        $(this).css("background-color","#f7f7f7");
    }
);
// myprofile
$("#items_myprofile").hover(
    function(){
        /* mouse enter の処理 */
        $('.bottom_message_blank').css('display','none');
        $('.bottom_message_myprofile').css('display','block');
        $(this).css("background-color","#75f39b");
    }, 
    function(){
        /* mouse leave の処理 */
        $('.bottom_message_myprofile').css('display','none');
        $('.bottom_message_blank').css('display','block');
        $(this).css("background-color","#f7f7f7");
    }
);
// product
$("#items_product").hover(
    function(){
        /* mouse enter の処理 */
        $('.bottom_message_blank').css('display','none');
        $('.bottom_message_product').css('display','block');
        $(this).css("background-color","#75f39b");
    }, 
    function(){
        /* mouse leave の処理 */
        $('.bottom_message_product').css('display','none');
        $('.bottom_message_blank').css('display','block');
        $(this).css("background-color","#f7f7f7");
    }
);
// blog
$("#items_blog").hover(
    function(){
        /* mouse enter の処理 */
        $('.bottom_message_blank').css('display','none');
        $('.bottom_message_blog').css('display','block');
        $(this).css("background-color","#75f39b");
    }, 
    function(){
        /* mouse leave の処理 */
        $('.bottom_message_blog').css('display','none');
        $('.bottom_message_blank').css('display','block');
        $(this).css("background-color","#f7f7f7");
    }
);