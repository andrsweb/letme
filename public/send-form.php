<?php

/**
 * Clean incoming value from trash.
 *
 * @param	mixed	$value	Some value to clean.
 * @return	mixed	$value	The same value, but cleaned.
 */
function as_clean_value( $value )
{
	$value = trim( $value );
	$value = stripslashes( $value );
	$value = strip_tags( $value );

	return htmlspecialchars( $value );
}


if( ! empty( $_POST ) && isset( $_POST['func'] ) ){
	switch( $_POST['func'] ){
		case 'feedback-form':
			as_send_feedback_form();
			break;

		default:
			as_send_feedback_form();
	}
}

function as_send_feedback_form(){
	$name		= isset( $_POST['name'] ) ? as_clean_value( $_POST['name'] ) : null;
	$email		= isset( $_POST['email'] ) ? as_clean_value( $_POST['email'] ) : null;
	$text		= isset( $_POST['textarea'] ) ? as_clean_value( $_POST['textarea'] ) : null;
	$title		= 'Fast message';

	// Prepare message for mail.
	$message = "Hello!\n" .
		"{$title}:\n\n" .
		"Name - $name\n" .
		"Email - $email\n" .
		"Text - $text \n\n\n";

	as_send_email( $title, $message );
}

/**
 * @param string $subject
 * @param string $message
 * @return void
 */
function as_send_email( string $subject, string $message ){
	// Mail headers.
	$headers = "From: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n" .
		"Reply-To: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n" .
		"X-Mailer: PHP/" . phpversion();

	$result = mail('Your email', $subject, $message, $headers );

	if( $result )
		echo json_encode( [
			'success'	=> 1,
			'message'	=> 'Спасибо за Ваш отзыв. В течении суток мы его опубликуем.'
		] );	// Success.
	else
		echo json_encode( [
			'success'	=> 0,
			'message'	=> 'Ошибка отправки. Пожалуйста попробуйте немного позднее'
		] );	// Failed.
}

die();