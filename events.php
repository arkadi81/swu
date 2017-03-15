<?php

	// idea - can include user authentication to have personalized scheduler 

	// pseudo:
	// present table from mysql which will include 

	// connect to mysql db using mysql_connect, select db etc
	
	// pull $sample_events from sql (or json file)

	$sample_events = [
		{ 
			event_name: 'breakfast',
			whenDate: '3/15/2017',
			whenTime: '9:00',
			recurring: True,
			RecurringInterval: // daily / weekly / monthly
			DaysofWeek: [] // T/F for each day of week if applicable
			howManyWeeks: 4 // every 4 weeks?
			stopWhen: // some sort of stop condition
		}
	]

	$table_header = '<table><th><td>Scheduled events</td></th>'

	for ($i = 0; $sample_events.length; i++ ) {
		// output a table row with the event information , and an appropriate button to edit or delete it
		$row = '<tr>'.$sample_events[i].event_name. // etc + buttons with unique ids
		echo $row	
	}

	echo '</table>'

?>

<script>

	function edit_event(id) {
		// redirect to event_edit.php, pass id as RESTpost
	}

	function delete_event(id) {
		// redirect to event_del.php
	}
</script>
