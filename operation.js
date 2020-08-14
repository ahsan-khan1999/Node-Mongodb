const assert = require('assert');


exports.insertDoc = (db,doc,collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(doc,(err,result) => {
        assert.equal(err,null);
        console.log('Inserted The Document :'+ result.result.n);
        callback(result);
    });

};  
exports.findDoc = (db,collection, callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err,doc) => {
        assert.equal(err,null);
        console.log('Sucessfully found the documents : '+ doc);
        callback(doc)
    })
};
exports.updateDoc = (db,doc,update,collection, callback) => {
    const coll = db.collection(collection);
    coll.updateOne(doc,{$set: update},null,(err,result) => {
        assert.equal(err,null);
        console.log('Updated the result' + update);
        callback(result)
    })


};
exports.deleteDoc = (db,doc,collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(doc ,(err , result) => {
        assert.equal(err,null);
        console.log('removed the doc' +doc)
        callback(result);
    });
};