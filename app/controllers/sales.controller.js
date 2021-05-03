var sales = {
    sales1: {
        id:1,
        customerid:2,
        itemid:3,
        date:"2-3-2021"
    },
    sales2: {
        id:2,
        customerid:1,
        itemid:3,
        date:"21-2-2021"
    },
    sales3: {
        id:3,
        customerid:1,
        itemid:4,
        date:"12-3-2021"
    },
    sales4: {
        id:4,
        customerid:4,
        itemid:1,
        date:"15-3-2021"
    },
    sales5: {
        id:5,
        customerid:2,
        itemid:4,
        date:"11-1-2021"
    },
    sales6: {
        id:6,
        customerid:1,
        itemid:2,
        date:"17-2-2021"
    }
}


exports.findAll = function(req, res) {
    var customers = require('./customer.controller.js');
    var items = require('../controllers/item.controller.js');
    var data=[];
    if (sales != null){
        for( var key in sales){
            var custid = sales[key].customerid;
            var c = customers.getName(custid);
            var itemid = sales[key].itemid;
            var i = items.getName(itemid);
            var obj = {
                customer: c,
                product: i,
                date:sales[key].date
            };
            
            data.push(obj);
        }    
        res.status(200).end(JSON.stringify(data, null, 4));  
        console.log("--->Find All: \n" + data);
        
    }else{
        res.sendStatus(405);
    }
};

exports.findOne = function(req, res) {
    var newSales = sales["sales" + req.params.id];
    
    var customers = require('./customer.controller.js');
    var items = require('../controllers/item.controller.js');
    var data=[];
    if (newSales != null){
        var custid = sales["sales" + req.params.id].customerid;
        var c = customers.getName(custid);
        var itemid = sales["sales" + req.params.id].itemid;
        var i = items.getName(itemid);
        var obj = {
            id: req.params.id,
            customer: c,
            product: i,
            date:sales["sales" + req.params.id].date
        };
            
        data.push(obj);
       
        res.status(200).end(JSON.stringify(data, null, 4));  
        console.log("--->Find All: \n" + JSON.stringify(data, null, 4));
        
    }else{
        res.sendStatus(404);
    }
};