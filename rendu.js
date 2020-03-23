// INSERT : 
db.sport.insert({"nom":"Gieko","sportFav":"Football","division":"N1", "president":"Grégory Luxin"})

 db.sport.insert({"nom":"BBQ","sportFav":"Football","division":"Ligue2", "president":"matteo"})

 db.sport.insert({"nom":"FF","sportFav":"Football","division":"Ligue1", "president":"H&M"})

db.sport.insert({"nom":"XE","sportFav":"Football","division":"d7", "president":"GeoX"})2


//ajout des champs supplementaires :
 db.sport.updateMany({},{$set:{title :"" ,requiredTeam:false}},{upsert: true})


// AJOUT UN miniPayer POUR LES :'requiredTeam:true'
db.sport.updateMany({requiredTeam:true},{$set:{miniPayer:10}},{upsert: true})

//incrementation de 10 pour tout les champs minPlayer et requiredTeam:true

db.sport.updateMany({requiredTeam:true},{$inc:{miniPayer:10}},{upsert: true})

// ajout Array pour tous le mondes 

 db.sport.updateMany({},{$set:{team:[]}},{upsert: true})

// Ajout de deux joueurs identiques

db.sport.updateMany({},{$push:{team:{"name":"pierre",playerNumber:"5"}}},{upsert: true});

// ajout champs isCapitaine pour tous le mondes

db.sport.updateMany({},{$push:{team:{$each:[{isCapitain:true}]}}},{upsert: true});
