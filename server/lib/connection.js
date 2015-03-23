
if(Meteor.isServer) {
/*	
	clientConnection = function (connection) {
		var findConn = Connections.find({ip : connection.clientAddress});
		var conn;
		
		if(findConn.count() === 0) {
			Connections.insert({ip : connection.clientAddress, nowLogin : 1});
			
			findConn = Connections.find({ip : connection.clientAddress});
			conn = findConn.fetch();
		}
		else {
			conn = findConn.fetch();
			Connections.update({_id : conn[0]._id}, {$set : {nowLogin : 1}});
		}
		
		connection.onClose = disconnectFunc(conn, connection.clientAddress);
	}
	
	disconnectFunc = function (conn, ip) {
		Connections.update({_id : conn[0]._id}, {$set : {nowLogin : 0}});
	}
	
	isConnectFunc = function () {
		
	}
*/
}