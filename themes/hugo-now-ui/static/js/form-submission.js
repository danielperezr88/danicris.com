$('form').each((_, elem)=>{
	$(elem).find("input[type='submit']").on('click', (e) => {
		e.preventDefault();
		let form_data = {
			name: $(elem).find("input[name='name']").val(),
			email: $(elem).find("input[name='email']").val(),
			text: $(elem).find("textarea").val()
		};
		console.log(form_data);
		var jqxhr = $.ajax({
			method: "GET",
			url: "https://script.google.com/macros/s/AKfycbwW6BagBLB3ornW__J2a9_nhspzUJ4kQrnA7WpAk3mOWH7kFbRR/exec",
			dataType: "json",
			data: form_data,
			success: (data)=>{
				console.log("Success!");
				console.log(data);
			},
			error: (_, textStatus, errorThrown) => {
				console.error("Error!");
				console.error(textStatus);
			}
		});
	});
})