var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var models = require("./models");

for(var m in models){ 
	mongoose.model(m,new Schema(models[m]));//new定义一个schema, model(,)将schema发布为model
}

module.exports = { 
	getModel: function(type){ 
		return _getModel(type);
	}
};

var _getModel = function(type){ 
	return mongoose.model(type);//通过名字索引
};



