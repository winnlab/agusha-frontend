if (window.ODKL === undefined) {
	window.ODKL = {P: {w: 600, h: 360, l: (screen.width / 2) - (300), t: (screen.height / 2) - (180)}, Share: function (c) {
		if (c.tagName.toLowerCase() != "a") {
			return;
		}
		var d = 1000;
		var a = c.className ? c.className.toLowerCase() : null;
		if (a) {
			if (a.indexOf("odkl-klass-stat") > -1) {
				d = "1";
			} else {
				if (a.indexOf("odkl-klass") > -1) {
					d = "0";
				}
			}
		}
		var b = a && a.indexOf("odkl-current") > -1 ? window.location.href : c.href;
		ODKL.OpenShareWnd(d, b);
	}, OpenShareWnd: function (e, b) {
		if (!b || b.length < 2) {
			return;
		}
		if (b.charAt(b.length - 1) == "/") {
			b = b.substring(0, b.length - 1);
		}
		var c = ODKL.getShareHost() + "/dk?st.cmd=addShare&st.s=" + e + "&st._surl=" + encodeURIComponent(b);
		var a = window.open("", "_blank", "top=" + ODKL.P.t + ",left=" + ODKL.P.l + ",width=" + ODKL.P.w + ",height=" + ODKL.P.h + ",resizable=1");
		var d = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html lang="ru" xml:lang="ru" xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="content-type" content="text/html; charset=UTF-8" /><title>&#1054;&#1076;&#1085;&#1086;&#1082;&#1083;&#1072;&#1089;&#1089;&#1085;&#1080;&#1082;&#1080;.ru ÐžÐ¿Ð¿</title></head><body style="margin:0;padding:0;"><div style="width:100%;padding:17px 0;text-align:center;background-color:#F93;color:white;font:normal 14px/16px verdana">&#1055;&#1088;&#1086;&#1080;&#1089;&#1093;&#1086;&#1076;&#1080;&#1090; &#1079;&#1072;&#1075;&#1088;&#1091;&#1079;&#1082;&#1072;...</div></body></html>';
		a.document.write(d);
		a.location.href = c;
	}, getShareHost: function () {
		if (!ODKL.shareUrl) {
			if (!ODKL.HOST) {
				ODKL.shareUrl = "http://www.odnoklassniki.ru";
			} else {
				var a = ODKL.HOST.substring(0, 7);
				if (a != "http://") {
					ODKL.shareUrl = "http://" + ODKL.HOST;
				} else {
					ODKL.shareUrl = ODKL.HOST;
				}
			}
		}
		return ODKL.shareUrl;
	}, showComments: function (d, a) {
		if (d == null) {
			return;
		}
		var c = document.getElementById(d);
		if (c == null) {
			return;
		}
		c.style.position = "relative";
		var f = document.createElement("span");
		var b = d + "C";
		f.id = b;
		c.appendChild(f);
		f.className = "odkl-oc-comment-form";
		f.innerHTML = commentHtml;
		if (navigator.userAgent.indexOf("MSIE") > -1) {
			if (navigator.userAgent.indexOf("7.0") || navigator.userAgent.indexOf("6.0")) {
				f.style.height = "81px";
			}
			f.style.width = "192px";
		}
		ODKL.positionComments(f);
		f.style.visibility = "visible";
		var e = f.getElementsByTagName("textarea");
		if (!window.opera && e && e.length > 0) {
			e[0].focus();
		}
	}, postComment: function (d, c) {
		var e = c.parentNode;
		var a = e.parentNode;
		var f = a.id;
		var j = e.getElementsByTagName("textarea");
		if (j) {
			var g = j[0].value;
			if (g) {
				g = escape(g);
				var b = ODKL.createMessageContainer(f, a, true);
				var i = ODKL.getShareHost() + "/dk?st.cmd=extOneClickLike&drt=1&uid=" + f + "&ocsid=" + d + "&occmnt=" + g;
				var h = document.createElement("script");
				h.type = "text/javascript";
				b.appendChild(h);
				h.src = i;
			}
		}
		return false;
	}, hideComment: function (a) {
		var d = document.getElementById(a);
		if (!d) {
			return false;
		}
		var b = document.getElementById(a + "IF");
		if (b) {
			d.removeChild(b);
		}
		return false;
	}, touchContainer: function (a) {
		if (!window.opera || !a) {
			return;
		}
		a.style.position = "absolute";
		window.setTimeout(function () {
			a.style.position = "relative";
		}, 10);
	}, commentsPosted: function (a, b) {
		ODKL.hideComment(a);
		ODKL.showMessage(a, false, b);
	}, submitFailure: function (a, c, b) {
		ODKL.showMessage(a, true, c, b);
	}, showMessage: function (f, g, h, a) {
		var b = document.getElementById(f);
		var i = a === "c" ? document.getElementById(f + "IF") : null;
		var d = f + "M";
		var e = document.getElementById(d);
		if (e) {
			window.setTimeout(function () {
				b.removeChild(e);
			}, 500);
		}
		var c = document.createElement("span");
		c.id = d;
		c.className = "odkl-oc-cmnt-hidden";
		b.insertBefore(c, b.firstChild);
		c.innerHTML = h;
		c.className = g ? "odkl-oc-cmnt-err" : "odkl-oc-cmnt-ok";
		ODKL.positionMessage(c, i, b);
		window.setTimeout("ODKL.hideMessage('" + d + "');", 3000);
	}, hideMessage: function (a) {
		if (!a) {
			return false;
		}
		var c = document.getElementById(a);
		if (c) {
			c.style.display = "none";
			var b = c.parentNode;
			b.removeChild(c);
		}
		return false;
	}, positionMessage: function (l, q, b) {
		var o = ODKL.getDistances(l);
		var g = 240;
		var e = l.offsetHeight;
		var p = "0px";
		var n;
		var a;
		var d;
		var k;
		var f = navigator.userAgent;
		if (navigator.userAgent.indexOf("Firefox") > -1) {
			n = "26px";
			a = "26px";
			d = "121px";
			k = "123px";
		} else {
			if (navigator.userAgent.indexOf("Chrome") > -1) {
				n = "25px";
				a = "25px";
				d = "120px";
				k = "121px";
			} else {
				if (navigator.userAgent.indexOf("MSIE") > -1) {
					a = "26px";
					k = "120px";
					if (document.documentMode) {
						if (document.documentMode == 5) {
							n = "29px";
							d = "122px";
						} else {
							if (document.documentMode == 8) {
								n = "26px";
								d = "124px";
							} else {
								n = "26px";
								d = "120px";
							}
						}
					} else {
						n = "23px";
						d = "100px";
					}
				} else {
					if (navigator.userAgent.indexOf("Opera") > -1) {
						n = "25px";
						a = "26px";
						d = "122px";
						k = "124px";
					} else {
						if (navigator.userAgent.indexOf("Safari") > -1) {
							n = "24px";
							a = "24px";
							d = "120px";
							k = "123px";
						} else {
							n = "27px";
							a = "22px";
							d = "108px";
							k = "120px";
						}
					}
				}
			}
		}
		if (!q) {
			var m = ODKL.getPositionFlag(o, g, e);
			ODKL.assignDefaultPosition(l, m, n, p, a, "0px");
			return;
		}
		var c = ODKL.getDistances(q);
		if (c.top < o.top) {
			o.top = c.top - e;
		}
		if (c.bottom < o.bottom) {
			o.bottom = c.bottom - e;
		}
		if (c.left < o.left) {
			o.left = c.left;
		} else {
			if (c.right > o.right) {
				o.right = c.right;
			}
		}
		var i = ODKL.getAbsPosition(q.parentNode);
		var h = (i.y - c.top) > 0;
		var m = ODKL.getPositionFlag(o, g, e, h);
		var j = false;
		switch (m) {
			case 1:
			case 10:
			case 11:
			case 20:
			case 30:
				j = h;
				break;
			default:
				j = !h;
		}
		if (j) {
			ODKL.assignDefaultPosition(l, m, d, p, k, "0px");
		} else {
			ODKL.assignDefaultPosition(l, m, n, p, a, "0px");
		}
	}, positionComments: function (e) {
		var c = ODKL.getDistances(e.parentNode);
		if (!c) {
			e.style.bottom = "27px";
			e.style.left = "0px";
		}
		var b = 210;
		var a = 100;
		var d = ODKL.getPositionFlag(c, b, a);
		ODKL.assignDefaultPosition(e, d, "25px", "0px", "27px", "0px");
	}, assignDefaultPosition: function (f, c, e, b, a, d) {
		switch (c) {
			case 2:
			case 3:
				f.style.left = d;
				f.style.top = e;
				f.style.right = "auto";
				f.style.bottom = "auto";
				break;
			case 22:
				f.style.right = b;
				f.style.top = e;
				f.style.left = "auto";
				f.style.bottom = "auto";
				break;
			case 20:
			case 30:
				f.style.right = b;
				f.style.bottom = a;
				f.style.left = "auto";
				f.style.top = "auto";
				break;
			case 1:
			case 11:
			case 10:
			default:
				f.style.left = d;
				f.style.bottom = a;
				f.style.right = "auto";
				f.style.top = "auto";
		}
	}, getPositionFlag: function (a, d, c, f) {
		var e = 0;
		var b = 0;
		if (a.right && d < a.right) {
			e = 1;
		} else {
			if (a.left && d < a.left) {
				e = 20;
			}
		}
		if (f) {
			if (a.top && c < a.top) {
				b = 10;
			} else {
				if (a.bottom && c < a.bottom) {
					b = 2;
				}
			}
		} else {
			if (a.bottom && c < a.bottom) {
				b = 2;
			} else {
				if (a.top && c < a.top) {
					b = 10;
				}
			}
		}
		return e + b;
	}, getDistances: function (d) {
		var f = ODKL.getAbsPosition(d);
		var e;
		var a;
		if (window.innerWidth) {
			e = window.innerWidth, a = window.innerHeight;
		} else {
			if (document.documentElement && document.documentElement.clientWidth && document.documentElement.clientWidth != 0) {
				e = document.documentElement.clientWidth, a = document.documentElement.clientHeight;
			} else {
				e = document.body.offsetWidth, a = document.body.offsetHeight;
			}
		}
		var b = new Object();
		b.left = f.x;
		b.top = f.y;
		b.right = e - f.x - d.offsetWidth;
		b.bottom = a - f.y - d.offsetHeight;
		return b;
	}, getAbsPosition: function (a) {
		var d = new Object();
		d.x = 0;
		d.y = 0;
		if (a == null) {
			return d;
		}
		if (a.getBoundingClientRect) {
			var b = a.getBoundingClientRect();
			d.x = b.left;
			d.y = b.top;
		} else {
			while (a != null && a != document.body) {
				d.x += a.offsetLeft;
				d.y += a.offsetTop;
				a = a.offsetParent;
			}
			d.x -= document.body.scrollLeft;
			d.y -= document.body.scrollTop;
		}
		return d;
	}, updateCountForVoted: function (e, f, d) {
		if (e == null || f == null) {
			return;
		}
		var c = document.getElementById(e);
		if (c == null) {
			return;
		}
		if (isNaN(f) || f < 0) {
			c.parentNode.className = "odkl-klass-stat";
			c.innerHTML = "0";
		} else {
			var a = c.parentNode;
			var g = document.createElement("span");
			a.parentNode.insertBefore(g, a);
			a.style.display = "none";
			a.parentNode.removeChild(a);
			var b = ODKL.getBtnType(a);
			if (b == null) {
				return;
			}
			g.id = e;
			g.className = "odkl-" + b + "-oc-voted";
			g.innerHTML = d;
		}
	}, votePostProcess: function (c, b) {
		var d = document.getElementById(c);
		if (d == null) {
			return;
		}
		var f = document.getElementById(c + "IF");
		if (f == null) {
			return;
		}
		var e = document.createElement("span");
		d.insertBefore(e, f);
		var a = ODKL.getBtnType(d);
		if (a == null) {
			return;
		}
		e.className = "odkl-" + a + "-oc-voted";
		e.innerHTML = b;
		f.style.width = "206px";
		f.style.height = "91px";
		f.style.zIndex = "999";
		d.style.width = "auto";
		ODKL.positionComments(f);
	}, updateCountOC: function (e, g, a, d) {
		var c = document.getElementById(e);
		ODKL.updateCount(e, g);
		if (!a || a == "0" || ODKL.commScriptNA) {
			var f = c ? c.parentNode : null;
			if (f != null) {
				var b = ODKL.getBtnType(f);
				if (b == null) {
					b = "odkl-klass-stat";
				}
				f.className = "odkl-" + b + "-stat";
			}
		} else {
			ODKL.prepareVotingButton(e);
			return;
		}
	}, logMsg: function (b) {
		if (ODKL.debug) {
			try {
				console.log(b);
			} catch (a) {
			}
		}
	}, prepareVotingButton: function (a) {
		if (window.ODKL_COM === undefined) {
			if (!ODKL.loaderId) {
				ODKL.loadCommScript();
			}
			if (!ODKL.postponedBtns) {
				ODKL.postponedBtns = new Array();
			}
			ODKL.postponedBtns.push(a);
			return;
		}
		ODKL.createFrameButton(a);
	}, loadCommScript: function () {
		var b = document.createElement("script");
		b.type = "text/javascript";
		document.body.appendChild(b);
		var a = ODKL.HOST;
		if (!a) {
			a = "stg.odnoklassniki.ru";
		}
		b.src = "http://" + a + "/share/odkl_com.js";
		document.body.appendChild(b);
		ODKL.logMsg("Comm script load started");
		ODKL.loaderId = window.setInterval(function () {
			if (window.ODKL_COM === undefined) {
				return;
			}
			ODKL.logMsg("Comm script loaded");
			window.clearInterval(ODKL.loaderId);
			ODKL.loaderId = null;
			if (ODKL.postponedBtns) {
				ODKL.processCollectedFBtns();
				ODKL.postponedBtns = null;
			}
		}, 100);
		window.setTimeout(function () {
			if (ODKL.loaderId) {
				if (window.ODKL_COM !== undefined) {
					ODKL.logMsg("Comm script loaded after timeout");
					ODKL.processCollectedFBtns();
				} else {
					ODKL.logMsg("Comm script NOT loaded, making all buttons regular");
					ODKL.commScriptNA = true;
					if (!ODKL.postponedBtns) {
						return;
					}
					for (var d = 0; d < ODKL.postponedBtns.length; d++) {
						var f = ODKL.postponedBtns[d];
						var c = document.getElementById(f);
						var e = c ? c.parentNode : null;
						if (e != null) {
							e.className = "odkl-klass-stat";
						}
					}
					ODKL.postponedBtns = null;
				}
			}
		}, 2000);
	}, getBtnType: function (a) {
		if (!a.className) {
			return null;
		}
		if (a.className.indexOf("odkl-klass-oc") > -1) {
			return"klass";
		} else {
			if (a.className.indexOf("odkl-share-oc") > -1) {
				return"share";
			} else {
				return null;
			}
		}
	}, createFrameButton: function (g) {
		var a = document.getElementById(g);
		var i = a.parentNode;
		var f = ODKL.getBtnType(i);
		if (f == null) {
			return;
		}
		var b = i.href;
		if (!b) {
			ODKL.logMsg("No href provided for counter with ID: %d", g);
			return;
		}
		if (b.charAt(b.length - 1) == "/") {
			b = b.substring(0, b.length - 1);
		}
		var k = i.offsetWidth + "px";
		var d = document.createElement("span");
		d.style.width = k;
		d.className = "odkl-" + f + "-oc-fc-hidden";
		var c = document.createElement("iframe");
		c.scrolling = "no";
		c.frameBorder = 0;
		var h = g + "IF";
		c.id = h;
		c.name = h;
		d.appendChild(c);
		a.id = null;
		d.id = g;
		i.parentNode.insertBefore(d, i);
		var e = function () {
			ODKL_COM.setupFrameListener(ODKL.buttonListener, h, ODKL.getShareHost());
			if (i.parentNode) {
				i.parentNode.removeChild(i);
			}
			d.className = "odkl-" + f + "-oc-fc";
		};
		ODKL.addOnLoadListener(c, e);
		var j = ODKL.getShareHost() + "/dk?st.cmd=extOneClickLike&drt=2&uid=" + g + "&bt=" + f + "&ref=" + encodeURIComponent(b);
		c.src = j;
	}, buttonListener: function (event) {
		if (event.data) {
			eval(event.data);
		}
	}, processCollectedFBtns: function () {
		if (!ODKL.postponedBtns) {
			return;
		}
		for (var a = 0; a < ODKL.postponedBtns.length; a++) {
			ODKL.createFrameButton(ODKL.postponedBtns[a]);
		}
	}, updateCount: function (b, c) {
		if (b == null || c == null) {
			return;
		}
		var a = document.getElementById(b);
		if (a == null) {
			return;
		}
		if (isNaN(c) || c < 0) {
			a.innerHTML = "0";
		} else {
			a.innerHTML = c;
		}
	}, getStatNodes: function (d) {
		if (document.getElementsByClassName) {
			return document.getElementsByClassName(d);
		}
		if (document.getElementsByTagName) {
			var c = document.getElementsByTagName("a");
			var a = new Array();
			for (var b = 0; b < c.length; b++) {
				var e = c[b].className;
				if (e && e.toLowerCase().indexOf(d) > -1) {
					a.push(c[b]);
				}
			}
			return a;
		}
		return null;
	}, initBtns: function (g, c, o) {
		var f = ODKL.getShareHost() + "/dk?st.cmd=" + g + "&uid=";
		var k = ODKL.getStatNodes(c);
		if (k == null) {
			return;
		}
		for (var j = 0; j < k.length; j++) {
			var n = k[j];
			var h = n.className ? n.className.toLowerCase() : null;
			var d = h && h.indexOf("odkl-current") > -1 ? window.location.href : n.href;
			if (d == null) {
				continue;
			}
			if (d.charAt(d.length - 1) == "/") {
				d = d.substring(0, d.length - 1);
			}
			var b;
			var e = n.getElementsByTagName("span");
			if (e && e.length > 0) {
				b = e[0];
			} else {
				b = document.createElement("span");
				n.appendChild(b);
				b.innerHTML = "0";
			}
			if (b.style.width != "") {
				b.style.width = "";
			}
			if (b.id) {
				continue;
			}
			b.id = o + j;
			var l = f + b.id + "&ref=" + encodeURIComponent(d);
			var m = document.createElement("script");
			m.type = "text/javascript";
			b.appendChild(m);
			m.src = l;
		}
		if (k.length > 0) {
			ODKL.initialized = true;
		}
	}, addOnLoadListener: function (b, a) {
		if (b.addEventListener) {
			b.addEventListener("load", a, false);
		} else {
			if (b.attachEvent) {
				b.attachEvent("onload", a);
			} else {
				if (document.getElementById) {
					b.onload = a;
				}
			}
		}
	}, init: function (a) {
		if (ODKL.initialized) {
			return;
		}
		ODKL.P.requests = null;
		if (typeof(a) == "string") {
			ODKL.HOST = a;
		} else {
			ODKL.HOST = null;
		}
		ODKL.initBtns("extLike", "odkl-klass-stat", "odklcnt");
		ODKL.initBtns("extOneClickLike", "odkl-klass-oc", "odklock");
		ODKL.initBtns("extOneClickLike", "odkl-share-oc", "odklocs");
	}};
}