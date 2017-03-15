<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<script>
	function newEvent() {
		// redirect to new event page, possibly through ajax
		window.location = "event_new.php";
	}
</script>


	<h1>welcome to scheduler app</h1>
	<div id = container>
	<button onClick=newEvent()> schedule new event</button>

	<!-- list of existing events here -->
		<div id = event_list>
			list of existing events will go here
			<?php include('events.php') or die('php backend: list still doesnt work'); ?>

		</div>
	
	</div>

</body>
</html>