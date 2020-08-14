const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const operation = require('./operation');


const url = 'mongodb://localhost:27017/';
const dbname = 'Readme';


mongoClient.connect(url).then((client) => {  
    // useUnifiedTopology: true
    const db= client.db(dbname);
    operation.insertDoc(db,{name :" Biryani" , description:"Testing"},'dishes')
    .then((result) => {
        console.log('inserted Document : ' ,result.ops);

        return operation.findDoc(db,'dishes')

    })
    .then((doc) => {
        console.log('Found The Document : ', doc);

        return operation.updateDoc(db,{name : " Biryani" },{description : "updated Korma"}, 'dishes')
    })
    .then( (result) => {
        console.log('sucessfully updated : ' ,result.result);
        return operation.findDoc(db,'dishes')
    })
    .then((doc) =>{
        console.log('Fonud Yet : ',doc);
        return db.dropCollection('dishes' )
    })
    .then((result) => {
        console.log('Droped Collection' ,   result );
        client.close();
        }).catch((err) => console.log(err));
                                

}).catch((err) => console.log(err));
