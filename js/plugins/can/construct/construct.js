steal("can/util/string",function(can){var initializing=0,canGetDescriptor
try{Object.getOwnPropertyDescriptor({}),canGetDescriptor=!0}catch(e){canGetDescriptor=!1}var getDescriptor=function(t,r){var n=Object.getOwnPropertyDescriptor(t,r)
return n&&(n.get||n.set)?n:null},inheritGetterSetter=function(t,r,n){n=n||t
var e
for(var o in t)(e=getDescriptor(t,o))?this._defineProperty(n,r,o,e):can.Construct._overwrite(n,r,o,t[o])},simpleInherit=function(t,r,n){n=n||t
for(var e in t)can.Construct._overwrite(n,r,e,t[e])}
return can.Construct=function(){return arguments.length?can.Construct.extend.apply(can.Construct,arguments):void 0},can.extend(can.Construct,{constructorExtends:!0,newInstance:function(){var t,r=this.instance()
return r.setup&&(t=r.setup.apply(r,arguments)),r.init&&r.init.apply(r,t||arguments),r},_inherit:canGetDescriptor?inheritGetterSetter:simpleInherit,_defineProperty:function(t,r,n,e){Object.defineProperty(t,n,e)},_overwrite:function(t,r,n,e){t[n]=e},setup:function(t){this.defaults=can.extend(!0,{},t.defaults,this.defaults)},instance:function(){initializing=1
var t=new this
return initializing=0,t},extend:function(name,staticProperties,instanceProperties){function init(){return initializing?void 0:(this.constructor!==Constructor&&arguments.length&&Constructor.constructorExtends&&can.dev.warn("can/construct/construct.js: extending a can.Construct without calling extend"),this.constructor!==Constructor&&arguments.length&&Constructor.constructorExtends?Constructor.extend.apply(Constructor,arguments):Constructor.newInstance.apply(Constructor,arguments))}var fullName=name,klass=staticProperties,proto=instanceProperties
"string"!=typeof fullName&&(proto=klass,klass=fullName,fullName=null),proto||(proto=klass,klass=null),proto=proto||{}
var _super_class=this,_super=this.prototype,Constructor,parts,current,_fullName,_shortName,propName,shortName,namespace,prototype
prototype=this.instance(),can.Construct._inherit(proto,_super,prototype),fullName&&(parts=fullName.split("."),shortName=parts.pop())
var constructorName=shortName?shortName.replace(/;/g,""):"Constructor"
eval("Constructor = function "+constructorName+"() { return init.apply(this, arguments); }"),void 0===constructorName&&(Constructor=function(){return init.apply(this,arguments)})
for(propName in _super_class)_super_class.hasOwnProperty(propName)&&(Constructor[propName]=_super_class[propName])
can.Construct._inherit(klass,_super_class,Constructor),fullName&&(current=can.getObject(parts.join("."),window,!0),namespace=current,_fullName=can.underscore(fullName.replace(/\./g,"_")),_shortName=can.underscore(shortName),current[shortName]&&can.dev.warn("can/construct/construct.js: There's already something called "+fullName),current[shortName]=Constructor),can.extend(Constructor,{constructor:Constructor,prototype:prototype,namespace:namespace,_shortName:_shortName,fullName:fullName,_fullName:_fullName}),void 0!==shortName&&(Constructor.shortName=shortName),Constructor.prototype.constructor=Constructor
var t=[_super_class].concat(can.makeArray(arguments)),args=Constructor.setup.apply(Constructor,t)
return Constructor.init&&Constructor.init.apply(Constructor,args||t),Constructor}}),can.Construct.prototype.setup=function(){},can.Construct.prototype.init=function(){},can.Construct})