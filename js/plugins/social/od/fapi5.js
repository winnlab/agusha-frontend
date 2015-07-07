/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
 is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

function API_initialized() {
    FAPI.setInitialized();
    window.fapi_success(FAPI.useHtml5 ? "HTML5" : "FLASH");
}

var FAPI = {
    useHtml5:false,
    initialized:false,

    init:function (serverUrl, apiConnectionName, success, failure) {
        this.useHtml5 = FAPI.Util.isFunc(window.postMessage);

        if (this.useHtml5) {
            this.invokeUIMethod = FAPI.HTML5.invokeUIMethod;
            FAPI.HTML5.init(serverUrl, apiConnectionName, success, failure);
        } else {
            this.invokeUIMethod = FAPI.FLASH.invokeUIMethod;
            FAPI.FLASH.init(serverUrl, apiConnectionName, success, failure);
        }
    },
    setInitialized:function () {
        FAPI.initialized = true;
        if (this.useHtml5) {
            FAPI.HTML5.initialized = true;
        } else {
            FAPI.FLASH.initialized = true;
        }
    },
    HTML5:{
        initialized:false,
        webServerUrl:"",
        serverUrl:"",
        apiConnectionName:"",
        attachRetryCounter:0,

        init:function (serverUrl, apiConnectionName, success, failure) {
            this.webServerUrl = FAPI.Util.getRequestParameters()["web_server"];
            this.serverUrl = serverUrl;
            this.apiConnectionName = apiConnectionName;
            this.attachRetryCounter = 0;

            if (this.webServerUrl.indexOf("://") == -1) {
                this.webServerUrl = "http://" + this.webServerUrl;
            }
            if (!this.initialized) {
                window.fapi_failure = FAPI.Util.isFunc(failure) ? failure : function () {};
                window.fapi_success = FAPI.Util.isFunc(success) ? success : function () {};

                if (FAPI.Util.isFunc(window.postMessage)) {
                    if (FAPI.Util.isFunc(window.addEventListener)) {
                        window.addEventListener('message', this.onPostMessage, false);
                    } else {
                        window.attachEvent('onmessage', this.onPostMessage);
                    }
                    this.doAttach();
                } else {
                    window.fapi_failure("HTML5 not supported");
                }
            }
        },
        doAttach:function () {
            if( !FAPI.HTML5.initialized ) {
                // Retrying attaching to odkl server window, trying 20 times each half of second
                if( FAPI.HTML5.attachRetryCounter++ < 20 ) {
                    FAPI.HTML5.invokeUIMethod("attach");
                    setTimeout(FAPI.HTML5.doAttach, 500);
                } else {
                    window.fapi_failure("Failed to init.");
                }
            }
        },
        onPostMessage:function (event) {
            // this cannot be used here, as function is directly attached to window
            var args = event.data.split("$");

            if (args.length != 3 || FAPI.HTML5.webServerUrl != event.origin) {
                // Not our message
                return;
            }

            var methodName = decodeURIComponent(args[0]);
            if (methodName == "attach") {
                API_initialized();
            } else {
                API_callback(methodName, decodeURIComponent(args[1]), decodeURIComponent(args[2]));
            }
        },
        invokeUIMethod:function () {
            // this cannot be used here, as function is directly attached to FAPI
            var argStr = "";
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];

                if (i > 0) {
                    argStr += '$';
                }
                if (arg != null) {
                    argStr += encodeURIComponent(String(arg));
                }
            }
            parent.postMessage("__FAPI__" + argStr, FAPI.HTML5.webServerUrl);
        }
    },
    FLASH:{
        flash:null,
        initialized:false,

        swfCallback:function (e) {
            // this cannot be used here, as function is directly attached to flash object
            if (e.success) {
                FAPI.FLASH.flash = document.getElementById("FAPI_Flash");
            } else {
                window.fapi_failure("Failed  to embed flash");
            }
        },
        embedFlash:function (success, failure) {
            var el = document.createElement('span');
            el.id = 'FAPI_Flash_wrap';
            el.style.position = 'absolute';
            el.style.marginTop = '-10px';
            document.body.appendChild(el);

            var flashVars = {
                apiconnection:this.apiConnectionName
            };
            var flashParams = {
                menu:"false",
                scale:"noScale",
                allowScriptAccess:"always",
                bgcolor:"#FFFFFF"
            };
            var flashAttributes = {
                id:"FAPI_Flash"
            };

            window.fapi_success = FAPI.Util.isFunc(success) ? success : function () {};
            window.fapi_failure = FAPI.Util.isFunc(failure) ? failure : function () {};

            var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
            swfobject.embedSWF(this.serverUrl + "flash/ForticomAPIJS.swf?v=19", "FAPI_Flash_wrap", "1", "1", "9.0.0", this.serverUrl + "flash/expressInstall.swf", flashVars, flashParams, flashAttributes, this.swfCallback);
        },
        init:function (serverUrl, apiConnectionName, success, failure) {
            this.serverUrl = serverUrl;
            this.apiConnectionName = apiConnectionName;

            this.flash = document.getElementById("FAPI_Flash");
            if (this.flash == null) {
                this.embedFlash(success, failure);
            } else {
                API_initialized();
            }
        },
        isFunc:function (obj) {
            return Object.prototype.toString.call(obj) === "[object Function]";
        },
        getFlash:function () {
            if (!this.initialized) {
                throw "Forticom API was not initialized properly";
            }
            return this.flash;
        },
        invokeUIMethod:function () {
            // this cannot be used here, as function is directly attached to FAPI
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (arg != null) {
                    arguments[i] = String(arg);
                }
            }
            FAPI.FLASH.getFlash().FAPI_send.apply(FAPI.FLASH.getFlash(), arguments);
        }
    },
    UI:{
        showInvite:function (text, params, uids) {
            FAPI.invokeUIMethod("showInvite", text, params, uids);
        },
        showNotification:function (text, params, uids) {
            FAPI.invokeUIMethod("showNotification", text, params, uids);
        },
        showPermissions:function (permissions, uiConf) {
            FAPI.invokeUIMethod("showPermissions", permissions, uiConf);
        },
        showPayment:function (name, description, code, price, options, attributes, currency, callback, uiConf) {
            FAPI.invokeUIMethod("showPayment", name, description, code, price, options, attributes, currency, callback, uiConf);
        },
        showPortalPayment:function () {
            FAPI.invokeUIMethod("showPortalPayment");
        },
        showConfirmation:function (methodName, userText, signature) {
            FAPI.invokeUIMethod("showConfirmation", methodName, userText, signature);
        },
        showProfileEmail:function () {
            FAPI.invokeUIMethod("showProfileEmail");
        },
        setWindowSize:function (width, height) {
            FAPI.invokeUIMethod("setWindowSize", width, height);
        },
        scrollToTop:function () {
            FAPI.invokeUIMethod("scrollToTop");
        },
        getPageInfo:function () {
            FAPI.invokeUIMethod("getPageInfo");
        },
        navigateTo:function (relativeUrlPath) {
            FAPI.invokeUIMethod("navigateTo", relativeUrlPath);
        },
        postMediatopic: function(attachment, status) {
            FAPI.invokeUIMethod("postMediatopic", JSON.stringify(attachment), status?'on':'off');
        },
        showPromoPayment : function(friendId, presentId) {
            FAPI.invokeUIMethod("showPromoPayment", friendId, presentId);
        }
    },
    Util:{
        isFunc:function (obj) {
            return Object.prototype.toString.call(obj) === "[object Function]";
        },
        calcSignature:function (query, secret) {
            var i, keys = [], sign;
            for (i in query) {
                keys.push(i.toString());
            }
            keys.sort();
            sign = "";
            for (i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (("sig" != key) && ("resig" != key)) {
                    sign += keys[i] + '=' + query[keys[i]];
                }
            }
            sign += secret;
            sign = this.encodeUtf8(sign);
            return MD5.calc(sign);
        },
        encodeUtf8:function (string) {
            var res = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    res += String.fromCharCode(c);
                }
                else if ((c > 127) && (c < 2048)) {
                    res += String.fromCharCode((c >> 6) | 192);
                    res += String.fromCharCode((c & 63) | 128);
                }
                else {
                    res += String.fromCharCode((c >> 12) | 224);
                    res += String.fromCharCode(((c >> 6) & 63) | 128);
                    res += String.fromCharCode((c & 63) | 128);
                }
            }
            return res;

        },
        getRequestParameters:function () {
            var res = new Array();

            // Get the string that follows the "?" in the window's location.
            var url = window.location.search;
            if (url) // if has a value...
            {
                // Drop the leading "?"
                url = url.substr(1);

                var nameValues = url.split("&");

                for (var i = 0; i < nameValues.length; i++) {
                    var nameValue = nameValues[i].split("=");

                    var name = nameValue[0];
                    var value = nameValue[1];
                    value = decodeURIComponent(value.replace(/\+/g, " "));
                    res[name] = value;
                }
            }
            console.log(res);
            return res;
        }
    },
    Client:{
        counter:0,
        window:this,
        head:null,
        applicationKey:null,
        sessionKey:null,
        sessionSecretKey:null,
        apiServer:null,
        baseUrl:null,
        uid:null,
        format:"JSON",
        initialized:false,

        load:function (url) {
            var script = document.createElement('script'),
                    done = false;
            script.src = url;
            script.async = true;

            script.onload = script.onreadystatechange = function () {
                if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                    done = true;
                    script.onload = script.onreadystatechange = null;
                    if (script && script.parentNode) {
                        script.parentNode.removeChild(script);
                    }
                }
            };
            if (!this.head) {
                this.head = document.getElementsByTagName('head')[0];
            }
            this.head.appendChild(script);
        },
        call:function (params, userCallback, resig) {
            if (!this.initialized) {
                this.initialize();
            }


            query = "?";
            params = this.fillParams(params);
            sig = FAPI.Util.calcSignature(params, this.sessionSecretKey);
            params["sig"] = sig;
            if (resig != null) {
                params["resig"] = resig;
            }


            for (key in params) {
                if (params.hasOwnProperty(key)) {
                    query += key + "=" + encodeURIComponent(params[key]) + "&";
                }
            }
            var callbackid = "__fapi__callback_" + (++this.counter);
            this.window[ callbackid ] = function (status, data, error) {
                userCallback(status, data, error);
                window[ callbackid ] = null;
                try {
                    delete window[ callbackid ];
                } catch (e) {
                }
            };

            this.load(this.baseUrl + query + "js_callback=" + callbackid);
            return callbackid;
        },
        calcSignature:function (params) {
            if (!this.initialized) {
                this.initialize();
            }
            params = this.fillParams(params);
            sig = FAPI.Util.calcSignature(params, this.sessionSecretKey);
            return sig;
        },
        fillParams:function (params) {
            if (!this.initialized) {
                this.initialize();
            }


            params = params || {};
            params["application_key"] = this.applicationKey;
            params["session_key"] = this.sessionKey;
            params["format"] = this.format;
            return params;
        },
        initialize:function (params) {
            requestParameters = params ? params : FAPI.Util.getRequestParameters();
            this.uid = requestParameters["logged_user_id"];

            this.applicationKey = requestParameters["application_key"];
            this.sessionKey = requestParameters["session_key"];
            this.sessionSecretKey = requestParameters["session_secret_key"];
            this.apiServer = requestParameters["api_server"];
            this.baseUrl = this.apiServer + "fb.do";

            this.initialized = true;

        }
    }
}
///UTILS
var MD5 = (function () {

    var hex_chr = "0123456789abcdef";

    function rhex(num) {
        str = "";
        for (j = 0; j <= 3; j++) {
            str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) +
                    hex_chr.charAt((num >> (j * 8)) & 0x0F);
        }
        return str;
    }

    /*
     * Convert a string to a sequence of 16-word blocks, stored as an array.
     * Append padding bits and the length, as described in the MD5 standard.
     */
    function str2blks_MD5(str) {
        nblk = ((str.length + 8) >> 6) + 1;
        blks = new Array(nblk * 16);
        for (i = 0; i < nblk * 16; i++) {
            blks[i] = 0;
        }
        for (i = 0; i < str.length; i++) {
            blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);
        }
        blks[i >> 2] |= 0x80 << ((i % 4) * 8);
        blks[nblk * 16 - 2] = str.length * 8;
        return blks;
    }

    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
    function add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    /*
     * Bitwise rotate a 32-bit number to the left
     */
    function rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    /*
     * These functions implement the basic operation for each round of the
     * algorithm.
     */
    function cmn(q, a, b, x, s, t) {
        return add(rol(add(add(a, q), add(x, t)), s), b);
    }

    function ff(a, b, c, d, x, s, t) {
        return cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function gg(a, b, c, d, x, s, t) {
        return cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function hh(a, b, c, d, x, s, t) {
        return cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function ii(a, b, c, d, x, s, t) {
        return cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    /*
     * Take a string and return the hex representation of its MD5.
     */
    function calcMD5(str) {
        x = str2blks_MD5(str);
        a = 1732584193;
        b = -271733879;
        c = -1732584194;
        d = 271733878;

        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;

            a = ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = ff(c, d, a, b, x[i + 10], 17, -42063);
            b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = ff(b, c, d, a, x[i + 15], 22, 1236535329);

            a = gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = hh(a, b, c, d, x[i + 5], 4, -378558);
            d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = hh(b, c, d, a, x[i + 2], 23, -995338651);

            a = ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = ii(b, c, d, a, x[i + 9], 21, -343485551);

            a = add(a, olda);
            b = add(b, oldb);
            c = add(c, oldc);
            d = add(d, oldd);
        }
        return rhex(a) + rhex(b) + rhex(c) + rhex(d);
    }

    return {
        calc:calcMD5
    };
}());
