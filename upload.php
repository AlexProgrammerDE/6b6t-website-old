<!DOCTYPE HTML>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/global.css">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>6b6t - Upload</title>
<link rel="stylesheet" type="text/css" href="css/animate.css">
<script src="resources-uploadify/jquery.min.js" type="text/javascript"></script>
<script src="resources-uploadify/jquery.uploadifive.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="resources-uploadify/uploadifive.css">
<style type="text/css">
#queue {
	color: black;
	border: 1px solid #E5E5E5;
	height: 177px;
	overflow: auto;
	margin-bottom: 10px;
	padding: 0 3px 3px;
	width: 300px;
	background-color: #ffffff;
}
</style>
<script src="https://cdn.jsdelivr.net/gh/leonardosnt/mc-player-counter/dist/mc-player-counter.min.js"></script>
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

	<div class="container clearfix"> 
		<div class="content">
			<section class="top-a animated slideInUp">
            
			</section>
			<article style="text-align: center; display: block; margin-left: auto; margin-right: auto; width: 30%;" class="article animated slideInUp">		
				<h1>Upload Images to the gallery</h1>
				<form style="text-align: center; display: block; margin-left: auto; margin-right: auto;">
				    <ul style="list-style-type: none;">		
						<li><div style="text-align: center; display: block; margin-left: auto; margin-right: auto;" id="queue"></div></li>
						<li><input style="text-align: center; display: block; margin-left: auto; margin-right: auto;" id="file_upload" name="file_upload" type="file" multiple="false"></li>
						<li><a style="position: relative; top: 8px;" href="javascript:$('#file_upload').uploadifive('upload')">Upload Files</a></li>
					</ul>
				</form>
			</article>
		</div>
	</div>
	
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