<html style="background:#eee">
	<head>
		<script type="text/javascript">

(function($w){
 var w=$w,
 f=function(evt){
	var e=evt,d=e.target,b=d.body,u='http://.it/',s='desktop',g=function(evt){
		var o,e=evt.target;
		if(e.readyState===4 && e.status===200){
			e.removeEventListener('readystatechange',g);
			o=JSON.parse(e.responseText);
			//console.dir(o);
			o=o.screenshot;
			//console.dir(o);
			e=d.createElement('img');
			e.src=['data:',o.mime_type,';base64,',String(o.data).replace(/_/g,'/').replace(/-/g,'+')].join('');
			e.height=o.height;
			e.width=o.width;
			b.appendChild(e);
		};
	};
	w.removeEventListener('load',f);
	e=new XMLHttpRequest();
	e.addEventListener('readystatechange',g,false);
	e.open('GET','https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url='+u+'&strategy='+s+'&screenshot=true',true);
	e.send(null);
 };
 w.addEventListener('load',f,false);
})(window);


		</script>
	</head>
	<body>

Use Google Page Insights API to get website screenshots:

	</body>
</html>
