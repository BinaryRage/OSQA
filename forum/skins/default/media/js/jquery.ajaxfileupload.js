jQuery.extend({createUploadIframe:function(a,c){var b="jUploadFrame"+a;if(window.ActiveXObject){var e=document.createElement('<iframe id="'+b+'" name="'+b+'" />');"boolean"==typeof c?e.src="javascript:false":"string"==typeof c&&(e.src=c)}else e=document.createElement("iframe"),e.id=b,e.name=b;e.style.position="absolute";e.style.top="-1000px";e.style.left="-1000px";document.body.appendChild(e);return e},createUploadForm:function(a,c){var b="jUploadForm"+a,e="jUploadFile"+a,b=$('<form  action="" method="POST" name="'+
b+'" id="'+b+'" enctype="multipart/form-data"></form>'),g=$("#"+c),d=$(g).clone();$(g).attr("id",e);$(g).before(d);$(g).appendTo(b);$(b).css("position","absolute");$(b).css("top","-1200px");$(b).css("left","-1200px");$(b).appendTo("body");return b},ajaxFileUpload:function(a){var a=jQuery.extend({},jQuery.ajaxSettings,a),c=(new Date).getTime(),b=jQuery.createUploadForm(c,a.fileElementId);jQuery.createUploadIframe(c,a.secureuri);var e="jUploadFrame"+c,c="jUploadForm"+c;a.global&&!jQuery.active++&&jQuery.event.trigger("ajaxStart");
var g=!1,d={};a.global&&jQuery.event.trigger("ajaxSend",[d,a]);var i=function(c){var f=document.getElementById(e);try{f.contentWindow?(d.responseText=f.contentWindow.document.body?f.contentWindow.document.body.innerText:null,d.responseXML=f.contentWindow.document.XMLDocument?f.contentWindow.document.XMLDocument:f.contentWindow.document):f.contentDocument&&(d.responseText=f.contentDocument.document.body?f.contentDocument.document.body.textContent||document.body.innerText:null,d.responseXML=f.contentDocument.document.XMLDocument?
f.contentDocument.document.XMLDocument:f.contentDocument.document)}catch(i){jQuery.handleError(a,d,null,i)}if(d||"timeout"==c){g=!0;var h;try{if(h="timeout"!=c?"success":"error","error"!=h){var j=jQuery.uploadHttpData(d,a.dataType);a.success&&a.success(j,h);a.global&&jQuery.event.trigger("ajaxSuccess",[d,a])}else jQuery.handleError(a,d,h)}catch(k){h="error",jQuery.handleError(a,d,h,k)}a.global&&jQuery.event.trigger("ajaxComplete",[d,a]);a.global&&!--jQuery.active&&jQuery.event.trigger("ajaxStop");
a.complete&&a.complete(d,h);jQuery(f).unbind();setTimeout(function(){try{$(f).remove(),$(b).remove()}catch(c){jQuery.handleError(a,d,null,c)}},100);d=null}};0<a.timeout&&setTimeout(function(){g||i("timeout")},a.timeout);try{b=$("#"+c),$(b).attr("action",a.url),$(b).attr("method","POST"),$(b).attr("target",e),b.encoding?b.encoding="multipart/form-data":b.enctype="multipart/form-data",$(b).submit()}catch(j){jQuery.handleError(a,d,null,j)}window.attachEvent?document.getElementById(e).attachEvent("onload",
i):document.getElementById(e).addEventListener("load",i,!1);return{abort:function(){}}},uploadHttpData:function(a,c){var b;b="xml"==c||!c?a.responseXML:a.responseText;"script"==c&&jQuery.globalEval(b);"json"==c&&eval("data = "+b);"html"==c&&jQuery("<div>").html(b).evalScripts();return b}});
//@ sourceMappingURL=jquery.ajaxfileupload.js.map