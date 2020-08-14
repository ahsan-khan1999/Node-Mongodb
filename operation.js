const assert = require('assert');


exports.insertDoc = (db,doc,collection, callback) => {
    const coll = db.collection(collection);
    return coll.insert(doc);

};  
exports.findDoc = (db,collection, callback) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};
exports.updateDoc = (db,doc,update,collection, callback) => {
    const coll = db.collection(collection);
    return coll.updateOne(doc,{$set : update});


};
exports.deleteDoc = (db,doc,collection, callback) => {
    const coll = db.collection(collection);
    return coll.deleteOne(doc);
};