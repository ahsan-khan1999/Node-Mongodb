const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const operation = require('./operation');


const url = 'mongodb://localhost:27017/';
const dbname = 'Readme';


mongoClient.connect(url,(err , client) => {
    // useUnifiedTopology: true
    const db= client.db(dbname);
    operation.insertDoc(db,{name :" Biryani" , description:"Testing"},'dishes',(result) => {
        console.log('inserted Document : ' ,result.ops);

        operation.findDoc(db,'dishes',(doc) => {
            console.log('Found The Document : ', doc);

            operation.updateDoc(db,{name : "Biryani" },{description : "updated Korma"}, 'dishes', (result) => {
                console.log('sucessfully updated : ' ,result.result);
                operation.findDoc(db,'dishes',(doc) => {
                    console.log('Fonud Yet : ',doc);

                    db.dropCollection('dishes' , (result) =>{
                        console.log('Droped Collection' ,   result );
                        client.close();
                    });
                });
                
            });
        })
    });  

});

// assert.equal(err,null);
//     console.log('We are Sucessfully Connected to '+url);

//     const db = client.db(dbname);
//     const collection = db.collection('dishes');

//     collection.insertOne({
//         "name":"Pizza Fries",
//         "description":"Native"
//     },(err , result) => {
//         assert.equal(err,null);
//         console.log('after insert : '+ result) //ops => operations sucessful
//         collection.find({}).toArray( (err,result) => {
//             assert.equal(err,null);
//             console.log( "All Doc"+result);

//             db.dropCollection('dishes' , (err,result) => {
//                 assert.equal(err,null);
//                 client.close();
//             })
//         });
//     });