
if(Meteor.isClient) {
	
	Meteor.startup(function () {
		setDefaultSession();
	});
	
	Meteor.subscribe("lists");
	Meteor.subscribe("words");
	
	Template.loginTemplate.events({
		"click input[name='loginBtn']" : function () {
			loginFunc()
		},
		
		"keypress" : function (evt) {
			if(evt.keyCode === 13) {			
				loginFunc();
			}
		},
		
		"click input[name='joinBtn']" : function () {
//			Router.go("/join");
		}
	});

	
	Template.teacherHomeTemplate.helpers({
		lists : function () {
			return Lists.find({});
		},
		
		words : function () {
			return Words.find({});
		}
	});
	
	Template.teacherHomeTemplate.events({
		"click input[name='logoutBtn']" : function () {
			setDefaultSession();
			Router.go("/");
		},
		
		"click #addNewWordList" : function () {
			createNewWordList();
		},
		
		"click input[name='addBtn']" : function () {
			addNewWord();
		},
		
		"click .wordList" : function () {
			var list_id = this._id;
			showWords(list_id);
		}
	});

}