
if(Meteor.isServer) {

	Meteor.methods({
		loginMethod : function (id, pw) {
			var findMember = Members.find({id : id, pw : pw});
			
			if(findMember.count() === 0) {
				return false;
			}
			
			var member = findMember.fetch();
			return member[0].auth;
		}
	});

}