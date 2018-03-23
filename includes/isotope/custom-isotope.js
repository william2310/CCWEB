$(window).load(function() {
    var e = $(".grid");
    colWidth = function() {
        var t = e.width(),
            n = 1,
            r = 0;
        if (t > 1440) {
            n = 7
        } else if (t > 1365) {
            n = 5
        } else if (t > 1279) {
            n = 5
        } else if (t > 1023) {
            n = 5
        } else if (t > 767) {
            n = 3
        } else if (t > 479) {
            n = 2
        }
        r = Math.floor(t / n);
        e.find(".grid-item").each(function() {
            var e = $(this);
            if (e.hasClass("item-wide")) {
                if (t < 480) {
                    $(".item-wide").css({
                        width: r - 4 + "px",
                        height: Math.round((r - 4) * .7777777) + "px"
                    });
                    $(".item-wide img").css({
                        width: r - 4 + "px",
                        height: "auto"
                    })
                } else {
                    $(".item-wide").css({
                        width: r * 2 - 4 + "px",
                        height: Math.round((r * 2 - 4) * .7777777) + "px"
                    });
                    $(".item-wide img").css({
                        width: r * 2 - 4 + "px",
                        height: "auto"
                    })
                }
            }
            if (e.hasClass("item-small")) {
                $(".item-small").css({
                    width: r - 4 + "px",
                    height: Math.round((r - 4) * .7777777) + "px"
                });
                $(".item-small img").css({
                    width: r - 4 + "px",
                    height: "auto"
                })
            }
            if (e.hasClass("item-long")) {
                if (t < 480) {
                    $(".item-long").css({
                        width: r - 4 + "px",
                        height: Math.round((r - 4) * .7777777 / 2) + "px"
                    });
                    $(".item-long img").css({
                        width: r - 4 + "px",
                        height: "auto"
                    })
                } else {
                    $(".item-long").css({
                        width: r * 2 - 4 + "px",
                        height: Math.round((r - 4) * .7777777) + "px"
                    });
                    $(".item-long img").css({
                        width: r * 2 - 4 + "px",
                        height: "auto"
                    })
                }
            }
            if (e.hasClass("item-high")) {
                $(".item-high").css({
                    width: r - 4 + "px",
                    height: Math.round((r * 2 - 4) * .7777777) + "px"
                });
                $(".item-high img").css({
                    width: r - 4 + "px",
                    height: "auto"
                })
            }
        });
        return r
    };
    gridIsotope = function() {
        e.isotope({
            layoutMode: "masonry",
            itemSelector: ".grid-item",
            animationEngine: "jquery",
            resizable: false,
            masonry: {
                columnWidth: colWidth(),
                gutterWidth: 0
            }
        })
    };
    gridIsotope();
    $(window).smartresize(gridIsotope);
    var t = $("#options .option-set"),
        n = t.find("a");
    n.click(function() {
        var t = $(this);
        if (t.hasClass("selected")) {
            return false
        }
        var n = t.parents(".option-set");
        n.find(".selected").removeClass("selected");
        t.addClass("selected");
        var r = {}, i = n.attr("data-option-key"),
            s = t.attr("data-option-value");
        s = s === "false" ? false : s;
        r[i] = s;
        if (i === "layoutMode" && typeof changeLayoutMode === "function") {
            changeLayoutMode(t, r)
        } else {
            e.isotope(r)
        }
        return false
    });
    $.Isotope.prototype._getMasonryGutterColumns = function() {
        var e = this.options.masonry && this.options.masonry.gutterWidth || 0;
        containerWidth = this.element.width();
        this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth || this.$filteredAtoms.outerWidth(true) || containerWidth;
        this.masonry.columnWidth += e;
        this.masonry.cols = Math.floor((containerWidth + e) / this.masonry.columnWidth);
        this.masonry.cols = Math.max(this.masonry.cols, 1)
    };
    $.Isotope.prototype._masonryReset = function() {
        this.masonry = {};
        this._getMasonryGutterColumns();
        var e = this.masonry.cols;
        this.masonry.colYs = [];
        while (e--) {
            this.masonry.colYs.push(0)
        }
    };
    $.Isotope.prototype._masonryResizeChanged = function() {
        var e = this.masonry.cols;
        this._getMasonryGutterColumns();
        return this.masonry.cols !== e
    };
})
