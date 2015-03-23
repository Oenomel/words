
if(Meteor.isServer) {
	Meteor.startup( function () {
		if(Members.find({id : "admin"}).count() === 0) {
			Members.insert({id : "admin", pw : "admin", auth : 1});
		}
		
//		Meteor.onConnection(clientConnection);
	});
}