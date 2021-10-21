"use strict";
! function(t, e) {
    t.Package.name = "DashLite", t.Package.version = "1.4.0";
    var n = e(window),
        i = e("body"),
        a = e(document),
        o = "nk-menu",
        s = "nk-header-menu",
        r = "nk-aside",
        l = "nk-sidebar",
        c = "nk-sidebar-mobile",
        d = "nk-sidebar-fat",
        u = "nk-sidebar-short",
        f = "nk-content-sidebar",
        g = t.Break;

    function p(t, e) {
        return Object.keys(e).forEach(function(n) {
            t[n] = e[n]
        }), t
    }

    t.ClassBody = function() {
        t.AddInBody(r), t.AddInBody("nk-apps-sidebar"), t.AddInBody(l), t.AddInBody(d)
    }, t.ClassNavMenu = function() {
        t.BreakClass("." + s, g.lg, {
            timeOut: 0
        }), t.BreakClass("." + r, g.lg, {
            timeOut: 0
        }), t.BreakClass("." + f, g.lg, {
            timeOut: 0
        }), t.BreakClass("." + l, g.lg, {
            timeOut: 0,
            classAdd: c,
            ignore: u
        }), t.BreakClass("." + d, g.xl, {
            timeOut: 0,
            classAdd: c
        }), t.BreakClass("." + u, g.md, {
            timeOut: 0,
            classAdd: c
        }), n.on("resize", function() {
            t.BreakClass("." + s, g.lg), t.BreakClass("." + r, g.lg), t.BreakClass("." + f, g.lg), t.BreakClass("." + l, g.lg, {
                classAdd: c,
                ignore: u
            }), t.BreakClass("." + d, g.xl, {
                classAdd: c
            }), t.BreakClass("." + u, g.md, {
                classAdd: c
            })
        })
    }, t.Prettify = function() {
        window.prettyPrint && prettyPrint()
    }, t.Copied = function() {
        var t = ".clipboard-init",
            n = ".clipboard-text",
            i = "clipboard-success",
            a = "clipboard-error";

        function o(t, o) {
            var s = e(t),
                r = s.parent(),
                l = {
                    text: "Copy",
                    done: "Copied",
                    fail: "Failed"
                },
                c = {
                    text: s.data("clip-text"),
                    done: s.data("clip-success"),
                    fail: s.data("clip-error")
                };
            l.text = c.text ? c.text : l.text, l.done = c.done ? c.done : l.done, l.fail = c.fail ? c.fail : l.fail;
            var d = "success" === o ? l.done : l.fail,
                u = "success" === o ? i : a;
            r.addClass(u).find(n).html(d), setTimeout(function() {
                r.removeClass(i + " " + a).find(n).html(l.text).blur(), r.find("input").blur()
            }, 2e3)
        }

        ClipboardJS.isSupported() ? new ClipboardJS(t).on("success", function(t) {
            o(t.trigger, "success"), t.clearSelection()
        }).on("error", function(t) {
            o(t.trigger, "error")
        }) : e(t).css("display", "none")
    }, t.CurrentLink = function() {
        var t = window.location.href,
            n = (n = t.substring(0, -1 == t.indexOf("#") ? t.length : t.indexOf("#"))).substring(0, -1 == n.indexOf("?") ? n.length : n.indexOf("?")),
            i = n.split("/");
        let a = "/";
        for (let t = 3; t < i.length; t++) a += i[t] + "/";
        a = a.substring(0, a.length - 1), e(".nk-menu-link, .menu-link, .nav-link").each(function() {
            var t = e(this),
                n = t.attr("href");
            a == n ? (t.closest("li").addClass("active current-page").parents().closest("li").addClass("active current-page"), t.closest("li").children(".nk-menu-sub").css("display", "block"), t.parents().closest("li").children(".nk-menu-sub").css("display", "block")) : t.closest("li").removeClass("active current-page").parents().closest("li:not(.current-page)").removeClass("active")
        })
    }, t.PassSwitch = function() {
        t.Passcode(".passcode-switch")
    }, t.Toast = function(t, e, n) {
        var i,
            a = "info" === (e = e || "info") ? "ni ni-info-fill" : "success" === e ? "ni ni-check-circle-fill" : "error" === e ? "ni ni-cross-circle-fill" : "warning" === e ? "ni ni-alert-fill" : "",
            o = {
                position: "bottom-right",
                ui: "",
                icon: "auto",
                clear: !1
            },
            s = n ? p(o, n) : o;
        if (s.position = s.position ? "toast-" + s.position : "toast-bottom-right", s.icon = "auto" === s.icon ? a : s.icon ? s.icon : "", s.ui = s.ui ? " " + s.ui : "", i = "" !== s.icon ? '<span class="toastr-icon"><em class="icon ' + s.icon + '"></em></span>' : "", "" != (t = "" !== t ? i + '<div class="toastr-text">' + t + "</div>" : "")) {
            !0 === s.clear && toastr.clear();
            var r = {
                closeButton: !0,
                debug: !1,
                newestOnTop: !1,
                progressBar: !1,
                positionClass: s.position + s.ui,
                closeHtml: '<span class="btn-trigger">Close</span>',
                preventDuplicates: !0,
                showDuration: "1500",
                hideDuration: "1500",
                timeOut: "2000",
                toastClass: "toastr",
                extendedTimeOut: "3000"
            };
            toastr.options = p(r, s), toastr[e](t)
        }
    }, t.TGL.screen = function(t) {
        e(t).exists() && e(t).each(function() {
            var t = e(this).data("toggle-screen");
            t && e(this).addClass("toggle-screen-" + t)
        })
    }, t.TGL.content = function(i, o) {
        var s = e(i || ".toggle"),
            r = e("[data-content]"),
            l = !1,
            c = {
                active: "active",
                content: "content-active",
                break: !0
            },
            d = o ? p(c, o) : c;
        t.TGL.screen(r), s.on("click", function(n) {
            l = this, t.Toggle.trigger(e(this).data("target"), d), n.preventDefault()
        }), a.on("mouseup", function(n) {
            if (l) {
                var i = e(l);
                i.is(n.target) || 0 !== i.has(n.target).length || r.is(n.target) || 0 !== r.has(n.target).length || (t.Toggle.removed(i.data("target"), d), l = !1)
            }
        }), n.on("resize", function() {
            r.each(function() {
                var n = e(this).data("content"),
                    i = e(this).data("toggle-screen"),
                    a = g[i];
                t.Win.width > a && t.Toggle.removed(n, d)
            })
        })
    }, t.TGL.expand = function(n, i) {
        var a = n || ".expand",
            o = {
                toggle: !0
            },
            s = i ? p(o, i) : o;
        e(a).on("click", function(n) {
            t.Toggle.trigger(e(this).data("target"), s), n.preventDefault()
        })
    }, t.TGL.ddmenu = function(n, i) {
        var a = n || ".nk-menu-toggle",
            o = {
                active: "active",
                self: "nk-menu-toggle",
                child: "nk-menu-sub"
            },
            s = i ? p(o, i) : o;
        e(a).on("click", function(n) {
            (t.Win.width < g.lg || e(this).parents().hasClass(l) || e(this).parents().hasClass(r)) && t.Toggle.dropMenu(e(this), s), n.preventDefault()
        })
    }, t.TGL.showmenu = function(o, r) {
        var c = e(o || ".nk-nav-toggle"),
            d = e("[data-content]"),
            u = i.hasClass("short-nav") || d.hasClass(s) ? g.lg : g.xl,
            f = {
                active: "toggle-active",
                content: l + "-active",
                body: "nav-shown",
                overlay: "nk-sidebar-overlay",
                break: u,
                close: {
                    profile: !0,
                    menu: !1
                }
            },
            h = r ? p(f, r) : f;
        c.on("click", function(n) {
            t.Toggle.trigger(e(this).data("target"), h), n.preventDefault()
        }), a.on("mouseup", function(e) {
            !c.is(e.target) && 0 === c.has(e.target).length && !d.is(e.target) && 0 === d.has(e.target).length && t.Win.width < u && t.Toggle.removed(c.data("target"), h)
        }), n.on("resize", function() {
            (t.Win.width < g.xl || t.Win.width < u) && t.Toggle.removed(c.data("target"), h)
        })
    }, t.Ani.formSearch = function(t, n) {
        var i = {
                active: "active",
                timeout: 400,
                target: "[data-search]"
            },
            o = n ? p(i, n) : i,
            s = e(t),
            r = e(o.target);
        s.exists() && (s.on("click", function(t) {
            t.preventDefault();
            var n = e(this).data("target"),
                i = e("[data-search=" + n + "]"),
                a = e("[data-target=" + n + "]");
            i.hasClass(o.active) ? (a.add(i).removeClass(o.active), setTimeout(function() {
                i.find("input").val("")
            }, o.timeout)) : (a.add(i).addClass(o.active), i.find("input").focus())
        }), a.on({
            keyup: function(t) {
                "Escape" === t.key && s.add(r).removeClass(o.active)
            },
            mouseup: function(t) {
                r.find("input").val() || r.is(t.target) || 0 !== r.has(t.target).length || s.is(t.target) || 0 !== s.has(t.target).length || s.add(r).removeClass(o.active)
            }
        }))
    }, t.Ani.formElm = function(t, n) {
        var i = {
                focus: "focused"
            },
            a = n ? p(i, n) : i;
        e(t).exists() && e(t).each(function() {
            var t = e(this);
            t.val() && t.parent().addClass(a.focus), t.on({
                focus: function() {
                    t.parent().addClass(a.focus)
                },
                blur: function() {
                    t.val() || t.parent().removeClass(a.focus)
                }
            })
        })
    }, t.Validate = function(t, n) {
        e(t).exists() && e(t).each(function() {
            var t = {
                    errorElement: "span"
                },
                i = n ? p(t, n) : t;
            e(this).validate(i)
        })
    }, t.Validate.init = function() {
        t.Validate(".form-validate", {
            errorElement: "span",
            errorClass: "invalid",
            errorPlacement: function(t, e) {
                t.appendTo(e.parent())
            }
        })
    }, t.Dropzone = function(t, n) {
        e(t).exists() && e(t).each(function() {
            var t = {
                    autoDiscover: !1
                },
                i = n ? p(t, n) : t;
            e(this).addClass("dropzone").dropzone(i)
        })
    }, t.DataTable = function(t, n) {
        e(t).exists() && e(t).each(function() {
            var t = e(this).data("auto-responsive"),
                i = {
                    responsive: !0,
                    autoWidth: !1,
                    order: [],
                    dom: '<"row justify-between g-2"<"col-7 col-sm-6 text-left"f><"col-5 col-sm-6 text-right"<"datatable-filter"l>>><"datatable-wrap my-3"t><"row align-items-center"<"col-7 col-sm-12 col-md-9"p><"col-5 col-sm-12 col-md-3 text-left text-md-right"i>>',
                    language: {
                        search: "",
                        searchPlaceholder: "Type in to Search",
                        lengthMenu: "<span class='d-none d-sm-inline-block'>Show</span><div class='form-control-select'> _MENU_ </div>",
                        info: "_START_ - _END_ of _TOTAL_",
                        infoEmpty: "No records found",
                        infoFiltered: "( Total _MAX_  )",
                        paginate: {
                            first: "First",
                            last: "Last",
                            next: "Next",
                            previous: "Prev"
                        }
                    }
                },
                a = n ? p(i, n) : i;
            a = !1 === t ? p(a, {
                responsive: !1
            }) : a, e(this).DataTable(a)
        })
    }, t.BS.ddfix = function(t, n) {
        var i = n || "a:not(.clickable), button:not(.clickable), a:not(.clickable) *, button:not(.clickable) *";
        e(t || ".dropdown-menu").on("click", function(t) {
            e(t.target).is(i) || t.stopPropagation()
        })
    }, t.BS.tabfix = function(t) {
        e(t || '[data-toggle="modal"]').on("click", function() {
            var t = e(this),
                n = t.data("target"),
                a = t.attr("href"),
                o = t.data("tab-target"),
                s = n ? i.find(n) : i.find(a);
            if (o && "#" !== o && s) s.find('[href="' + o + '"]').tab("show");
            else if (s) {
                var r = s.find(".nk-nav.nav-tabs"),
                    l = e(r[0]).find('[data-toggle="tab"]');
                e(l[0]).tab("show")
            }
        })
    }, t.Knob.init = function() {
        t.Knob(".knob", {
            readOnly: !0,
            lineCap: "round"
        }), t.Knob(".knob-half", {
            angleOffset: -90,
            angleArc: 180,
            readOnly: !0,
            lineCap: "round"
        })
    }, t.Range.init = function() {
        t.Range(".form-range-slider")
    }, t.Select2.init = function() {
        t.Select2(".form-select")
    }, t.Slider.init = function() {
        t.Slick(".slider-init")
    }, t.Dropzone.init = function() {
        t.Dropzone(".upload-zone", {
            url: "/images"
        })
    }, t.DataTable.init = function() {
        t.DataTable(".datatable-init", {
            responsive: {
                details: !0
            }
        }), e.fn.DataTable.ext.pager.numbers_length = 7
    }, t.OtherInit = function() {
        t.ClassBody(), t.PassSwitch(), t.CurrentLink(), t.LinkOff(".is-disable"), t.ClassNavMenu()
    }, t.Ani.init = function() {
        t.Ani.formElm(".form-control-animate"), t.Ani.formSearch(".toggle-search")
    }, t.BS.init = function() {
        t.BS.menutip("a.nk-menu-link"), t.BS.tooltip(".nk-tooltip"), t.BS.tooltip(".btn-tooltip", {
            placement: "top"
        }), t.BS.tooltip('[data-toggle="tooltip"]'), t.BS.tooltip(".tipinfo,.nk-menu-tooltip", {
            placement: "right"
        }), t.BS.popover('[data-toggle="popover"]'), t.BS.progress("[data-progress]"), t.BS.fileinput(".custom-file-input"), t.BS.modalfix(), t.BS.ddfix(), t.BS.tabfix()
    }, t.Picker.init = function() {
        t.Picker.date(".date-picker"), t.Picker.dob(".date-picker-alt"), t.Picker.time(".time-picker")
    }, t.Addons.Init = function() {
        t.Knob.init(), t.Range.init(), t.Select2.init(), t.Dropzone.init(), t.Slider.init(), t.DataTable.init()
    }, t.TGL.init = function() {
        t.TGL.content(".toggle"), t.TGL.expand(".toggle-expand"), t.TGL.expand(".toggle-opt", {
            toggle: !1
        }), t.TGL.showmenu(".nk-nav-toggle"), t.TGL.ddmenu("." + o + "-toggle", {
            self: o + "-toggle",
            child: o + "-sub"
        })
    }, t.BS.modalOnInit = function() {
        e(".modal").on("shown.bs.modal", function() {
            t.Select2.init(), t.Validate.init()
        })
    }, t.init = function() {
        t.coms.docReady.push(t.OtherInit), t.coms.docReady.push(t.Prettify), t.coms.docReady.push(t.ColorBG), t.coms.docReady.push(t.ColorTXT), t.coms.docReady.push(t.Copied), t.coms.docReady.push(t.Ani.init), t.coms.docReady.push(t.TGL.init), t.coms.docReady.push(t.BS.init), t.coms.docReady.push(t.Validate.init), t.coms.docReady.push(t.Picker.init), t.coms.docReady.push(t.Addons.Init)
    }, t.init()
}(NioApp, jQuery);