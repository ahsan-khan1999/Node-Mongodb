const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'Readme';

mongoClient.connect(url,(err , client) => {
    // useUnifiedTopology: true
    assert.equal(err,null);
    console.log('We are Sucessfully Connected to '+url);

    const db = client.db(dbname);
    const collection = db.collection('dishes');

    collection.insertOne({
        "name":"Pizza Fries",
        "description":"Native"
    },(err , result) => {
        assert.equal(err,null);
        console.log('after insert : '+ result) //ops => operations sucessful
        collection.find({}).toArray( (err,result) => {
            assert.equal(err,null);
            console.log( "All Doc"+result);

            db.dropCollection('dishes' , (err,result) => {
                assert.equal(err,null);
                client.close();
            })
        });
    });

})