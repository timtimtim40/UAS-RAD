module.exports = function(app) {

    var customers = require('../controllers/customer.controller.js');
    var items = require('../controllers/item.controller.js');
    var sales = require('../controllers/sales.controller.js');
    
    app.post('/api/customers', customers.create);

    
    app.get('/api/customers', customers.findAll);

    
    app.get('/api/customers/:id', customers.findOne);

    
    app.put('/api/customers/:id', customers.update);

    
    app.delete('/api/customers/:id', customers.delete);


    app.get('/api/customers/firstname/:id', customers.getFirstName);


    app.get('/api/customers/lastname/:id', customers.getLastName);


    app.get('/api/customers/:id/age', customers.getAge);


    app.post('/api/item', items.create);

    
    app.get('/api/item', items.findAll);

    
    app.get('/api/item/:id', items.findOne);

    
    app.put('/api/item/:id', items.update);

    
    app.delete('/api/item/:id', items.delete);


    app.get('/api/item/name/:id', items.getName);


    app.get('/api/sales', sales.findAll);


    app.get('/api/sales/:id', sales.findOne);
}