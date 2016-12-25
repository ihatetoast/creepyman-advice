$(document ).ready(function() {
	

	var $adviceSlip = $("#adviceSlip");
	var $talkBubble = $("#talkBubble");
	var $haroldAdvice = $('#haroldAdvice');
	var $hellNo = $("#hellNo");
	var intros = ["You got a purty face, you know that? ", "I like rabbits and playing with glue. ", "Want to buy a watch? ", "I love pickles. ", "Sometimes, I eat paste. "];


	
	$talkBubble.hide();
	function getAdvice(data){
		var randoIntro = Math.floor(Math.random() * (intros.length)); 
		$talkBubble.html(
			`<div class="receipt">
				<span class="advice">Hey. ${intros[randoIntro]} Wanna hear something? ${data.slip.advice}</span>
			</div>`
		);
	}
	function avoidAdvice(data){
		$talkBubble.html(
			`<div class="receipt">
				<span class="advice">I don't care. I'm Dodgy Harold and foist my opinions on people whether they care or not. Let me tell you this:  ${data.slip.advice}</span>
			</div>`
		);
	}
	$haroldAdvice.click(function(){
		// alert("advise me button clicked");
		$talkBubble.show();
		$haroldAdvice.html("More, Harold.");
		$hellNo.html("Ugh. Shtaaaahp.");
		$.ajax({
			dataType: 'JSON',
			type: 'GET',
			url: 'http://api.adviceslip.com/advice',
			success: function(data){
				console.log("you got advice: "+data.slip.advice);
				getAdvice(data)

			},
			error: function(error){
				alert('Error loading Advice Slip.');
			}
		});
	});
	$hellNo.click(function(){
		$talkBubble.show();
		$haroldAdvice.html("Fine. Go ahead.");
		$.ajax({
			dataType: 'JSON',
			type: 'GET',
			url: 'http://api.adviceslip.com/advice',
			success: function(data){
				console.log("you got advice: "+data.slip.advice);
				avoidAdvice(data)

			},
			error: function(error){
				alert('Error loading Advice Slip.');
			}
		});
	});
});
