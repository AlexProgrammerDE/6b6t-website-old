<!DOCTYPE HTML>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/global.css">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>6b6t - Upload</title>
<script src="resources-uploadify/jquery.min.js" type="text/javascript"></script>
<script src="resources-uploadify/jquery.uploadifive.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="resources-uploadify/uploadifive.css">
<style type="text/css">
.uploadifive-button {
	float: left;
	margin-right: 10px;
}
#queue {
	border: 1px solid #E5E5E5;
	height: 177px;
	overflow: auto;
	margin-bottom: 10px;
	padding: 0 3px 3px;
	width: 300px;
	background-color: #ffffff;
}
</style>
</head>

<body>
    <header class="header">
        <div class="container">
            <ul style="overflow: hidden; list-style-type: none; margin: 0; padding: 0;">
				<li class="logo"><a href="index.html"><img src="img/logo.png" alt="logo" class="logo hvr-grow" height="64px" width="64px"></a></li>
				<li class="navbutton">Online: <span data-playercounter-ip="6b6t.org">0</span> / 9000</li>
				<a class="nav" href="upload.php"><li class="navbutton">Upload</li></a>
				<a class="nav" href="gallery.php"><li class="navbutton">Gallery</li></a>
				<a class="nav" href="index.html"><li class="navbutton">Home</li></a>
            </ul>                     
        </div>
    </header>

	<h1>UploadiFive Demo</h1>
	<form>
		<div id="queue"></div>
		<input id="file_upload" name="file_upload" type="file" multiple="true">
		<a style="position: relative; top: 8px;" href="javascript:$('#file_upload').uploadifive('upload')">Upload Files</a>
	</form>

	<script type="text/javascript">
		<?php $timestamp = time();?>
		$(function() {
			$('#file_upload').uploadifive({
				'auto'             : false,
				'checkScript'      : 'resources-uploadify/check-exists.php',
				'fileType'         : 'image/png',
				'formData'         : {
									   'timestamp' : '<?php echo $timestamp;?>',
									   'token'     : '<?php echo md5('unique_salt' . $timestamp);?>'
				                     },
				'queueID'          : 'queue',
				'uploadScript'     : 'resources-uploadify/uploadifive.php',
				'onUploadComplete' : function(file, data) { console.log(data); }
			});
		});
	</script>
</body>
</html>