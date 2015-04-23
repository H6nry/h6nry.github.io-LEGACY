var template = ' \
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> \
<html> \
<head> \
<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
<meta charset="utf-8"> \
<link rel="shortcut icon" href=""> \
<meta name="robots" content="index,follow"> \
<!--<meta http-equiv="cache-control" content="no-cache">--> \
<title>H6nry\'s page</title> \
</head> \
<body text="#000000" link="#404040" alink="#404040" vlink="#404040" style="background:none;"><br> \
 \
<div align="center" style="background-color:#77ffff"> \
<h1>H6nry\'s Repo</h1> \
</div> \
 \
<div align="center" style="background-color:#FFFFFF;"> \
<table><td> \
';

var content = document.getElementById('content').innerHTML;

var bottom = '\
<h3><a href="https://twitter.com/H6nry_/" target="_blank">Me on twitter: H6nry_</a><br> \
<a href="https://github.com/H6nry/" target="_blank">Me on Github: H6nry</a><br> \
<a href="http://h6nry.github.io/" target="_blank">My Website</a></h3> \
';
document.write(template + content + bottom);