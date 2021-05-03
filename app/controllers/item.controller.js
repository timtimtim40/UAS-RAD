var item = {
    item1: {
        name:"Pringles",
        itemtype:"Snack",
        expirydate:"27-11-2021",
        id: 1
    },
    item2: {
        name:"Oreo",
        itemtype:"Snack",
        expirydate:"5-12-2021",
        id: 2
    },
    item3: {
        name:"Chicken",
        itemtype:"Raw",
        expirydate:"3-7-2021",
        id: 3
    },
    item4: {
        name:"Tomato Sauce",
        itemtype:"Ingredient",
        expirydate:"12-5-2022",
        id: 4
    }
}

exports.create = function(req, res) {
    var newItem = req.body;
    if (!req.body.name){
        res.status(400).send("Please insert name");
    }else if (!req.body.itemtype){
        res.status(400).send("Please insert item type");
    }else if (!req.body.expirydate){
        res.status(400).send("Please insert expiry date");
    }else if (!req.body.id){
        res.status(400).send("Please insert id");
    }else{
        item["item" + newItem.id] = newItem;
        console.log("--->Item list:\n" + JSON.stringify(item, null, 4));
        res.status(201).end("Posted Successfully: \n" + JSON.stringify(newItem, null, 4));
    }
    
};

exports.findAll = function(req, res) {
    if (item != null){
        console.log("--->Find All: \n" + JSON.stringify(item, null, 4));
        res.status(200).end(JSON.stringify(item, null, 4));  
    }else{
        res.sendStatus(404);
    }
};

exports.findOne = function(req, res) {
    var newItem = item["item" + req.params.id];
    if (newItem != null){
        console.log("--->Find item: \n" + JSON.stringify(newItem, null, 4));
        res.status(200).end(JSON.stringify(newItem, null, 4));
    }else{
        res.sendStatus(404);
    }
};

exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updatedItem = req.body; 
    if (item["item" + id] != null){
        item["item" + id] = updatedItem;
        console.log("--->Updated Successfully, item: \n" + JSON.stringify(item, null, 4))
        res.status(200).end("Updated Successfully! \n" + JSON.stringify(updatedItem, null, 4));
    } else{
        res.sendStatus(404).end("Item Doesn't Exist:\n:" + JSON.stringify(updatedItem, null, 4));
    }
};

exports.delete = function(req, res) {
    var deleteItem = item["item" + req.params.id];
    if (deleteItem != null){
        delete item["item" + req.params.id];
        console.log("--->Item list:\n" + JSON.stringify(item, null, 4) );
        res.status(200).end( "Deleted item: \n" + JSON.stringify(deleteItem, null, 4));
    }else{
        res.sendStatus(404);
    }
};


exports.getName = function(id){
    var items = item["item" + id];
    if (items != null){
        return items.name;
    }else{
        return;
    }
}