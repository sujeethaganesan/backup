app.factory('mainFactory',function(){
	var details;
	return {
		setInfo: function(value){
			details=value;
		},
		getInfo:function(){
			return details;
		}
	}
})

app.factory('detailFactory',function(){
	var Id;
	return {
		setInfo: function(value){
			Id=value;
		},
		getInfo:function(){
			return Id;
		}
	}
})