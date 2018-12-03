function Factory(){

}

Factory.create = function(type){
	switch(type){
		case'normal':
			return new Normal();
		case'guncarrier':
			return new Guncarrier();
		case'strong':
			return new Strong();
		default:
			break;
	}
}