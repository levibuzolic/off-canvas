!function($){var t=[],n={containerSurround:".container",buttonSelector:".mobile-button",mobileOnly:!1,mobileWidth:1920,distanceX:"100%",duration:400,transition:"ease",sizeWidth:"70%",sizeInPixels:!1,side:"left"};$.fn.canvas=function(t){if("undefined"==typeof t&&(t={}),0===this.length)return this;if(this.length>1)return this.each(function(){s.push($(this).off(t))}),s;var s={};s=this;var i=function(){s.options=$.extend(n,t),o()},o=function(){container=$(s.options.containerSurround),container.wrap('<div class="outer-container"></div>'),click=$(s.options.buttonSelector),mobileWidth=$(s.options.mobileWidth),"left"==s.options.side&&(s.options.sizeInPixels?s.css({left:"-"+s.options.sizeWidth+"px"}):s.css({left:"-"+s.options.sizeWidth})),"right"==s.options.side&&(s.wrap('<div class="side-right"></div>'),s.options.sizeInPixels?s.css({right:"-"+s.options.sizeWidth+"px"}):s.css({right:"-"+s.options.sizeWidth})),s.css({top:"0",width:s.options.sizeWidth,height:"100%",position:"absolute","z-index":"888888",overflow:"hidden","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","-o-backface-visibility":"hidden","-webkit-backface-visibility":"hidden","backface-visibility":"hidden"}),$("html, body").css("position","relative"),container.css({overflow:"hidden"}),$(".outer-container").css({position:"relative",overflow:"hidden"}),$(".side-right").css({overflow:"hidden",width:"100vw",position:"absolute",height:"100%"}),l(s.options.transition,s.options.duration)},a=function(t){"left"==s.options.side&&(s.options.sizeInPixels?container.css({"-ms-transform":"translate3d("+t+"px, 0, 0)","-moz-transform":"translate3d("+t+"px, 0, 0)","-o-transform":"translate3d("+t+"px, 0, 0)","-webkit-transform":"translate3d("+t+"px, 0, 0)",transform:"translate3d("+t+"px, 0, 0)"}):container.css({"-ms-transform":"translate3d("+t+", 0, 0)","-moz-transform":"translate3d("+t+", 0, 0)","-o-transform":"translate3d("+t+", 0, 0)","-webkit-transform":"translate3d("+t+", 0, 0)",transform:"translate3d("+t+", 0, 0)"})),"right"==s.options.side&&(s.options.sizeInPixels?container.css({"-ms-transform":"translate3d(-"+t+"px, 0, 0)","-moz-transform":"translate3d(-"+t+"px, 0, 0)","-o-transform":"translate3d(-"+t+"px, 0, 0)","-webkit-transform":"translate3d(-"+t+"px, 0, 0)",transform:"translate3d(-"+t+"px, 0, 0)"}):container.css({"-ms-transform":"translate3d(-"+t+", 0, 0)","-moz-transform":"translate3d(-"+t+", 0, 0)","-o-transform":"translate3d(-"+t+", 0, 0)","-webkit-transform":"translate3d(-"+t+", 0, 0)",transform:"translate3d(-"+t+", 0, 0)"}))},e=function(t){a(t)},r=function(t){"left"==s.options.side&&s.css({"-ms-transform":"translate3d("+t+", 0, 0)","-moz-transform":"translate3d("+t+", 0, 0)","-o-transform":"translate3d("+t+", 0, 0)","-webkit-transform":"translate3d("+t+", 0, 0)",transform:"translate3d("+t+", 0, 0)"}),"right"==s.options.side&&s.css({"-ms-transform":"translate3d(-"+t+", 0, 0)","-moz-transform":"translate3d(-"+t+", 0, 0)","-o-transform":"translate3d(-"+t+", 0, 0)","-webkit-transform":"translate3d(-"+t+", 0, 0)",transform:"translate3d(-"+t+", 0, 0)"})},l=function(t,n){s.css({"-ms-transition":"all "+n+"ms "+t,"-moz-transition":"all "+n+"ms "+t,"-o-transition":"all "+n+"ms "+t,"-webkit-transition":"all "+n+"ms "+t,transition:"all "+n+"ms "+t}),container.css({"-ms-transition":"all "+n+"ms "+t,"-moz-transition":"all "+n+"ms "+t,"-o-transition":"all "+n+"ms "+t,"-webkit-transition":"all "+n+"ms "+t,transition:"all "+n+"ms "+t})};s.open=function(){r(s.options.distanceX),s.addClass("open"),e(s.options.sizeWidth),container.addClass("active")},s.close=function(){r(0),s.removeClass("open"),e(0),container.removeClass("active")},s.toggle=function(){s.hasClass("open")?s.close():s.open()},i(),$(click).click(function(){return s.toggle(),!1}),$(s).click(function(t){t.stopPropagation()}),$(document).click(function(){s.close()}),$(window).resize(function(){$(window).width()>=s.options.mobileWidth&&s.hasClass("open")&&s.options.mobileOnly&&s.close()}),$(document).keyup(function(t){return 27==t.keyCode?(s.close(),!1):void 0})}}(jQuery);