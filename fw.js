var log = function(msg, force) {
    force ? alert(msg) : (window.console && window.console.log ? window.console.log(msg) : null);
};

var fwDNK = function() {
	this.ver="1.003";
	this.buildDate="30.11.2013";
	this.about="JavaScript class with all the necessary components to create RIA";
	this.autor="Dusan Krstic";
	this.serverPath="server/server.php";//default server ajax script path
	this.serverUpPath="uploads/uploder.php";//default server uoload script path 
	this.interval=0;
	this.colors={"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff","beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887","cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff","darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f","darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1","darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff","firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff","gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f","honeydew":"#f0fff0","hotpink":"#ff69b4","indianred":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c","lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2","lightgray":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de","lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6","magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee","mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5","navajowhite":"#ffdead","navy":"#000080","oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6","palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1","saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4","tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0","violet":"#ee82ee","wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5","yellow":"#ffff00","yellowgreen":"#9acd32"}; 
};

fwDNK.prototype = {
	randomFromInterval:function(from,to){return Math.floor(Math.random()*(to-from+1)+from);},
	isIE:function(){var isIE = /*@cc_on!@*/false;return isIE;},
	sel:function(p){if(document.querySelectorAll(p).length>1){return document.querySelectorAll(p);}else{return document.querySelector(p);};},
	mobilecheck:function(){//vraca true za mobilne uredjaje
		if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)){return true;}else{return false;};
	},
	getElementsByClassName:function(node, classname) {//selektor klase
	    var a = [];
	    var re = new RegExp('(^| )'+classname+'( |$)');
	    var els = node.getElementsByTagName("*");
	    for(var i=0,j=els.length; i<j; i++)
	        if(re.test(els[i].className))a.push(els[i]);
	    return a;
	    //var tabs = fw.getElementsByClassName(document.body,'tab');
	},
	removeClass:function(obj,c){obj.classList.remove(c);},
	addClass:function(obj,c){obj.classList.add(c);},	
	json2send:function(p){//prebaci JSON objekat u parametre za slanje serveru
		var podaci=[];for (var i in p){podaci.push(i+"="+p[i]);};return podaci.join("&");
	},
	merge2json:function(json1,json2){
		var merged = {};
		for(var i in json1) {
		    if (json1.hasOwnProperty(i))
		        merged[i] = json1[i];
		}
		for(var i in json2) {
		    if (json2.hasOwnProperty(i))
		        merged[i] = json2[i];
		}
		return merged;
	},
	fixDate:function(p){p=p.split("-");return p[2]+"-"+p[1]+"-"+p[0];},
	clone: function(obj) {return obj.cloneNode(true);},
	setStyle:function(el,spec) {for(var n in spec) {el.style[n] = spec[n];}
	    //primer fw.setStyle(button,{cssFloat : 'right', border : '2px solid black'});
	},
	remove:function(obj){
		if(obj==undefined){return false;};
		if(obj.length>0){for (var i=0; i < obj.length; i++){if (obj[i].parentNode) {obj[i].parentNode.removeChild(obj[i]);}};
		}else{if (obj.parentNode) {obj.parentNode.removeChild(obj);}}		
	},
	append:function(obj,p){obj.innerHTML+=p;},
	fixedEncodeURIComponent:function(str) {//sredjuje problem sa postovanim sadrzajem koji imaju ne dozvoljene karaktere
		return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
	},
	ajaks:function(p,CallBack,errorCallBack){
		obj=this;
		//obj.showAjax();
		if(p == undefined){return false;};
		p.Async = (p.Async == undefined ? true : p.Async);//ako nije definisan tip upita stavi na asinhrom
		p.Atype = (p.Atype == undefined ? "POST" : p.Atype);//ako nije definisan tip upita stavi na POST
		var xmlhttp;
		if (window.XMLHttpRequest){// code za IE7+, Firefox, Chrome, Opera, Safari
			  xmlhttp=new XMLHttpRequest();
		}else{// code za IE6, IE5
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function(){
			  if(xmlhttp.readyState==4 && xmlhttp.status==200){
				//window["ajaxDataCb"]=JSON.parse(xmlhttp.responseText);
				CallBack(JSON.parse(xmlhttp.responseText));	 	
				return true;
			  }
			  //obj.hideAjax();	 		  
		};
		var ts = "?"+Math.round((new Date()).getTime()/1000)+Math.floor(Math.random()*101);
		if(p.Atype=="GET"){
			xmlhttp.open(p.Atype,obj.serverPath+"?"+obj.json2send(p),p.Async);
			xmlhttp.send();
		}else{
			xmlhttp.open(p.Atype,obj.serverPath+ts,p.Async);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send(obj.json2send(p));
		}
	},
	xdomain:function(url,xpath,callBack){
		if(xpath==undefined){xpath="*";};
		 xmlhttp=new XMLHttpRequest();
		 url="http://query.yahooapis.com/v1/public/yql?callback=jQuery17108531142126303166_1378217657531&q=select+*+from+html+where+url%3D%22"+url+"%22+and+xpath%3D%22"+xpath+"%22&format=xml&_=1378217789340";
		 xmlhttp.open("GET",url,false);
		 xmlhttp.onload=function(){
		 	data=xmlhttp.responseText;
		 	data='{"query"'+data.split('({"query"')[1];
		 	data=data.substring(0, data.length - 2);
			callBack(JSON.parse(data).results[0]);  
			};
		 xmlhttp.send();
	},
	upload:function(input,options){
			if(options.onStart!=undefined){
				options.onStart();
			};
			var xmlhttp;
			if (window.XMLHttpRequest){// code za IE7+, Firefox, Chrome, Opera, Safari
				  xmlhttp=new XMLHttpRequest();
			}else{// code za IE6, IE5
				  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			};
			xmlhttp.upload.addEventListener('progress',function(ev){
				proc=parseInt((ev.loaded/ev.total)*100);
				if(proc>=99){proc=100;}
				if(options.progress!=undefined){
					document.getElementById(options.progress).style.width=proc+"%";
					document.getElementById(options.progress).innerHTML=proc+"%";
				};
			}, false);
			xmlhttp.onreadystatechange = function(ev){
			   if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			   		options.callback(xmlhttp.responseText);					
				};
			};
			xmlhttp.open('POST', options.url, true);
			var files = input.files;
			var data = new FormData();
			data.append('file', files[0]);
			xmlhttp.send(data);
		},
		loadJS:function(file,CallBack){
			if (window.XMLHttpRequest){// code za IE7+, Firefox, Chrome, Opera, Safari
				  var xmlhttp=new XMLHttpRequest();			  
			}else{// code za IE6, IE5
				  var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			};
			var ts = "?"+Math.round((new Date()).getTime()/1000);
			xmlhttp.open('GET', file+ts,true);
			xmlhttp.onload=function(){
				  if(xmlhttp.readyState==4 && xmlhttp.status==200){
						eval(xmlhttp.responseText);
						if(CallBack!=undefined)CallBack();			
				  };
			};
			xmlhttp.send();
		},
		loadHTMLfile:function(file,CallBack){
			if (window.XMLHttpRequest){// code za IE7+, Firefox, Chrome, Opera, Safari
				  var xmlhttp=new XMLHttpRequest();			  
			}else{// code za IE6, IE5
				  var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			};
			var ts = "?"+Math.round((new Date()).getTime()/1000);
			xmlhttp.open('GET', file+ts,true);
			xmlhttp.onload=function(){
				  if(xmlhttp.readyState==4 && xmlhttp.status==200){
						CallBack(xmlhttp.responseText);			
				  };
			};
			xmlhttp.send();
	},
	trigger:function(node, eventName) {
	  var doc;
	  if (node.ownerDocument) {
	    doc = node.ownerDocument;
	  } else if (node.nodeType == 9){
	    doc = node;
	  } else {
	    throw new Error("Invalid node passed to fireEvent: " + node.id);
	  }	
	  if (node.fireEvent) {
	    var event = doc.createEventObject();
	    event.synthetic = true; // allow detection of synthetic events
	    node.fireEvent("on" + eventName, event);
	  } else if (node.dispatchEvent) {
	    var eventClass = "";	
	    switch (eventName) {
	      case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
	      case "touchstart":
	      case "mousedown":
	      case "mouseup":
	        eventClass = "MouseEvents";
	        break;	
	      case "focus":
	      case "mouseout":
	      case "change":
	      case "blur":
	      case "select":
	        eventClass = "HTMLEvents";
	        break;	
	      default:
	        throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
	        break;
	    };
	    var event = doc.createEvent(eventClass);
	    var bubbles = eventName == "change" ? false : true;  
	    event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.	
	    event.synthetic = true; // allow detection of synthetic events
	    node.dispatchEvent(event);
	  };
	},
	bind:function (ele, eventName, funct,multibind) {
	  if(multibind==undefined){//remove all binds for specific event
		$.unbind(ele,eventName);
	  }
	  if(ele.length>0){
	  	for (var a=0; a < ele.length; a++) {
			el=ele[a];
			if (el.attachEvent) {
			    //el['e'+eventName+funct] = funct;
			    //el[eventName+funct] = function(){el['e'+eventName+funct](window.event);}
			    el[eventName+funct] = function(){funct(window.event);};
			    el.attachEvent( 'on'+eventName, el[eventName+funct] );
			  } else {    
			    el.addEventListener(eventName, funct, false);
			  };
			  if(!el.eventHolder) el.eventHolder = [];
			  el.eventHolder[el.eventHolder.length] = new Array(eventName, funct);
		  };
	  }else{
	  	el=ele;
	  	if (el.attachEvent) {
		    //el['e'+eventName+funct] = funct;
		    //el[eventName+funct] = function(){el['e'+eventName+funct](window.event);}
		    el[eventName+funct] = function(){funct(window.event);};
		    el.attachEvent( 'on'+eventName, el[eventName+funct] );
		  } else {    
		    el.addEventListener(eventName, funct, false);
		  };
		  if(!el.eventHolder) el.eventHolder = [];
		  el.eventHolder[el.eventHolder.length] = new Array(eventName, funct);
	  };
	},
	hasEventEx:function (el, eventName, funct) {
	  if (!el.eventHolder) {  
	    return false;
	  } else {
	    for (var i = 0; i < el.eventHolder.length; i++) {
	      if (el.eventHolder[i][0] == eventType && String(el.eventHolder[i][1]) == String(funct)) {
	        return true;  
	      };
	    };
	  };
	  return false;  
	},
	unbind:function (ele, eventType) {
		if(ele.length>0){
			for (var a=0; a < ele.length; a++) {
			  el=ele[a];
				if (el.eventHolder) {  	
				    var removed = 0;
				    for (var i = 0; i < el.eventHolder.length; i++) {
				      if (el.eventHolder[i][0] == eventType) {                
				        this.removeEvent(el, eventType, el.eventHolder[i][1]);
				        el.eventHolder.splice(i, 1);
				        removed++;
				        i--;
				      };
				    };
				    return (removed > 0) ? true : false;
				  } else {
				    return false; 
				  };
			};
		}else{
			el=ele;
			if (el.eventHolder) {  	
			    var removed = 0;
			    for (var i = 0; i < el.eventHolder.length; i++) {
			      if (el.eventHolder[i][0] == eventType) {                
			        this.removeEvent(el, eventType, el.eventHolder[i][1]);
			        el.eventHolder.splice(i, 1);
			        removed++;
			        i--;
			      };
			    };
			    return (removed > 0) ? true : false;
			  } else {
			    return false; 
			  };
		};
	},
	removeEvent:function (obj, type, fn) {
	  if (obj.detachEvent) {
	    obj.detachEvent( 'on'+type, obj[type+fn] );
	    obj[type+fn] = null;
	  } else {
	    obj.removeEventListener( type, fn, false );
	  };
	},
	hideAjax:function(){document.getElementById("ajaks").style.visibility="hidden";},
	showAjax:function(){
		if(document.getElementById("ajaks")==null){
			ajaks=document.createElement("div");
			ajaks.setAttribute("id","ajaks");
			ajaks.setAttribute("style","visibility:visible;");
			ajaks.innerHTML='<div class="loader"><span></span><span></span><span></span><span></span><b >Loading <i class="tacka">.</i><i class="tacka">.</i><i class="tacka">.</i></b></div>';
			document.body.appendChild(ajaks);
		}else{
			document.getElementById("ajaks").style.visibility="visible";
		};
	},
	htmlEscape:function(str) {return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');},
	htmlUnescape:function (value){return String(value).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');},
	popUp:function(p){
		p.width==undefined ? p.width="200px":"";
		p.height==undefined ? p.height="200px":"";
		p.naslov==undefined ? p.naslov="NASLOV":"";
		p.sadrzaj==undefined ? p.sadrzaj="sadrzaj":"";
		p.timeout==undefined ? p.timeout=2000:"";
		p.modal==undefined ? p.modal=false:"";
		p.onStart==undefined ? p.onStart=function(p){}:"";
		if($.sel("#popUp"))	this.remove($.sel("#popUp"));
		if(p.modal){
			modal=document.createElement("div");
			this.setStyle(modal,{
				width:"100%",
				height:"100%",
				top:"0px",
				left:"0px",
				position : 'fixed', 
				border : '1px solid silver',
				backgroundImage:'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB90IAg4lFAC6D4sAAAANSURBVAjXY/j461cHAAkzA24onMlLAAAAAElFTkSuQmCC)'
			}); 
			modal.setAttribute("id","modal");
			document.body.appendChild(modal);
		}		
		pop=document.createElement("div");
		pop.setAttribute("id","popUp");
		pop.className="borderRadiusAll senka";
		this.setStyle(pop,{
			width:p.width,
			height:p.height,
			position : 'fixed', 
			border : '1px solid silver',
			background:'white'
		});
		w=this.window_WH().width;
		h=this.window_WH().height;
		pop.style.left=(w-parseInt(p.width))/2+"px";
		pop.style.top=(h-parseInt(p.height))/2+"px";
		document.body.appendChild(pop);		
		//napravi sadrzaj popupa
		naslov=document.createElement("div");
		this.setStyle(naslov,{
			width:"98%",
			height:"20px",
			paddingLeft:"1%",
			paddingRight:"1%",
			color:"#fff",
			fontWeight:"bold",
			backgroundImage:'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QEWEiMKa7htwwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAANSURBVAjXY2BiYloLAADEALR/krRqAAAAAElFTkSuQmCC)'
		});
		gasi=document.createElement("div");
		this.setStyle(gasi,{
			width:"20px",
			height:"20px",
			cssFloat:"right",
			marginRight:"-10px",
			marginTop:"-10px",
			backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB90JEA0fMjIoXPIAAAEFSURBVEjHvZbdDcMgDISvnYAR2MAdgQ0YgY6U0TpCOoHZwH0xCm0h5Ke1JT8EJXy6i8G+YHt4TafPGcCseTo8gEk3k07O+o4/AnD6sezMqVI8jBuAxwFIyYfuMYTkE5CSeQ3mTippKWvaOP0QUv+zr+rqfhBjFCL6WiciiTGOYH6TmpSSiIgw8xuMiISZRUQkpbRZ1dxTUkeB1ZASK8rmoW2tDZm5uday9tO+sOZxC7YTIsrAfVQ9PdhGiAAIVz1cJmFmnUkxXLX8ns0e4T2cW26RnDNCCAghIOfFceccvO92iWdd4mYH1uwKMrtUTduEWeMzbeWmw8lfxq3LgQGyKN41QL4AjW5/feOluPUAAAAASUVORK5CYII=)",
			backgroundSize:"cover"
		});
		obj=this;
		this.bind(gasi,"click",function(){obj.gasiPopUp();});
		naslov.innerHTML=p.naslov;
		naslov.appendChild(gasi);
		pop.appendChild(naslov);
		kontejner=document.createElement("div");
		kontejner.innerHTML=p.sadrzaj;
		this.setStyle(kontejner,{
			width:"98%",
			cssFloat:"left",
			margin:"1%"
		});
		pop.appendChild(kontejner);
		setTimeout(p.onStart,100);
		this.interval=setTimeout(function(){
			obj.gasiPopUp();
		},p.timeout);
	},
	gasiPopUp:function(){
		obj=this;
		if($.sel("#popUp"))	{
			if($.sel("#modal")){
				this.remove(obj.sel("#modal"));
			};
			this.remove(obj.sel("#popUp"));
			clearTimeout(obj.interval);
		};
	},
	getPosition:function(ele){var x=0;var y=0;while(true){x += ele.offsetLeft;y += ele.offsetTop;if(ele.offsetParent === null){break;};ele = ele.offsetParent;};return [x, y];},	
	jsonFild2Array:function(json,fild){
		p=[];
		for (var i=0; i < json.length; i++) {
		  p.push(json[i][fild]);
		};
		return p;
	},
	//********************************///
	autocomplete:function(ele,data,option,callBack){
		var options={
			show:"up",// up or down results
			width:""
		};
		options=$.merge2json(options,option);
		pele=$.clone(ele);
		window["ac_data_"+ele.getAttribute("id")]=data;		
		pele.setAttribute("data-klon","true");
		var wrap=document.createElement("div");
		wrap.className="wrap autocomplete";
		wrap.setAttribute("style","position:relative;");
		wrap.appendChild(pele);
		ele.parentNode.replaceChild(wrap, ele);
		$.enterToTab(pele);
		var select=document.createElement("select");		
		select.setAttribute("size","5");
		select.setAttribute("style","width:100%;padding:0px;display:none;position:absolute;z-index:99999;");
		options.show!="up"?select.style.top=pele.clientHeight+"px":select.style.bottom=pele.clientHeight+"px";
		for (var i=0; i < data.length; i++) {
		  var option=document.createElement("option");
		  option.innerHTML=data[i];
		  select.appendChild(option);
		  option.onmouseover=function(){this.selected=true;};
		};
		wrap.appendChild(select);
		pele.ondblclick=function(){
			this.parentNode.querySelector("select").style.display="block";
			this.parentNode.querySelector("select").disabled=false;
			searchByValue(this.parentNode.querySelector("select"),p.value,data);
		};
		pele.onkeydown=function(e){
			var p=this;	
			if(e.keyCode==13 || e.keyCode==9){
				p.parentNode.querySelector("select").style.display="none";
				setTimeout(function(){
					callBack(p.value);
				},1);	
			}else if(e.keyCode==40 || e.keyCode==38){
				p.parentNode.querySelector("select").style.display="block";
				p.parentNode.querySelector("select").disabled=false;
				p.parentNode.querySelector("select").focus();
				if(p.parentNode.querySelectorAll("select option").length>0){
					p.parentNode.querySelectorAll("select option")[0].selected=true;
				}				
			}else{
				p.parentNode.querySelector("select").style.display="block";
				p.parentNode.querySelector("select").disabled=false;
				setTimeout(function(){
					searchByValue(p.parentNode.querySelector("select"),p.value,data);
				},1);				
			}		
		};
		select.onkeydown=function(e){
			if(e.keyCode==13){
				this.onclick();
			}			
		};
		select.onclick=function(){
			this.style.display="none";
			this.disabled=true;
			this.parentNode.querySelector("input").value=this.value;
			callBack(this.value);
		};
		
		function searchByValue(sel,p,podaci){
			if(p==undefined)p="";
			podaci=podaci.filter(
			function(valu){if(valu.toUpperCase().split(p.toUpperCase()).length>1){return valu;}});
			sel.innerHTML="";
			for (var i=0; i < podaci.length; i++) {
			  var option=document.createElement("option");
			  option.innerHTML=podaci[i];
			  select.appendChild(option);
			  option.onmouseover=function(){this.selected=true;};
			};
			if(podaci.length==0){
				sel.style.display="none";
				sel.disabled=true;
			}		
		}
		 
	},
	//********************************///	
	autocompleteOLD:function(ele,data,option,callBack){
		var options={
			show:"up",// up or down results
			width:""
		};
		options=$.merge2json(options,option);
		var id=ele.getAttribute("id");
		var wrap=document.createElement("div");
		wrap.className="wrap autocomplete";
		wrap.setAttribute("style","height:100%;width:"+options.width+";float:right;position:relative;margin-top:0px;");
		pele=$.clone(ele);
		wrap.appendChild(pele);		
		var a = ele.parentNode.replaceChild(wrap, ele);
		ele=pele;
		clas=this;		
		clas["actim_"+id]=0;
		clas["data_"+id]=data;
		clas.remove(document.querySelectorAll("style.acHover"));
		hover=document.createElement("style");
		hover.className="acHover";
		hover.innerHTML="div.acDiv input:hover{color:white;background:#6E9187;cursor:pointer;}";
		document.head.appendChild(hover);
		ele.setAttribute("data-poz",0);
		$.bind(ele,"click",function(){
			$.trigger(this,"focus");
		});
		$.bind(ele,"focus",function(){
			if(this.getAttribute("readonly")=="true") return false;
			clas.remove(document.querySelectorAll(".acDiv")[0]);
			w=this.offsetWidth;
			p=20;//izmena
			h=this.offsetHeight;
			poz=obj.getPosition(this);
			clas["ac_"+ele.getAttribute("id")]=document.createElement("div");
			clas["ac_"+ele.getAttribute("id")].className="acDiv";
			stylePop={
				width:w+"px",
				height:h*4+"px",
				position:"absolute",
				right:"0px",//izmena
				border:"solid 1px silver",
				background:"white",
				zIndex:"99999",
				overflowY:"scroll"
			};
			if(options.show=="up"){
				stylePop.bottom=h+"px";
			}else{
				stylePop.top=h+"px";
			}
			clas.setStyle(clas["ac_"+ele.getAttribute("id")],stylePop);
			ele.parentNode.appendChild(clas["ac_"+ele.getAttribute("id")]);
			valu=this.value;
			var d = clas["data_"+ele.getAttribute("id")].filter(function(val) {if(val.split(valu).length>1){return val;}});
			bringData(clas,d);
		});
		$.bind(ele,"blur",function(){
			if(this.getAttribute("readonly")=="true") return false;
			setTimeout(function(){
				clas.remove(clas["ac_"+ele.getAttribute("id")]);
				callBack(ele.value)	;			
			},500);
		});
		$.bind(ele,"keydown",function(event,obj){
			e=this;
			ev=event.keyCode;
			setTimeout(function(){
				valu=e.value;	
				if(ev==39){
					if(e.parentNode.querySelector("div.acDiv input.selected")==null){
						$.trigger(e,"click");
					};
				}else if(ev==13){
					if(e.parentNode.querySelector("div.acDiv input.selected")!=null){
						$.trigger(e.parentNode.querySelector("div.acDiv input.selected"),"click");
					};								
					clas.remove(clas["ac_"+ele.getAttribute("id")]);
					$.trigger(e,"blur");
				}else if(ev==40){
					inp=e.parentNode.querySelectorAll("div.acDiv input");
					if(inp.length==0){return false;};
					for (var aa=0; aa < inp.length; aa++) {
					  if(inp[aa].getAttribute("class")=="selected"){
					  	e.setAttribute("data-poz",aa);
					  	$.removeClass(inp[aa],"selected");
					  };
					};
					indeks=parseInt(e.getAttribute("data-poz"))+1;
					indeks=indeks>=inp.length?(inp.length-1):indeks;
					$.addClass(inp[indeks],"selected");
				}else if(ev==38){
					inp=e.parentNode.querySelectorAll("div.acDiv input");
					if(inp.length==0){return false;};
					for (var aa=0; aa < inp.length; aa++) {
					  if(inp[aa].getAttribute("class")=="selected"){
					  	e.setAttribute("data-poz",aa);
					  	$.removeClass(inp[aa],"selected");
					  };
					};
					indeks=parseInt(e.getAttribute("data-poz"))-1;
					indeks=indeks<0?0:indeks;
					$.addClass(inp[indeks],"selected");
				}else{	
					var d = data.filter(function(val){if(val.split(valu).length>1){return val;}});
					bringData(clas,d);
				};
			},1);			  	
		});
		function bringData(obj,data){
			clas["ac_"+ele.getAttribute("id")].innerHTML="";
			for (var i=0; i < data.length; i++) {
				var s=document.createElement("input");
				s.setAttribute("style","-webkit-box-shadow:  0px 0px 0px 0px #000;box-shadow:  0px 0px 0px 0px #000;border:none;width:100%;height:25px;line-height: 25px;float:left;");
				s.readOnly=true;
				s.value=data[i];
				$.bind(s,"click",function(){
					ele.value=this.value;
				});
				$.bind(s,"dblclick",function(){
					ele.value=this.value;
					obj.remove(clas["ac_"+ele.getAttribute("id")]);
				});
				$.bind(s,"keypress",function(){
					if(event.keyCode==13){
						obj.remove(clas["ac_"+ele.getAttribute("id")]);
					};
				});
				clas["ac_"+ele.getAttribute("id")].appendChild(s);
			};	
		};
	},
	slider:function(obj,p){//to finish :)
		obj.style.width="10%";		
		ribb=document.createElement("div");
		ribb.className="ribbonSlider";
		slid=document.createElement("div");
		slid.className="slider";
		ribb.appendChild(slid);
		obj.parentNode.appendChild(ribb);		
		ribb.onmousedown = function(e) {
		    var xCoor = e.clientX-this.offsetLeft;
		    $.animate(slid,{left:xCoor+"px",top:"0px",time:1});
		};
	},
	window_WH:function(obj){
		var width = window.innerWidth ||
            html.clientWidth  ||
            body.clientWidth  ||
            screen.availWidth;
		var height = window.innerHeight ||
             html.clientHeight  ||
             body.clientHeight  ||
             screen.availHeight;
        if(obj!=undefined){
        	var width = obj.innerWidth ||
	            obj.clientWidth;	
			var height = obj.innerHeight ||
	             obj.clientHeight ;
        }
        return {width:width,height:height};
	},
	animate:function(obj,p){
		if(obj==undefined)return false;		
		if(obj.getAttribute("fwAnimate")!=null){
			time=obj.getAttribute("fwAnimate");
		}else{
			time=new Date().getTime();
			obj.setAttribute("fwAnimate",time);
		}
		animeCSS=document.createElement("style");
		animeCSS.className="fwAnimate";
		animeCSS.setAttribute("fwAnimate",time);
		p.time=p.time+"s";		
		obj.style.webkitTransform="translate3d("+p.left+","+p.top+","+"0px"+")";
		obj.style.webkitTransition="all "+p.time+" ease";
		obj.style.MozTransform="translate3d("+p.left+","+p.top+","+"0px"+")";
		obj.style.MozTransition="all "+p.time+" ease";
		obj.style.OTransform="translate3d("+p.left+","+p.top+","+"0px"+")";
		obj.style.OTransition="all "+p.time+" ease";
		obj.style.msTransform="translate3d("+p.left+","+p.top+","+"0px"+")";
		obj.style.msTransition="all "+p.time+" ease";
		return obj;
	},
	UNIXTime:function(){
		return Date.now();
	},
	today:function(tip){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		if(tip==undefined){
			if(dd<10){dd='0'+dd;} if(mm<10){mm='0'+mm;} today = dd+'.'+mm+'.'+yyyy;
		}else{
			if(dd<10){dd='0'+dd;} if(mm<10){mm='0'+mm;} today = yyyy+'-'+mm+'-'+dd;
		};
		return today;
	},
	enterToTab:function(ele){
		$.addClass(ele,"enterToTab");		
    	ele.onkeydown = function(event){    		
    		if(event.keyCode==13){
    			for (var i=0; i < $.sel(".enterToTab:not(:disabled)").length; i++) {
				  if($.sel(".enterToTab:not(:disabled)")[i]==this){
				  	if($.sel(".enterToTab:not(:disabled)")[i+1]!=undefined){
				  		$.sel(".enterToTab:not(:disabled)")[i+1].focus();
				  	}else{
				  		return false;
				  	};				  	
				  };
				};
    		};    		
    	};   
	},
	onlyNumbers:function(ele){
		ele.onkeypress=function(evt) {
		    evt = (evt) ? evt : window.event;
		    var charCode = (evt.which) ? evt.which : evt.keyCode;
		    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode!=44 && charCode!=45) {
		        return false;
		    };
		    return true;
		};
	},
	onlyAlpha:function(ele){
		ele.onkeypress=function(evt){
            var keyCode = (evt.which) ? evt.which : evt.keyCode;
            if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
            return false;
                return true;
       };
	},
	phoneValidator:function(ele){//nije dobra metoda
		ele.onblur=function() { 
			phone=this.value;
		    var re = /^\d{10}$/;
		    if(!re.test(phone) && phone!=""){
		    	this.focus();
		    	alert("Telfonski broj nije ispravan");
		    	return false;
		    }else{
		    	return true;
		    };
		};
	},
	timeValidator:function(ele){//dobra je radi
		ele.onblur=function() { 
			phone=this.value;
		    var re = /([0-1][0-9]|2[0-3]):[0-5][0-9]/;
		    if(!re.test(phone) && phone!=""){
		    	this.focus();
		    	alert("Format vremena nije korektan hh:mm");
		    	return false;
		    }else{
		    	return true;
		    };
		};
	},
	emailValidator:function(ele){
		ele.onblur=function() { 
			email=this.value;
		    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    if(!re.test(email) && email!=""){
		    	this.focus();
		    	alert("Email adresa nije ispravna!");
		    	return false;
		    }else{
		    	return true;
		    };
		};
	},
	rte:function(ele){		
		id=ele.getAttribute("id")+"_"+this.UNIXTime();
		ph=ele.getAttribute("placeholder");
		w=ele.clientWidth;
		h=ele.clientHeight*1.5;
		ele.style.display='none';
		kom=document.createElement("div");
		kom.setAttribute("style","float:left;width:"+w+"px;height:23px;background:inherit;");
		ele.parentNode.appendChild(kom);
		k="<img style='float:left;' class=\"intLink\" title=\"Bold\" data-command='bold' src=\"data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAInhI+pa+H9mJy0LhdgtrxzDG5WGFVk6aXqyk6Y9kXvKKNuLbb6zgMFADs=\" />";
		k+="<img style='float:left;' class=\"intLink\" title=\"Italic\" data-command='italic' src=\"data:image/gif;base64,R0lGODlhFgAWAKEDAAAAAF9vj5WIbf///yH5BAEAAAMALAAAAAAWABYAAAIjnI+py+0Po5x0gXvruEKHrF2BB1YiCWgbMFIYpsbyTNd2UwAAOw==\" />";
		k+="<img style='float:left;' class=\"intLink\" title=\"Underline\" data-command='underline' src=\"data:image/gif;base64,R0lGODlhFgAWAKECAAAAAF9vj////////yH5BAEAAAIALAAAAAAWABYAAAIrlI+py+0Po5zUgAsEzvEeL4Ea15EiJJ5PSqJmuwKBEKgxVuXWtun+DwxCCgA7\" />";
		k+="<span class='fontDESC' style='font-size:small;margin-left:5px;font-weight:bold;cursor:pointer;'>A-</span><span class='fontASC' style='margin-left:5px;font-weight:bold;cursor:pointer;'>A+</span>";
		kom.innerHTML=k;		
		$.bind(kom.querySelectorAll("img"),"click",function(){
			pom=this.parentNode.parentNode.getElementsByTagName("textarea")[0].rte;
			pom.execCommand(this.getAttribute("data-command"),"","");
		});
		
		$.bind(kom.querySelectorAll("span.fontDESC")[0],"click",function(){
			pom=this.parentNode.parentNode.getElementsByTagName("textarea")[0].rte;
			if(pom.font==undefined){pom.font=2;}
			pom.font--;
			if(pom.font<1){pom.font=1;}
			pom.execCommand("fontsize","",pom.font);
		});
		$.bind(kom.querySelectorAll("span.fontASC")[0],"click",function(){
			pom=this.parentNode.parentNode.getElementsByTagName("textarea")[0].rte;
			if(pom.font==undefined){pom.font=2;}
			pom.font++;
			if(pom.font>10){pom.font=10;}
			pom.execCommand("fontsize","",pom.font);
		});
		
		iframe=document.createElement("iframe");	
		iframe.focus();
		ele.parentNode.appendChild(iframe);
		iframe.setAttribute("style","width:"+w+"px;height:"+h+"px;border:solid 1px silver;background:white;");		
		iframe.setAttribute("id",id);
		ele['rte'] = iframe.contentDocument || iframe.contentWindow.document;			
		var offset = document.body.scrollTop || 0;		
		ele.rte.designMode="on";		
		ele.rte.open();		
		ele.rte.write('<head><style type="text/css">body{ font-family:arial; font-size:13px;padding:2px;margin:0px; }</style> </head>');
		ele.rte.close();		
		if(document.location.toString().match(/#(top)?$/)) {//fix za scroll na hromu
		    iframe.contentWindow.document.body.scrollTop = 0;
		    document.body.scrollTop = offset;
		}			
		ele.rte.body.innerHTML=ph;		
		$.bind(ele.rte.body,"blur",function(){ele.value=ele.rte.body.innerHTML;});		
		ele.reload=function(){this.rte.body.innerHTML=this.value;};
		return true;		
	},
	rteEdit:function(textEditor,x,y){
   			textEditor.document.execCommand(x,"",y);
   			//textEditor.focus();
	},
	fb_init:function(p){
		p={appId:'173992086076145',status:true,cookie:true,xfbml:true};
		sc=document.createElement("script");
		sc.src="//connect.facebook.net/en_US/all.js";
		document.head.appendChild(sc);
		sc.onload=function(){
			FB.init(p);
		};
	},
	fb_login:function(){
		FB.login(function(response) {
			//response.status "not_authorized","connected"
			FB.api('/me', function(response) {
				console.log("USER",response);
			});
	        if (response.status == 'connected') {
	            var user_id = response.authResponse.userID;
	            var page_id = "100002789767702"; // VTSNS
	            var fql_query = "SELECT uid FROM page_fan WHERE page_id="+page_id+" and uid="+user_id;
	        	/*
	            FB.api({
	                method: 'fql.query',
	                query: fql_query
	            },
	            function(response){
	            	console.log("@",response)
	                if (response[0]) {
	                    //$("#container_like").show();
	                } else {
	                    //$("#container_notlike").show();
	                }
	            }
	            );*/
	           FB.Data.query(fql_query).wait(function(rows) {console.log("ROW",rows);});  
	        } else {
	        // user is not logged in
	        };
	    });
	},
	tableGenerate:function(p){
		var tab=document.createElement("table");
		$.addClass(tab,"sortable");
		p.border!=undefined?tab.setAttribute("border",parseInt(p.border)):false;
		var thead=document.createElement("thead");
		thead.setAttribute("style","background-color:#eee;color:#666666;font-weight: bold;cursor: default;");		
		var tbody=document.createElement("tbody");
		var tr=document.createElement("tr");
		var th=document.createElement("th");
		tab.appendChild(thead);
		tab.appendChild(tbody);
		th.innerHTML="#";
		tr.appendChild(th);		
		thead.appendChild(tr);
		for(key in p.data[0]){
			var th=document.createElement("th");
			th.innerHTML=key;
			tr.appendChild(th);
		};
		
		for (var i=0; i < p.data.length; i++) {
		  var tr=document.createElement("tr");
		  var td=document.createElement("td");
		  td.innerHTML=i+1;
		  tr.appendChild(td);
		  for(key in p.data[i]){
				var td=document.createElement("td");
				td.style.padding='2px';
				td.innerHTML=p.data[i][key];
				tr.appendChild(td);
			};
		  tbody.appendChild(tr);
		};		
		p.container.innerHTML="";
		p.container.appendChild(tab);
		sorttable.makeSortable(tab);
	},
	tableToExcel:function(p){
		var dlink=document.createElement('a');
        var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"></head><body><table>{table}</table></body></html>'
        , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))); }
        , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }); };  
            if (!p.table.nodeType) p.table = document.getElementById(p.table);
            var ctx = { worksheet: p.name || 'Worksheet', table: p.table.innerHTML };
            dlink.href = uri + base64(format(template, ctx));
            dlink.download = p.filename;
            dlink.click();        
	},
	documentScrollInfo:function(){
		document.getScroll= function(){
		 if(window.pageYOffset!= undefined){return [pageXOffset, pageYOffset];}
		 else{  var sx, sy, d= document, r= d.documentElement, b= d.body;
		  sx= r.scrollLeft || b.scrollLeft || 0;sy= r.scrollTop || b.scrollTop || 0;
		  return [sx, sy];
		 };
		};
	},
	isElementVisible:function(elt){
		function getPositionTop(element){
		    var offset = 0;
		    while(element) {
		    	offset += element["offsetTop"];
		    	element = element.offsetParent;
		    }
		    return offset;
		};
		var posTop = getPositionTop(elt);
	    var posBottom = posTop + elt.offsetHeight;
	    // Get the top and bottom position of the *visible* part of the window.
	    var visibleTop = document.body.scrollTop;
	    var visibleBottom = visibleTop + elt.offsetHeight;
	    //console.log(data,(posBottom >= visibleTop) && (posTop <= visibleBottom))
	    return ((visibleTop <= posTop) && (visibleBottom >= posBottom));
	},
	ElementVisibleCorection:function(elt){
		var scr=elt.offsetHeight;	
		window.onscroll = function (oEvent) {
			raz=Math.abs(scr-document.body.scrollTop);
			(scr-document.body.scrollTop)<0?"":raz=raz*(-1);	
			poz=parseInt(elt.style.top);
			if(!$.isElementVisible(elt)){
				elt.style.top=(poz+raz)+"px";
				scr=poz+raz-20;
			}
		};
	},
	swipedetect:function(el, callback){ 
		 var touchsurface = el,
		 swipedir,
		 startX,
		 startY,
		 distX,
		 distY,
		 threshold = 150, //required min distance traveled to be considered swipe
		 restraint = 100, // maximum distance allowed at the same time in perpendicular direction
		 allowedTime = 300, // maximum time allowed to travel that distance
		 elapsedTime,
		 startTime,
		 handleswipe = callback || function(swipedir){};
		 
		 touchsurface.addEventListener('touchstart', function(e){
		  var touchobj = e.changedTouches[0];
		  swipedir = 'none';
		  dist = 0;
		  startX = touchobj.pageX;
		  startY = touchobj.pageY;
		  startTime = new Date().getTime(); // record time when finger first makes contact with surface
		  e.preventDefault();		 
		 }, false);
		 
		 touchsurface.addEventListener('touchmove', function(e){
		  e.preventDefault(); // prevent scrolling when inside DIV
		 }, false);
		 
		 touchsurface.addEventListener('touchend', function(e){
		  var touchobj = e.changedTouches[0];
		  distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
		  distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
		  elapsedTime = new Date().getTime() - startTime; // get time elapsed
		  if (elapsedTime <= allowedTime){ // first condition for awipe met
		   if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
		    swipedir = (distX < 0)? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
		   }
		   else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
		    swipedir = (distY < 0)? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
		   }
		  }
		  handleswipe(swipedir);
		  e.preventDefault();
		 }, false);
		 //$.swipedetect(document.body,function(swipedir){console.log(swipedir)})
	}
};
var $=new fwDNK;



