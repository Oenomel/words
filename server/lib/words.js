
if(Meteor.isServer) {
	Meteor.publish("lists", function () {
		return Lists.find({}, {sort : {date : -1}});
	});
	
	Meteor.publish("words", function () {
		return Words.find({});
	});
	
	Meteor.methods({
		createNewList : function () {
			var d = new Date();
			var date = transferDate(d.getTime());
			return Lists.insert({date : date.year+"."+date.month+"."+date.date+" "+date.day});
		},
		
		addWord : function (word, list_id) {
			Words.insert({list_id : list_id, word : word});
		},
		
		showWords : function (list_id) {
			return Words.find({list_id : list_id}).fetch();
		}
	});
}