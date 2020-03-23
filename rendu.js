db.sport.insert({"nom":"Gieko","sportFav":"Football","division":"N1", "president":"Grégory Luxin"})

 db.sport.insert({"nom":"BBQ","sportFav":"Football","division":"Ligue2", "president":"matteo"})

 db.sport.insert({"nom":"FF","sportFav":"Football","division":"Ligue1", "president":"H&M"})

db.sport.insert({"nom":"XE","sportFav":"Football","division":"d7", "president":"GeoX"})2


db.sport.updateMany({requiredTeam:true},{$inc:{miniPayer:10}},{upsert: true})



 db.sport.updateMany({},{$set:{team:[]}},{upsert: true})



db.sport.updateMany({},{$push:{team:{"name":"pierre",playerNumber:"5"}}},{upsert: true});
