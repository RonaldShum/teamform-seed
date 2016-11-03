$(document).ready(function(){


    $("#btn_admin").click(function(){
    	var val = $('#input_text').val();
    	if ( val !== '' ) {
    		var url = "admin.html?q=" + val;
    		window.location.href= url ;
    		return false;
    	}
    });

    $("#btn_leader").click(function(){
    	var val = $('#input_text').val();
    	if ( val !== '' ) {
    		var url = "team.html?q=" + val;
    		window.location.href= url ;
    		return false;
    	}
    });

    $("#btn_member").click(function(){
    	var val = $('#input_text').val();
    	if ( val !== '' ) {
    		var url = "member.html?q=" + val;
    		window.location.href= url ;
    		return false;
    	}
    });

	     
      // Initialize Firebase
       const config = {
        apiKey: "AIzaSyCw7pPwTqi5mXO84LEfYOVUOI1_UPTTg94",
    	authDomain: "teapot-576b6.firebaseapp.com",
	    databaseURL: "https://teapot-576b6.firebaseio.com",
        storageBucket: "teapot-576b6.appspot.com",
        messagingSenderId: "955450264497"
      };
        firebase.initializeApp(config);
        
		//Add login event
		$("#btnLogin").click(function(){
			const email = $('#txtEmail').val();
			const pass = $('#txtPassword').val();
		});
	        


});