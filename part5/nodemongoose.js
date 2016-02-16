var Promise = require('bluebird');
var mongoose = require('mongoose');

var Show = mongoose.model('Show', {
  "id": Number,
  "title": String,
  "provider":  {'type':String, 'default':'eztv'}
});

/**
 * Atomic connect Promise - not sure if I need this, might be in mongoose already..
 * @return {Priomise}
 */
function connect(uri, options){
  return new Promise(function(resolve, reject){
    mongoose.connect(uri, options, function(err){
      if (err) return reject(err);
      resolve(mongoose.connection);
    });
  });
}

/**
 * Bulk-upsert an array of records
 * @param  {Array}    records  List of records to update
 * @param  {Model}    Model    Mongoose model to update
 * @param  {Object}   match    Database field to match
 * @return {Promise}  always resolves a BulkWriteResult
 */
function save(records, Model, match){
  match = match || 'id';
  return new Promise(function(resolve, reject){
    var bulk = Model.collection.initializeUnorderedBulkOp();
    records.forEach(function(record){
      var query = {};
      query[match] = record[match];
      bulk.find(query).upsert().updateOne( record );
    });
    bulk.execute(function(err, bulkres){
        if (err) return reject(err);
        resolve(bulkres);
    });
  });
}

/**
 * Map function for EZTV-to-Show
 * @param  {Object} show EZTV show
 * @return {Object}      Mongoose Show object
 */
function mapEZ(show){
  return {
    title: show.title,
    id: Number(show.id),
    provider: 'eztv'
  };
}

// if you are  not using EZTV, put shows in here
var shows = []; // giant array of {id: X, title: "X"}

// var eztv = require('eztv');
// eztv.getShows({}, function(err, shows){
//   if(err) return console.log('EZ Error:', err);

//   var shows = shows.map(mapEZ);
  console.log('found', shows.length, 'shows.');
  connect('mongodb://localhost/tv', {}).then(function(db){
    save(shows, Show).then(function(bulkRes){
      console.log('Bulk complete.', bulkRes);
      db.close();
    }, function(err){
        console.log('Bulk Error:', err);
        db.close();
    });
  }, function(err){
    console.log('DB Error:', err);
  });

// });
