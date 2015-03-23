
transferDate = function (time) {
	var day = new Date(time);
	return { year : day.getFullYear(), month : day.getMonth() + 1, date : day.getDate(), day : tranferDay(day.getDay()) }
}

tranferDay = function (day) {
	switch(day) {
		case 0:
			return "일요일";
		case 1:
			return "월요일";
		case 2:
			return "화요일";
		case 3:
			return "수요일";
		case 4:
			return "목요일";
		case 5:
			return "금요일";
		case 6:
			return "토요일";
	}
}