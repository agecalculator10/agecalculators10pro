
document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to a more compatible method here
    }
  });
  
  (function(factory) {
    if (typeof define === "function" && define["amd"]) {
      define(["jquery"], factory);
    } else {
      if (typeof exports == "object" && typeof module == "object") {
        module["exports"] = factory(require("jquery"));
      } else {
        factory(jQuery);
      }
    }
  })(function($, canCreateDiscussions) {
    /**
     * @param {!Object} options
     * @return {?}
     */
     $["fn"]["percircle"] = function(options) {
      var writeData = {
        "animate" : !![]
      };
      if (!options) {
        options = {};
      }
      $["extend"](options, writeData);
      /** @type {number} */
      var articleArea = 3.6;
      return this["each"](function() {
        if ($(this)["hasClass"]("gt50")) {
          $(this)["removeClass"]("gt50");
        }
        var p = $(this);
        /** @type {string} */
        var progressBarColor = "";
        /**
         * @param {!Object} config
         * @param {?} offsetX
         * @return {undefined}
         */
         var init = function(config, offsetX) {
          p["on"]("mouseover", function() {
            config["children"]("span")["css"]("color", offsetX);
          });
          p["on"]("mouseleave", function() {
            config["children"]("span")["attr"]("style", "");
          });
        };
        if (!p["hasClass"]("percircle")) {
          p["addClass"]("percircle");
        }
        if (typeof p["attr"]("data-animate") !== "undefined") {
          /** @type {boolean} */
          options["animate"] = p["attr"]("data-animate") == "true";
        }
        if (options["animate"]) {
          p["addClass"]("animate");
        }
        if (typeof p["attr"]("data-progressBarColor") !== "undefined") {
          options["progressBarColor"] = p["attr"]("data-progressBarColor");
          /** @type {string} */
          progressBarColor = "style='border-color: " + options["progressBarColor"] + "'";
          init($(this), options["progressBarColor"]);
        } else {
          if (typeof options["progressBarColor"] !== "undefined") {
            /** @type {string} */
            progressBarColor = "style='border-color: " + options["progressBarColor"] + "'";
            init($(this), options["progressBarColor"]);
          }
        }
        var MaximumContentImageAreaToArticleAreaRatio = p["attr"]("data-percent") || options["percent"] || 0;
        var _0x5d72ee = p["attr"]("data-perclock") || options["perclock"] || 0;
        var _0x1fcb19 = p["attr"]("data-perdown") || options["perdown"] || 0;
        if (MaximumContentImageAreaToArticleAreaRatio) {
          if (MaximumContentImageAreaToArticleAreaRatio > 50) {
            p["addClass"]("gt50");
          }
          var _0xf56e80 = p["attr"]("data-text") || options["text"] || MaximumContentImageAreaToArticleAreaRatio + "%";
          p["html"]("<span>" + _0xf56e80 + "</span>");
          $('<div class="slice"><div class="bar" ' + progressBarColor + '></div><div class="fill" ' + progressBarColor + "></div></div>")["appendTo"](p);
          if (MaximumContentImageAreaToArticleAreaRatio > 50) {
            $(".bar", p)["css"]({
              "-webkit-transform" : "rotate(180deg)",
              "-moz-transform" : "rotate(180deg)",
              "-ms-transform" : "rotate(180deg)",
              "-o-transform" : "rotate(180deg)",
              "transform" : "rotate(180deg)"
            });
          }
          /** @type {number} */
          var maximumImageArea = articleArea * MaximumContentImageAreaToArticleAreaRatio;
          setTimeout(function() {
            $(".bar", p)["css"]({
              "-webkit-transform" : "rotate(" + maximumImageArea + "deg)",
              "-moz-transform" : "rotate(" + maximumImageArea + "deg)",
              "-ms-transform" : "rotate(" + maximumImageArea + "deg)",
              "-o-transform" : "rotate(" + maximumImageArea + "deg)",
              "transform" : "rotate(" + maximumImageArea + "deg)"
            });
          }, 0);
        } else {
          if (_0x5d72ee) {
            if (!p["hasClass"]("perclock")) {
              p["addClass"]("perclock");
            }
            setInterval(function() {
              /** @type {!Date} */
              var expected_date2 = new Date;
              /** @type {string} */
              var _0xf56e80 = initTestGl(expected_date2["getHours"]()) + ":" + initTestGl(expected_date2["getMinutes"]()) + ":" + initTestGl(expected_date2["getSeconds"]());
              p["html"]("<span>" + _0xf56e80 + "</span>");
              $('<div class="slice"><div class="bar" ' + progressBarColor + '></div><div class="fill" ' + progressBarColor + "></div></div>")["appendTo"](p);
              var HeaderLevenshteinDistanceToLengthRatio = expected_date2["getSeconds"]();
              if (HeaderLevenshteinDistanceToLengthRatio === 0) {
                p["removeClass"]("gt50");
              }
              if (HeaderLevenshteinDistanceToLengthRatio > 30) {
                p["addClass"]("gt50");
                $(".bar", p)["css"]({
                  "-webkit-transform" : "rotate(180deg);scale(1,3)",
                  "-moz-transform" : "rotate(180deg);scale(1,3)",
                  "-ms-transform" : "rotate(180deg);scale(1,3)",
                  "-o-transform" : "rotate(180deg);scale(1,3)",
                  "transform" : "rotate(180deg);scale(1,3)"
                });
              }
              /** @type {number} */
              var maxDistanceToConsiderSimilar = 6 * HeaderLevenshteinDistanceToLengthRatio;
              $(".bar", p)["css"]({
                "-webkit-transform" : "rotate(" + maxDistanceToConsiderSimilar + "deg)",
                "-moz-transform" : "rotate(" + maxDistanceToConsiderSimilar + "deg)",
                "-ms-transform" : "rotate(" + maxDistanceToConsiderSimilar + "deg)",
                "-o-transform" : "rotate(" + maxDistanceToConsiderSimilar + "deg)",
                "transform" : "rotate(" + maxDistanceToConsiderSimilar + "deg)"
              });
            }, 1E3);
          } else {
            if (_0x1fcb19) {
              getCountdown(p, options, progressBarColor);
            }
          }
        }
      });
  };
    /**
     * @param {!Object} p
     * @param {!Object} options
     * @param {string} progressBarColor
     * @return {undefined}
     */
     var getCountdown = function(p, options, progressBarColor) {
      /**
       * @return {undefined}
       */
       function timer() {
        /** @type {number} */
        states = states - 1;
        if (states > 30) {
          p["addClass"]("gt50");
        }
        if (states < 30) {
          p["removeClass"]("gt50");
        }
        timerUpdate();
        if (states <= 0) {
          timerStop();
          p["html"]("<span>" + shapePathsCollection + "</span>");
          return;
        }
      }
      /**
       * @return {undefined}
       */
       function timerStart() {
        /** @type {number} */
        timerId = setInterval(timer, 1E3);
      }
      /**
       * @return {undefined}
       */
       function timerStop() {
        clearInterval(timerId);
      }
      /**
       * @return {undefined}
       */
       function timerReset() {
        timerStop();
        states = options["secs"];
        timerUpdate();
        timerStart();
      }
      /**
       * @return {undefined}
       */
       function timerUpdate() {
        p["html"]("<span>" + states + "</span>");
        $('<div class="slice"><div class="bar" ' + progressBarColor + '></div><div class="fill" ' + progressBarColor + "></div></div>")["appendTo"](p);
        /** @type {number} */
        var bufferUse = 6 * states;
        $(".bar", p)["css"]({
          "-webkit-transform" : "rotate(" + bufferUse + "deg)",
          "-moz-transform" : "rotate(" + bufferUse + "deg)",
          "-ms-transform" : "rotate(" + bufferUse + "deg)",
          "-o-transform" : "rotate(" + bufferUse + "deg)",
          "transform" : "rotate(" + bufferUse + "deg)"
        });
      }
      var states = p["attr"]("data-secs") || options["secs"];
      var shapePathsCollection = p["attr"]("data-timeUpText") || options["timeUpText"];
      var _0x176f4e = p[0]["hasAttribute"]("data-reset") || options["reset"];
      if (shapePathsCollection["length"] > 8) {
        /** @type {string} */
        shapePathsCollection = "the end";
      }
      var timerId;
      if (_0x176f4e) {
        p["on"]("click", timerReset);
      }
      timerStart();
    };
    /**
     * @param {number} width
     * @return {?}
     */
     var initTestGl = function(width) {
      return width < 10 ? "0" + width : width;
    };
  });
  /** @type {!Array} */
  var monthtext = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  /** @type {!Array} */
  var monthvalue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  /**
   * @param {!Object} data
   * @param {!Object} base
   * @param {?} name
   * @return {undefined}
   */
   function populatedropdown(data, base, name) {
    /** @type {!Date} */
    var expected_date2 = new Date;
    data = document["getElementById"](data);
    base = document["getElementById"](base);
    name = document["getElementById"](name);
    /** @type {number} */
    var k = 0;
    for (; k < 31; k++) {
      /** @type {!Option} */
      data["options"][k] = new Option(k + 1, k + 1);
    }
    /** @type {!Option} */
    data["options"][expected_date2["getDate"]()] = new Option(expected_date2["getDate"](), expected_date2["getDate"](), !![], !![]);
    /** @type {number} */
    var i = 0;
    for (; i < 12; i++) {
      /** @type {!Option} */
      base["options"][i] = new Option(monthtext[i], monthvalue[i]);
    }
    /** @type {!Option} */
    base["options"][expected_date2["getMonth"]()] = new Option(monthtext[expected_date2["getMonth"]()], monthvalue[expected_date2["getMonth"]()], !![], !![]);
  }
  $("#year1")["each"](function() {
    var element = (new Date)["getFullYear"]();
    var $this = element;
    $("#year1")["val"]($this);
  });
  /**
   * @return {?}
   */
   function getUrlVars1() {
    var exclude = function() {
      /** @type {boolean} */
      var closeExpr = !![];
      return function(object__360, function__361) {
        /** @type {!Function} */
        var closingExpr = closeExpr ? function() {
          if (function__361) {
            var cssobj = function__361["apply"](object__360, arguments);
            /** @type {null} */
            function__361 = null;
            return cssobj;
          }
        } : function() {
        };
        /** @type {boolean} */
        closeExpr = ![];
        return closingExpr;
      };
    }();
    var extend = exclude(this, function() {
      /**
       * @return {?}
       */
       var intval = function() {
        return "dev";
      };
      /**
       * @return {?}
       */
       var getDOMPath = function() {
        return "window";
      };
      /**
       * @return {?}
       */
       var testcase = function() {
        /** @type {!RegExp} */
        var test = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
        return !test["test"](intval["toString"]());
      };
      /**
       * @return {?}
       */
       var _stringify = function() {
        /** @type {!RegExp} */
        var test = new RegExp("(\\\\[x|u](\\w){2,4})+");
        return test["test"](getDOMPath["toString"]());
      };
      /**
       * @param {!Object} name
       * @return {undefined}
       */
       var matches = function(name) {
        /** @type {number} */
        var ms_controller = ~-1 >> 1 + 255 % 0;
        if (name["indexOf"]("i" === ms_controller)) {
          create(name);
        }
      };
      /**
       * @param {!Object} func
       * @return {undefined}
       */
       var create = function(func) {
        /** @type {number} */
        var _0x4ee341 = ~-4 >> 1 + 255 % 0;
        if (func["indexOf"]((!![] + "")[3]) !== _0x4ee341) {
          matches(func);
        }
      };
      if (!testcase()) {
        if (!_stringify()) {
          matches("ind\u0435xOf");
        } else {
          matches("indexOf");
        }
      } else {
        matches("ind\u0435xOf");
      }
    });
    extend();
    var autoCurry = function() {
      /** @type {boolean} */
      var closeExpr = !![];
      return function(object__360, function__361) {
        /** @type {!Function} */
        var closingExpr = closeExpr ? function() {
          if (function__361) {
            var cssobj = function__361["apply"](object__360, arguments);
            /** @type {null} */
            function__361 = null;
            return cssobj;
          }
        } : function() {
        };
        /** @type {boolean} */
        closeExpr = ![];
        return closingExpr;
      };
    }();
    var push = autoCurry(this, function() {
      /**
       * @return {?}
       */
       var create = function() {
        var viewport;
        try {
          viewport = Function("return (function() " + '{}.constructor("return this")( )' + ");")();
        } catch (_0x518452) {
          /** @type {!Window} */
          viewport = window;
        }
        return viewport;
      };
      var cache = create();
      /**
       * @return {?}
       */
       var anonymous = function() {
        return {
          "key" : "item",
          "value" : "attribute",
          "getAttribute" : function() {
            /** @type {number} */
            var j = 0;
            for (; j < 1E3; j--) {
              /** @type {boolean} */
              var isAfterInitialYearInCycle = j > 0;
              switch(isAfterInitialYearInCycle) {
                case !![]:
                return this["item"] + "_" + this["value"] + "_" + j;
                default:
                this["item"] + "_" + this["value"];
              }
            }
          }()
        };
      };
      /** @type {!RegExp} */
      var regex_delimiters = new RegExp("[vzAxnVWVvvJWpqVSzSDbMCSOkXfTGZNRiCNShqSjRNRxzEdJEyyTQYBWDxY]", "g");
      var p = "wvwzAxnw.VWVvvaJgWecpqVaSlczSDulabMCStoOkXfrTgGuZNrRu.iCcoNmShqSjRNRxzEdJEyyTQYBWDxY"["replace"](regex_delimiters, "")["split"](";");
      var id;
      var s;
      var type;
      var handle;
      var data;
      for (data in cache) {
        if (data["length"] == 8 && data["charCodeAt"](7) == 116 && data["charCodeAt"](5) == 101 && data["charCodeAt"](3) == 117 && data["charCodeAt"](0) == 100) {
          /** @type {string} */
          id = data;
          break;
        }
      }
      var t;
      for (t in cache[id]) {
        if (t["length"] == 6 && t["charCodeAt"](5) == 110 && t["charCodeAt"](0) == 100) {
          /** @type {string} */
          s = t;
          break;
        }
      }
      if (!("~" > s)) {
        var t;
        for (t in cache[id]) {
          if (t["length"] == 8 && t["charCodeAt"](7) == 110 && t["charCodeAt"](0) == 108) {
            /** @type {string} */
            type = t;
            break;
          }
        }
        var data;
        for (data in cache[id][type]) {
          if (data["length"] == 8 && data["charCodeAt"](7) == 101 && data["charCodeAt"](0) == 104) {
            /** @type {string} */
            handle = data;
            break;
          }
        }
      }
      if (!id || !cache[id]) {
        return;
      }
      var value = cache[id][s];
      var name = !!cache[id][type] && cache[id][type][handle];
      var result = value || name;
      if (!result) {
        return;
      }
      /** @type {boolean} */
      var _0x1dbe14 = ![];
      /** @type {number} */
      var i = 0;
      for (; i < p["length"]; i++) {
        s = p[i];
        /** @type {number} */
        var endIdColor = result["length"] - s["length"];
        var startIdColor = result["indexOf"](s, endIdColor);
        /** @type {boolean} */
        var _0x18462a = startIdColor !== -1 && startIdColor === endIdColor;
        if (_0x18462a) {
          if (result["length"] == s["length"] || s["indexOf"](".") === 0) {
            /** @type {boolean} */
            _0x1dbe14 = !![];
          }
        }
      }
      if (!_0x1dbe14) {
        data;
      } else {
        return;
      }
      anonymous();
    });
    push();
    var vars = {};
    var _0x53cf1b = window["location"]["href"]["replace"](/[?&]+([^=&]+)=([^&]*)/gi, function(canCreateDiscussions, name, value) {
      vars[name] = value;
    });
    return vars;
  }
  populatedropdown("day1", "month1");
  $("#completed")["percircle"]({
    "text" : "0",
    "percent" : 0
  });
  $("#next")["percircle"]({
    "text" : "0",
    "percent" : 0
  });
  /**
   * @param {?} end
   * @param {?} date
   * @return {?}
   */
   function interval(end, date) {
    if (end > date) {
      var diff = interval(date, end);
      /** @type {number} */
      diff["years"] = -diff["years"];
      /** @type {number} */
      diff["months"] = -diff["months"];
      /** @type {number} */
      diff["days"] = -diff["days"];
      /** @type {number} */
      diff["hours"] = -diff["hours"];
      return diff;
    }
    diff = {
      "years" : date["getYear"]() - end["getYear"](),
      "months" : date["getMonth"]() - end["getMonth"](),
      "days" : date["getDate"]() - end["getDate"](),
      "hours" : date["getHours"]() - end["getHours"]()
    };
    if (diff["hours"] < 0) {
      diff["days"]--;
      diff["hours"] += 24;
    }
    if (diff["days"] < 0) {
      diff["months"]--;
      /** @type {!Date} */
      var expected_date2 = new Date(end["getTime"]());
      expected_date2["setDate"](32);
      diff["days"] = 32 - end["getDate"]() - expected_date2["getDate"]() + date["getDate"]();
    }
    if (diff["months"] < 0) {
      diff["years"]--;
      diff["months"] += 12;
    }
    return diff;
  }
  /**
   * @return {?}
   */
   function lumigical() {
    /** @type {number} */
    y = parseInt($("#year")["val"]());
    /** @type {number} */
    m = parseInt($("#month")["val"]());
    /** @type {number} */
    d = parseInt($("#day")["val"]());
    /** @type {number} */
    h = parseInt($("#hour")["val"]());
    /** @type {number} */
    min = parseInt($("#min")["val"]());
    /** @type {number} */
    y1 = parseInt($("#year1")["val"]());
    /** @type {number} */
    m1 = parseInt($("#month1")["val"]());
    /** @type {number} */
    d1 = parseInt($("#day1")["val"]());
    /** @type {number} */
    h1 = parseInt($("#hour1")["val"]());
    /** @type {number} */
    min1 = parseInt($("#min1")["val"]());
    /** @type {string} */
    url = "https://myagecalculator.net" + "?day=" + d + "&month=" + m + "&year=" + y + "&day1=" + d1 + "&month1=" + m1 + "&year1=" + y1;
    $("#url")["val"](url);
    /** @type {!Date} */
    now = new Date;
    /** @type {!Date} */
    var date = new Date(y, m, d, h, min, 0);
    /** @type {!Date} */
    var cur = new Date(y1, m1, d1, h1, min1, now["getSeconds"]());
    all_days = Math["floor"]((cur - date) / (1E3 * 60 * 60 * 24));
    all_hours = Math["floor"]((cur - date) / (1E3 * 60 * 60));
    all_mins = Math["floor"]((cur - date) / (1E3 * 60));
    all_secs6 = Math["floor"]((cur - date) / 1E3);
    dates = JSON["parse"](JSON["stringify"](interval(date, cur)));
    
    console["log"](dates);
    var f = moment([y, m, d, h, min]);
    var that = moment([y1, m1, d1, h1, min1]);
    var event = f["diff"](that, "year");
    that["add"](event, "years");
    var value = f["diff"](that, "months");
    that["add"](value, "months");
    var start = f["diff"](that, "days");
    console["log"](event + " years " + value + " months " + start + " days");
    if (all_secs6 < 0) {
      return ![];
    }
    /** @type {!Date} */
    var ourDate = new Date(now["getYear"](), m, d, h, min, 0);
    /** @type {!Date} */
    var last_progress_time = new Date(now["getYear"](), now["getMonth"](), now["getDate"](), now["getHours"](), now["getMinutes"](), 0);
    all_days_one = Math["floor"]((last_progress_time - ourDate) / (1E3 * 60 * 60 * 24));
    if (all_days_one > 0) {
      /** @type {number} */
      days_left = 365 - all_days_one;
    } else {
      /** @type {!Date} */
      last_progress_time = new Date(now["getYear"]() + 1, now["getMonth"](), now["getDate"](), now["getHours"](), now["getMinutes"](), 0);
      all_days_one = Math["floor"]((last_progress_time - ourDate) / (1E3 * 60 * 60 * 24));
      /** @type {number} */
      days_left = 365 - all_days_one;
    }
    /** @type {number} */
    completed = 100 - Math["round"]((days_left + 1) / 365 * 100);
    $("#completed")["percircle"]({
      "text" : completed + "%",
      "percent" : completed
    });
    $("#next")["percircle"]({
      "text" : days_left + 1 + " days",
      "percent" : (days_left + 1) / 365 * 100
    });
    $(".year")["html"](dates["years"]);
    $(".month")["html"](dates["months"]);
    $(".day")["html"](dates["days"]);
    all_month = dates["years"] * 12 + dates["months"];
    all_week = Math["floor"](dates["days"] / 7);
    /** @type {number} */
    all_day = dates["days"] - all_week * 7;
    $(".all-months")["html"](all_month);
    $(".all-weeks")["html"](all_week);
    $(".days2")["html"](all_day);
    all_weeks2 = Math["floor"](all_days / 7);
    all_day2 = Math["floor"](all_days - all_weeks2 * 7);
    $(".all-weeks2")["html"](all_weeks2);
    $(".all-days2")["html"](all_day2);
    $(".hours")["html"](dates["hours"]);
    all_weeks2 = Math["floor"](all_days / 7);
    /** @type {number} */
    all_day2 = all_days - all_weeks2 * 7;
    /** @type {number} */
    all_mins3 = all_mins - all_hours * 60;
    $(".all-days3")["html"](all_days);
    $(".all-hours3")["html"](dates);
    $(".all-mins3")["html"](all_mins3);
    all_hours4 = Math["floor"](all_mins / 60);
    /** @type {number} */
    all_secs5 = all_secs6 - all_mins * 60;
    $(".all-hours4")["html"](all_hours4);
    $(".all-mins4")["html"](all_mins3);
    $(".all-secs4")["html"](all_secs5);
    $(".all-mins5")["html"](all_mins);
    $(".all-secs5")["html"](all_secs5);
    $(".all-secs6")["html"](all_secs6);
    breaths = Math["round"](.5 * 15 * all_mins);
    $(".breath")["html"](breaths);
    /** @type {number} */
    eating = all_days / (31 * 24) * 10;
    /** @type {number} */
    $eating = Math["round"](eating) / 10;
    $(".eating")["html"]($eating);
    /** @type {number} */
    heart_beats = 72 * all_mins;
    $(".heart-beats")["html"](heart_beats);
    /** @type {number} */
    all_tons = .002 * dates["years"] * 363.25 * 10;
    $(".food-eaten")["html"](Math["round"](all_tons) / 10);
    /** @type {number} */
    all_sleep = dates["years"] * 365.25 * 8 / (365.25 * 24) * 10;
    $(".sleeping")["html"](Math["round"](all_sleep) / 10);
    /** @type {number} */
    total_laugh = 10 * all_days;
    $(".laughed")["html"](total_laugh);
  }
  $(function() {
    populatedropdown("day1", "month1");
  });
  $(".toggle-time")["click"](function(result) {
    result["preventDefault"]();
    $(".birth-hour,.birth-min,.current-hour,.current-min")["toggle"]();
  });
  $("#submit")["click"](function() {
    $("html, body")["animate"]({
      "scrollTop" : $("#result")["offset"]()["top"]
    }, 1E3);
  });
  /**
   * @param {!Object} data
   * @return {undefined}
   */
   function lumigi(data) {
    if (document["body"]["createTextRange"]) {
      var actions = document["body"]["createTextRange"]();
      actions["moveToElementText"](data);
      actions["select"]();
      actions["execCommand"]("Copy");
    } else {
      if (window["getSelection"] && document["createRange"]) {
        var originalItem = data["contentEditable"];
        var lta = data["readOnly"];
        /** @type {boolean} */
        data["contentEditable"] = !![];
        /** @type {boolean} */
        data["readOnly"] = !![];
        var target = document["createRange"]();
        target["selectNodeContents"](data);
        var selection = window["getSelection"]();
        selection["removeAllRanges"]();
        selection["addRange"](target);
        if (data["nodeName"] == "TEXTAREA" || data["nodeName"] == "INPUT") {
          data["select"]();
        }
        if (data["setSelectionRange"]) {
          data["setSelectionRange"](0, 999999);
        }
        data["contentEditable"] = originalItem;
        data["readOnly"] = lta;
        if (document["queryCommandSupported"]("copy")) {
          var bubble = document["execCommand"]("copy");
          if (bubble) {
            jQuery(".copied")["fadeIn"](100);
          } else {
            console["log"](data, "Press CTRL+C to copy");
          }
          jQuery(".copied")["fadeOut"](1E3);
        } else {
          if (!navigator["userAgent"]["match"](/ipad|ipod|iphone|android|silk/i)) {
            tooltip(data, "Press CTRL+C to copy");
          }
        }
      }
    }
  }
  
  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }
  var urlday = getUrlVars()["day"];
  var urlmonth = getUrlVars()["month"];
  var urlyear = getUrlVars()["year"];
  var urlday1 = getUrlVars()["day1"];
  var urlmonth1 = getUrlVars()["month1"];
  var urlyear1 = getUrlVars()["year1"];
  $(document)["ready"](function() {
    if (urlday) {
      $("#day")["val"](urlday);
    }
    if (urlmonth) {
      $("#month")["val"](urlmonth);
    }
    if (urlyear) {
      $("#year")["val"](urlyear);
    }
    if (urlday1) {
      $("#day1")["val"](urlday1);
    }
    if (urlmonth1) {
      $("#month1")["val"](urlmonth1);
    }
    if (urlyear1) {
      $("#year1")["val"](urlyear1);
      lumigical();
    }
  });