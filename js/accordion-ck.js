$(document).ready(function(){function e(e){var t=$(e),n=!0;t.hover().css({cursor:"pointer"});t.click(function(){console.log("ACCORDION");if(!n){t.removeClass("active");$(this).children(".icon").html("&nbsp;&#x25BC;");$(this).parent().find(".panel-content").slideUp("fast",function(){$(this).addClass("visuallyhidden").slideDown(0);$(".panel-content").attr("aria-expanded","false")})}else{t.addClass("active");$(this).children(".icon").html("&nbsp;&#x25B2;");$(this).parent().find(".panel-content").slideUp(0,function(){$(".panel-content").attr("aria-expanded","true");$(this).removeClass("visuallyhidden").slideDown("fast")})}n=!n;return!1})}e(".trigger1"),e(".trigger2");e(".trigger3")});