steal("can/util",function(){return{isArrayLike:function(t){return t&&t.splice&&"number"==typeof t.length},isObserveLike:function(t){return t instanceof can.Map||t&&!!t._get},emptyHandler:function(){},jsonParse:function(str){return"'"===str[0]?str.substr(1,str.length-2):"undefined"===str?void 0:can.global.JSON?JSON.parse(str):eval("("+str+")")},mixins:{last:function(){return this.stack[this.stack.length-1]},add:function(t){this.last().add(t)},subSectionDepth:function(){return this.stack.length-1}}}})