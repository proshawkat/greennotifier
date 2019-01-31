//show dashboard message 
var notify_message = function (message, status) {
	var notifier = new greenNotifier ();
	notifier.customConfig = {

	} ; 
	notifier.notify ( message , status );
}

notify_message ("Variants updated successfully" , 'success' );