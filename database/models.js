module.exports = { 
	user:{ 
		name:{type:String,required:true},
		password:{type:String,required:true}
	},
    capture:{
        'type': {type: String},
        'geometry' : {
            'type': {type: String},
            'coordinates' : {
                'type' : [Number],
                'index' : '2dsphere',
                'required' : true
            }
        },
        'properties' : {
            'name' : String
        }
    }
};

//chimi:  3.1449467,50.6095997
//bibli:  3.1414785,50.6094174
//Iniria: 3.1479711,50.6056339