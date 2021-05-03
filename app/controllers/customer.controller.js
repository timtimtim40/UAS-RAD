customers = {
    customer1: {
        firstname: "Mikel",
        lastname: "Salim",
        age: 25,
        id: 1
    },
    customer2: {
        firstname: "Albert",
        lastname: "Pangdani",
        age: 37,
        id: 2
    },
    customer3: {
        firstname: "Andi",
        lastname: "Wijaya",
        age: 17,
        id: 3
    },
    customer4: {
        firstname: "Owen",
        lastname: "Robert",
        age: 17,
        id: 4
    }
}

module.exports.customers = customers;

exports.create = function(req, res) {
    var newCustomer = req.body;
    if (!req.body.firstname){
        res.status(400).send("Please insert first name");
    }else if (!req.body.lastname){
        res.status(400).send("Please insert lastname");
    }else if (!req.body.age){
        res.status(400).send("Please insert age");
    }else if (!req.body.id){
        res.status(400).send("Please insert id");
    }else{
        customers["customer" + newCustomer.id] = newCustomer;
        console.log("--->Customers list:\n" + JSON.stringify(customers, null, 4));
        res.status(201).end("Posted Successfully: \n" + JSON.stringify(newCustomer, null, 4));
    }
    
};

exports.findAll = function(req, res) {
    if (customers != null){
        console.log("--->Find All: \n" + JSON.stringify(customers, null, 4));
        res.status(200).end(JSON.stringify(customers, null, 4));  
    }else{
        res.sendStatus(404);
    }
};

exports.findOne = function(req, res) {
    var customer = customers["customer" + req.params.id];
    if (customer != null){
        console.log("--->Find customer: \n" + JSON.stringify(customer, null, 4));
        res.status(200).end(JSON.stringify(customer, null, 4));
    }else{
        res.sendStatus(404);
    }
};

exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updatedCustomer = req.body; 
    if (customers["customer" + id] != null){
        customers["customer" + id] = updatedCustomer;
        console.log("--->Updated Successfully, customers: \n" + JSON.stringify(customers, null, 4))
        res.status(200).end("Updated Successfully! \n" + JSON.stringify(updatedCustomer, null, 4));
    } else{
        res.sendStatus(404).end("Customer Doesn't Exist:\n:" + JSON.stringify(updatedCustomer, null, 4));
    }
};

exports.delete = function(req, res) {
    var deleteCustomer = customers["customer" + req.params.id];
    if (deleteCustomer != null){
        delete customers["customer" + req.params.id];
        console.log("--->Customer list:\n" + JSON.stringify(customers, null, 4) );
        res.status(200).end( "Deleted customer: \n" + JSON.stringify(deleteCustomer, null, 4));
    }else{
        res.sendStatus(404);
    }
};

exports.getFirstName = function(req, res) {
    var customer = customers["customer" + req.params.id];
    if (customer != null){
        console.log("--->Find customer's first name: \n" + JSON.stringify({firstname : customer.firstname}, null, 4));
        res.status(200).end( "Find a Customer's First Name:\n" + JSON.stringify({firstname : customer.firstname}, null, 4));
    }else{
        res.sendStatus(404);
    }
};

exports.getLastName = function(req, res) {
    var customer = customers["customer" + req.params.id];
    if (customer != null){
        console.log("--->Find customer's last name: \n" + JSON.stringify({lastname : customer.lastname}, null, 4));
        res.status(200).end( "Find a Customer's Last Name:\n" + JSON.stringify({lastname : customer.lastname}, null, 4));
    }else{
        res.sendStatus(404);
    }
};

exports.getAge = function(req, res) {
    var customer = customers["customer" + req.params.id];
    if (customer != null){
        console.log("--->Find customer's age: \n" + JSON.stringify({age : customer.age}, null, 4));
        res.status(200).end( "Find a Customer's Age:\n" + JSON.stringify({age : customer.age}, null, 4));
    }else{
        res.sendStatus(404);
    }
};

exports.getName = function(id){
    var customer = customers["customer" + id];
    if (customer != null){
        return customer.firstname;
    }else{
        return;
    }
}

exports.getCustomer = function(){
    return customers;
}