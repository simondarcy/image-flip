/* !todo Should be JQuery plugin */
function imageFlip(){

    $("p[data-embed='image-flip']").each(function(index) {
        //get the 2 image IDS
        $image1 = $(this).data('id').split(', ')[0];
        $image2 = $(this).data('id').split(', ')[1];
        //Add flip class to container
        $(this).addClass("flip-container");

        //Flip required snippet
        html ='<div class="flipper" ontouchstart="this.classList.toggle(\'hover\');"> \
                        <div class="front inner"> \
                            <img src="https://img.rasset.ie/'+$image1+'-800.jpg"/> \
                        </div>\
                        <div class="back inner">\
                            <img src="https://img.rasset.ie/'+$image2+'-800.jpg"/> \
                        </div> \
                    </div>';
        //Update the html
        $(this).html(html);
        //Load each image and set width and height approprialy
        $(this).find('img').one("load", function() {
            $imgWidth = $(this).width();
            $imgHeight = $(this).height();
            $(this).parent().css({"width": $imgWidth, "height": $imgHeight});
            $(this).parent().parent().parent().css({"width": $imgWidth, "height": $imgHeight});
        }).each(function() {
            if(this.complete) $(this).load();
        });//end img loading

    });//end each
}//end img flip function