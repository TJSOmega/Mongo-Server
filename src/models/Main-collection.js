'use strict';

//'wrapper' for our CRUD actions against the DB
class MainCollection {

  constructor(model) {
    this.model = model
  }

  // app.get('/cats:id')
  // plugin your crud actions -> collection model
  // these crud actions do actual db work using mongoose methods

  
  get(_id) {
    if (_id) {
      return this.model.findOne({ _id }) // findOne is a Mongoose method to find one specific method
    } else {
      return this.model.find({});
    }
  }

  create(record) {
    let newRecord = new this.model(record)
    return newRecord.save() //.save() is a mongoose method to save an item to the DB
  }

  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, {new: true}) //new:true required to return the new item in the DB

  }

  delete(_id) {

    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = MainCollection