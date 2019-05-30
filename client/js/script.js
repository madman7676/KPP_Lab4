jQuery(document).ready(function($) {
    $(".last-posts .titles a").click(function() {
        if(!$(this).hasClass("active")) {
            $(".last-posts .titles a").toggleClass('active');
            $(".last-posts .posts-list").toggleClass('hide');
        }
        return false;
    });

    $(".social_widget .tabgroup-tab").click(function() {
        social_li_click($(this));
        return false;
    });

    $(".social_widget .tabgroup-tab a").click(function() {
        social_li_click($(this).parent());
        return false;
    });

    $("a.get-question").click(function() {
        $(".answer-block .question").toggleClass("hide");
        return false;
    });
});

function social_li_click($this) {
    jQuery(".social_widget .tabgroup-tab").removeClass('on');
    $this.addClass("on");
    jQuery('.social_widget > div').addClass('hide');
    var id = $this.data("target");
    jQuery("#" + id).removeClass("hide");
}