<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h1>welcome to scheduler app</h1>
	<div id = container>
	<button onclick=newEvent()> schedule new event</button>

	<!-- list of existing events here -->
	<?php include('events.php'); ?>
	</div>
<script>
	function newEvent() {
		// redirect to new event page, possibly through ajax
	}
</script>
</body>
</html>