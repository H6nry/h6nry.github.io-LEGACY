var title = document.getElementById('title').innerHTML;
var content = document.getElementById('content').innerHTML;
var template = '\
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> \
<html> \
<head> \
<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
<meta charset="utf-8"> \
<link rel="shortcut icon" href=""> \
<meta name="robots" content="index,follow"> \
<meta http-equiv="cache-control" content="Public|Private"> \
<title>'+title+'</title> \
</head> \
<body text="#000000" bgcolor="#FFFFFF" link="#404040" alink="#404040" vlink="#404040" style="font-family: sans-serif;"> \
\
<div align="center" style="background-color:#77ffff; font-family: serif; width:100%;"> \
<h1>H6nry\'s Page</h1> \
"Doing the magic." \
</div> \
 \
<table style="width:100%"> \
<tr style="width:100%"> \
<td style="background-color:#77ffff;"><br> \
<a href="/index.html">Home</a><br><br> \
<a href="/projects.html">Projects</a><br><br> \
<a href="http://h6nry.github.io/repo/">Cydia repo</a><br><br> \
<a href="/tutorial-cydia-repo.html">Tutorial: How to host your own Cydia repo</a><br><br> \
<a href="http://github.com/H6nry/" target="_blank">Github</a><br><br> \
</td> \
<td colspan="2"> \
</td> \
\
<td style="overflow:hidden; white-space: pre-wrap; background-color:#77ffff;"> \
<iframe src="counter.html" seamless="seamless" frameBorder="0"></iframe>\
</td> \
\
</tr> \
</table> \
<div style="text-align: justify;font-size:110%; background-color:#FFFFFF; min-width: 500px"><br> \
' + content + ' \
</div> \
';
document.documentElement.innerHTML = template;
