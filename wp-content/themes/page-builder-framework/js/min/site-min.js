"use strict";
var WpbfTheme = {};
WpbfTheme.site = function(n) {
    var e = !(!window.wp || !wp.customize),
        s = {
            desktop: 1024,
            tablet: 768,
            mobile: 480
        },
        i = "desktop";
    m("desktop"), m("tablet"), m("mobile"), c();
    var t, o = document.querySelector(".scrolltop"),
        a = (o && (t = o.dataset.scrolltopValue, window.addEventListener("scroll", function(e) {
            n(this).scrollTop() > t ? n(".scrolltop").fadeIn() : n(".scrolltop").fadeOut()
        }), n(document).on("click", ".scrolltop", function() {
            document.body.tabIndex = -1, document.body.focus(), this.blur(), n("body, html").animate({
                scrollTop: 0
            }, 500)
        })), n(".wpcf7-form-control-wrap").on("mouseenter", function() {
            n(".wpcf7-not-valid-tip", this).fadeOut()
        }), n(".wpbf-page")),
        u = a.css("margin-top");

    function c() {
        var e = n(window).width(),
            t = "";
        i = e > s.desktop ? (t = "wpbf-is-desktop", "desktop") : e > s.tablet ? (t = "wpbf-is-tablet", "tablet") : (t = "wpbf-is-mobile", "mobile"), document.body.classList.remove("wpbf-is-desktop"), document.body.classList.remove("wpbf-is-tablet"), document.body.classList.remove("wpbf-is-mobile"), document.body.classList.add(t)
    }

    function m(e) {
        var t = document.body.className.match("wpbf-" + e + "-breakpoint-[\\w-]*\\b");
        null != t && (s[e] = t.toString().match(/\d+/), s[e] = Array.isArray(s[e]) ? s[e][0] : s[e])
    }
    return window.addEventListener("resize", function() {
        a.width() >= n(window).width() ? a.css({
            "margin-top": "0",
            "margin-bottom": "0"
        }) : a.css({
            "margin-top": u,
            "margin-bottom": u
        })
    }), window.addEventListener("resize", function(e) {
        c()
    }), window.addEventListener("load", function() {
        n(".opacity").delay(200).animate({
            opacity: "1"
        }, 200), n(".display-none").show(), n(window).trigger("resize"), n(window).trigger("scroll")
    }), {
        isInsideCustomizer: e,
        breakpoints: s,
        activeBreakpoint: i
    }
}(jQuery), WpbfTheme.desktopMenu = function(s) {
    var e = WpbfTheme.isInsideCustomizer,
        t = parseInt(s(".wpbf-navigation").data("sub-menu-animation-duration"), 10);

    function n() {
        s(".wpbf-menu-item-search").hasClass("active") && (s(".wpbf-menu-search").stop().animate({
            opacity: "0",
            width: "0px"
        }, 250, function() {
            s(this).css({
                display: "none"
            })
        }), setTimeout(function() {
            s(".wpbf-menu-item-search").removeClass("active").attr("aria-expanded", "false")
        }, 400))
    }

    function i() {
        var e;
        document.querySelector(".wpbf-menu-centered") && (e = s(".wpbf-navigation .wpbf-menu-centered .wpbf-menu > li > a").length / 2, e = (e = Math.floor(e)) - 1, s(".wpbf-menu-centered .logo-container").insertAfter(".wpbf-navigation .wpbf-menu-centered .wpbf-menu >li:eq(" + e + ")").css({
            display: "block"
        }))
    }

    function o() {
        s("body").hasClass("using-mouse") || (s(".wpbf-sub-menu > .menu-item-has-children").removeClass("wpbf-sub-menu-focus"), s(".wpbf-sub-menu > .menu-item-has-children > .sub-menu").stop().hide(), s(this).parents(".menu-item-has-children").addClass("wpbf-sub-menu-focus"))
    }
    s(document).on("click", ".wpbf-menu-item-search", function(e) {
        e.stopPropagation(), s(".wpbf-navigation .wpbf-menu > li").slice(-3).addClass("calculate-width");
        var n = 0;
        s(".calculate-width").each(function(e, t) {
            n += s(t).outerWidth()
        }), n < 200 && (n = 250), this.classList.contains("active") || (this.classList.add("active"), this.setAttribute("aria-expanded", "true"), s(".wpbf-menu-search", this).stop().css({
            display: "block"
        }).animate({
            width: n,
            opacity: "1"
        }, 200), s("input[type=search]", this).val("").focus())
    }), window.addEventListener("click", function(e) {
        n()
    }), document.addEventListener("keyup", function(e) {
        "Escape" !== e.key && "Esc" !== e.key && ("Tab" !== e.key || e.target.classList.contains("wpbff-search")) || n()
    }), i(), s(document).on("mouseenter", ".wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .menu-item-has-children", function() {
        s(".sub-menu", this).first().stop().css({
            display: "block"
        }).animate({
            opacity: "1"
        }, t)
    }).on("mouseleave", ".wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .menu-item-has-children", function() {
        s(".sub-menu", this).first().stop().animate({
            opacity: "0"
        }, t, function() {
            s(this).css({
                display: "none"
            })
        })
    }), s(document).on("mouseenter", ".wpbf-sub-menu-animation-fade > .menu-item-has-children", function() {
        s(".sub-menu", this).first().stop().fadeIn(t)
    }).on("mouseleave", ".wpbf-sub-menu-animation-fade > .menu-item-has-children", function() {
        s(".sub-menu", this).first().stop().fadeOut(t)
    }), s(".menu-item-has-children").each(function(e, t) {
        s(t).attr("aria-haspopup", "true")
    }), document.body.addEventListener("mousedown", function() {
        this.classList.add("using-mouse"), s(".menu-item-has-children").removeClass("wpbf-sub-menu-focus")
    }), document.body.addEventListener("keydown", function() {
        this.classList.remove("using-mouse")
    }), s(document).on("mouseenter", ".wpbf-sub-menu > .menu-item-has-children:not(.wpbf-sub-menu-focus)", function() {
        document.body.classList.add("using-mouse"), s(".menu-item-has-children").removeClass("wpbf-sub-menu-focus"), s(this).find("> a").focus()
    }).on("mouseleave", ".wpbf-sub-menu > .menu-item-has-children.wpbf-sub-menu-focus", function() {
        s(this).removeClass("wpbf-sub-menu-focus")
    }), s(document).on("focus", ".wpbf-sub-menu a", o), e && wp.customize.bind("preview-ready", function() {
        wp.customize.selectiveRefresh.bind("partial-content-rendered", function(e) {
            t = parseInt(s(".wpbf-navigation").data("sub-menu-animation-duration"), 10), i()
        })
    })
}(jQuery), WpbfTheme.mobileMenu = function(s) {
    var i, o = WpbfTheme.site.breakpoints;

    function n() {
        var e;
        i = document.querySelector(".wpbf-mobile-menu-hamburger") ? "hamburger" : (e = document.querySelector(".wpbf-mobile-menu-default"), e ? "default" : "premium")
    }

    function a(e) {
        var t;
        "premium" !== e && (t = document.querySelector("#wpbf-mobile-menu-toggle")) && t.classList.contains("active") && (s(".wpbf-mobile-menu-container").removeClass("active").stop().slideUp(), t.classList.remove("active"), t.setAttribute("aria-expanded", "false"), "hamburger" === e) && (t.classList.remove("wpbff-times"), t.classList.add("wpbff-hamburger"))
    }

    function e(e) {
        e = "hamburger" === e ? ".wpbf-mobile-menu-hamburger .wpbf-submenu-toggle" : ".wpbf-mobile-menu-default .wpbf-submenu-toggle";
        s(document).on("click", e, function(e) {
            e.preventDefault(), ((e = this).classList.contains("active") ? u : t)(e)
        })
    }

    function t(e) {
        s("i", e).removeClass("wpbff-arrow-down").addClass("wpbff-arrow-up"), e.classList.add("active"), e.setAttribute("aria-expanded", "true"), s(e).siblings(".sub-menu").stop().slideDown(), s(e = e).closest(".wpbf-navigation").hasClass("wpbf-mobile-sub-menu-auto-collapse") && s(e).closest(".menu-item-has-children").siblings(".menu-item-has-children").each(function(e, t) {
            u(t.querySelector(".wpbf-submenu-toggle"))
        })
    }

    function u(e) {
        s("i", e).removeClass("wpbff-arrow-up").addClass("wpbff-arrow-down"), e.classList.remove("active"), e.setAttribute("aria-expanded", "false"), s(e).siblings(".sub-menu").stop().slideUp()
    }
    window.addEventListener("resize", function(e) {
        o = WpbfTheme.site.breakpoints
    }), n(), s(document).on("click", ".wpbf-mobile-menu a", function() {
        var e;
        "premium" !== i && (this.href.match("#") || this.href.match("/#")) && (!this.parentNode.classList.contains("menu-item-has-children") || s(this).closest(".wpbf-mobile-mega-menu").length ? a(i) : (e = s(e = this).siblings(".wpbf-submenu-toggle")).length && ((e = e[0]).classList.contains("active") ? u : t)(e))
    }), s(document).on("click", ".wpbf-mobile-menu-toggle", function() {
        var e, t;
        n(), "premium" !== (e = i) && (t = document.querySelector("#wpbf-mobile-menu-toggle")) && (t.classList.contains("active") ? a : function(e) {
            var t;
            "premium" !== e && (t = document.querySelector("#wpbf-mobile-menu-toggle")) && (s(".wpbf-mobile-menu-container").addClass("active").stop().slideDown(), t.classList.add("active"), t.setAttribute("aria-expanded", "true"), "hamburger" === e) && (t.classList.remove("wpbff-hamburger"), t.classList.add("wpbff-times"))
        })(e)
    }), s(window).resize(function() {
        var e = s(window).height(),
            t = s(window).width(),
            n = s(".wpbf-mobile-nav-wrapper").outerHeight();
        s(".wpbf-mobile-menu-container.active nav").css({
            "max-height": e - n
        }), t > o.desktop && a(i)
    }), e("default"), e("hamburger")
}(jQuery);