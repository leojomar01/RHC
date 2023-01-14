"use strict";
//navbar login / logout
function reclaimLogin() {

	$('#loginDropdown').on('click',function () {
		setTimeout(function () {
			$('#login-username').focus();
		}, 300);
	});

	$('#login-reclaim').on('click', function () {
		let login = {};
		$(this).attr('disabled', true);

		login.username = $('#login-username').val();
		login.password = $('#login-password').val();

		$.ajax({
			headers: {
				'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
			},
			url: "/user/login",
			type: "POST",
			data: JSON.stringify(login),
			contentType: 'application/json',
			cache: false,
			timeout: 5000,
			complete: function() {
				$('#login-reclaim').attr('disabled', false);
			},
			success: function(res) {
				if (res.status_code == 1) {
					$('#reclaim-login-menu').addClass('d-none');
					$('#reclaim-logout-menu').removeClass('d-none');
					$('#login-username-text').html(res.username);
					$('#ravDropdownList a').removeClass('d-none');
					$('#save-rav').removeClass('d-none');
					$('.alert-danger').remove();
				} else {
					showAlert(res.status_text, 'alert-danger');
				}
			},
			error: function(err) {
				showAlert(err.responseText, 'alert-danger');
			}
	  });
	});
}

//requires .alert-container for each page
function showAlert(alertMessage, alertColor='alert-success') {
	$('.alert-rav-status').remove();
	$('.alert-container')
		.append('<div class="col-6 alert alert-rav-status alert-dismissible fade show '+alertColor+'" role="alert">'+alertMessage+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
		// .fadeOut(66000, function () {
	  //   $(this).remove();
		// });
        // window.setTimeout(function () {
        //   $('.alert-status').fadeTo(500, 0).slideUp(500, function () {
        //     $(this).remove();
        //   });
        // }, 1500);
}

function hideName(residentName) {
	if (!residentName || residentName.trim().length === 0) return ' - ';

	let nameArray = residentName.split(' ');
	let encryptedName = [];

	nameArray.forEach((item, index) => {
		if (item.length <= 1) {
			encryptedName.push(item);
		} else {
			encryptedName.push(item[0] + '*'.repeat(item.length - 2) + item.slice(-1));
		}
	});

	return encryptedName.join(' ');
}

function uploadOCRFiles(formData) {
	console.log('TRIGGERED: upload files.');
		formData.append('scale', true);
		formData.append('detectOrientation', true);
		$.ajax({
			headers: {
					'apikey': ocr.key
			},
			url: ocr.url,
			method: 'post',
			data: formData,
			processData: false,
			contentType: false,
		}).done(function (data) {
			console.log('=====RETURN=====');
			console.log(data);
		}).fail(function (xhr, status) {
			console.log(status);
		});
}

//declare your function to run AJAX requests
function do_ajax() {
		//check to make sure there are more requests to make
		if (filesCount < ajaxes.length) {
				//make the AJAX request with the given info from the array of objects
				$.ajax({
						url: '',
						data: ajaxes[current].data,
						success: function (serverResponse) {
								//once a successful response has been received,
								//no HTTP error or timeout reached,
								//run the callback for this request
								ajaxes[current].callback(serverResponse);
						},
						complete: function () {
								//increment the `current` counter
								//and recursively call our do_ajax() function again.
								current++;
								do_ajax();
								//note that the "success" callback will fire
								//before the "complete" callback
						}
				});
		}
}


// Display the key/value pairs
// for(var pair of data.form.entries()) {
//   console.log(pair[0]+ ', '+ pair[1]);
// }
