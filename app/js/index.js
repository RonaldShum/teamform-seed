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
    initalizeFirebase();
        
	//Add login event
	$("#btnLogin").click(function(){
		//Get email and pass
		const email = $('#txtEmail').val();
		const pass = $('#txtPassword').val();
		const auth = firebase.auth();
		// Sign in 
		const promise = auth.signInWithEmailAndPassword(email,pass);
		promise.catch( e=> console.log(e.message));
	});

	//Add signup event
	$("#btnSignUp").click(function(){
		//Get email and pass
		// TODO: CHECK 4 REAL EMAILZ	 
		const email = $('#txtEmail').val();
		const pass = $('#txtPassword').val();
		const auth = firebase.auth();
		// Sign in 
		const promise = auth.createUserWithEmailAndPassword(email,pass);
		promise.catch( e=> console.log(e.message));
		// console.log("i have pressed btnSignUp");
	});

	//Add Logout event 
	$("#btnLogout").click(function(){
		firebase.auth().signOut();
	});

	        
	//Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);
			$('#btnLogout').show();
			$('#login_box').hide();
		}else{
			console.log('not logged in');
			$('#btnLogout').hide();
			$('#login_box').show();
			$('#txtEmail').val("");
			$('#txtPassword').val("");
		}
	});

});