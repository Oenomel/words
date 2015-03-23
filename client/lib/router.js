
Router.route('/', function () {
	
	if(Session.equals("memberId", '')) {
		this.redirect('/login');
	}
	else {
		this.redirect('/home');
	}	
});


Router.route("/login", function () {	
	if(Session.equals("memberId", '')) {
		this.render("loginTemplate");
	}
	else {
		this.redirect('/home');
	}
});


Router.route("/home", function () {
	if(Session.equals("memberId", '')) {
		this.redirect('/login');
	}
	
	if(Session.equals("auth", 1)) {
		this.render("teacherHomeTemplate");
	}
	else {
		this.render("studentHomeTemplate");
	}
});