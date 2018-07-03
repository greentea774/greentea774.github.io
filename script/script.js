// 各リンク先のマウスオン時bottom_messageを表示する
// Twitter
$("#items_twitter").hover(
    function(){
        /* mouse enter の処理 */
        $('.bottom_message_twitter').css('display','block');
    }, 
    function(){
        /* mouse leave の処理 */
        $('.bottom_message_twitter').css('display','none');
    }
);
// GitHub
$("#items_github").hover(
    function(){
        /* mouse enter の処理 */
        $('.bottom_message_github').css('display','block');
    }, 
    function(){
        /* mouse leave の処理 */
        $('.bottom_message_github').css('display','none');
    }
);
// myprofile
$("#items_myprofile").hover(
    function(){
        /* mouse enter の処理 */
        $('.bottom_message_myprofile').css('display','block');
    }, 
    function(){
        /* mouse leave の処理 */
        $('.bottom_message_myprofile').css('display','none');
    }
);
// product
$("#items_product").hover(
    function(){
        /* mouse enter の処理 */
        $('.bottom_message_product').css('display','block');
    }, 
    function(){
        /* mouse leave の処理 */
        $('.bottom_message_product').css('display','none');
    }
);
// blog
$("#items_blog").hover(
    function(){
        /* mouse enter の処理 */
        $('.bottom_message_blog').css('display','block');
    }, 
    function(){
        /* mouse leave の処理 */
        $('.bottom_message_blog').css('display','none');
    }
);