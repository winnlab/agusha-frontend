steal("can/util",function(n){return n.bindAndSetup=function(){return n.addEvent.apply(this,arguments),this._init||(this._bindings?this._bindings++:(this._bindings=1,this._bindsetup&&this._bindsetup())),this},n.unbindAndTeardown=function(i){var t=this.__bindEvents[i]||[],s=t.length
return n.removeEvent.apply(this,arguments),null===this._bindings?this._bindings=0:this._bindings=this._bindings-(s-t.length),!this._bindings&&this._bindteardown&&this._bindteardown(),this},n})