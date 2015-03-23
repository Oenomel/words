
if(Meteor.isClient) {
	
	setDefaultSession = function () {
		Session.set('memberId', '');
		Session.set('auth', '');
	}
	
	loginFunc = function () {
		var id = $("input[name='memberId']").val();
		var pw = $("input[name='memberPw']").val();
		
		Meteor.call("loginMethod", id, pw, function (err, res) {
			if(err) {
				alert("Error!");
			}
			else {
				loginResult(res, id);
				Router.go("/home");
			}
		});
	}
	
	loginResult = function (res, id) {
		if(!res) {
			$("span").text("Wrong ID or PW!");
		}
		else {
			Session.set("memberId", id);
			Session.set("auth", res);
		}
	}
	
	
	createNewWordList = function () {
		$("#wordCont").empty();
		Meteor.call("createNewList", function (err, res) {
			if(err) {
				alert("Error!");
				return;
			}
			else {
				Session.set("list_id", res);
			}
		});
		createWordInputElement();
	}
	
	createWordInputElement = function () {
		var input = '<input type="text" name="newWord" placeholder="Enter a word">';
		var addBtn = '<input type="button" name="addBtn" value="Add">';
		
		var p = $('<p class="addNewWordInput"></p>');
		p.append(input).append(addBtn);
		
		$("#wordCont").append(p);
	}
	
	addNewWord = function () {
		var word = $("input[name='newWord']").val();
		Meteor.call("addWord", word, Session.get("list_id"), function (err, res) {
			if(err) {
				alert("Error!");
			}
			else {
				$("input[name='newWord']").val('');
				$("#wordCont").append("<p>"+ word +"</p>");
			}
		});
	}
	
	showWords = function(list_id) {
		$("#wordCont").empty();
		Meteor.call("showWords", list_id, function (err, res) {
			if(err) {
				alert("Error!");
			}
			else {
				var words = res;
				
				for(var i=0; i<words.length; i++) {
					$("#wordCont").append("<p>"+ words[i].word +"</p>");
				}
			}
		});
	}
	
}













