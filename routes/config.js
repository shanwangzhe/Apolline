var express = require('express');
var router = express.Router();


/* GET config page. */
router.route("/").get(function(req,res){    // 到达 /config 路径则，
    if(!req.session.user){                  //到达/home路径首先判断是否已经登录
        req.session.error = "please login first"
        res.redirect("/login");             //未登录则重定向到 /login 路径
    } 
    var Capture = global.dbHandel.getModel('capture');
    Capture.find({},{'_id':0,'__v':0},{lean:true},function(err, cursor){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.render("config",{title:'Config',data:JSON.stringify(cursor)});
        }
    });
}).post(function(req,res){
	var cname = req.body.cname;
	var lat = Number(req.body.lat);	
	var lng = Number(req.body.lng);
    var Capture = global.dbHandel.getModel('capture');
    if(cname != -1){
        Capture.findOne({name:cname},function(err,doc){   
            if(err){                                        
                res.send(500);
                console.log(err);
            }else {
        	    var data = {
        	       'type' : 'Feature',
    		       'geometry' : {
        		        'type' : 'Point',
        			    'coordinates' : [lng, lat],
    			    },
    			    'properties' : {
    				'name' :cname
    			     }
                };
                Capture.create(data,function(err,doc){ 
                    if (err) {
                        res.send(500);
                        console.log(err);
                    } else {
                        req.session.error = 'success！';
                        res.send(200);
                    }
        	   });
    	   }
        });
    }
    else{
        var whereStr = {"geometry.coordinates":[lng,lat]};
        Capture.remove(whereStr,function(err,result) {
            if(err){
                res.send(500);
                console.log(err);
            }
            else{
                 req.session.error = 'success！';
                 res.send(200);
            }
        });
    }   
});
module.exports = router;
