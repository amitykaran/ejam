'use strict';

const Deployment = require('../models/deployment');

function getAllObjects(filters, next) {
    let query = filters.query ? filters.query : {};
    let selectFrom = filters.selectFrom ? filters.selectFrom : {};
    let sortBy = filters.sortBy ? filters.sortBy : {_id: -1};
    let pageNum = filters.pageNum ? filters.pageNum : 1;
    let pageSize = filters.pageSize ? filters.pageSize : 50;
    Deployment.find(query)
        .select(selectFrom)
        .sort(sortBy)
        .skip((pageNum - 1) * pageSize)
        .limit(parseInt(pageSize))
        .lean()
        .exec(function (err, objects) {
            if (err) {
                console.log(err);
                return next(err);
            } else {
                return next(null, objects);
            }

        });
}

function getAllObjectsCount(filters, next) {
    let query = filters.query ? filters.query : {};
    Deployment.count(query, function (err, count) {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            return next(null, count);
        }

    });
}

function getObjectById(filters, next) {
    Deployment.findById(filters.id)
        .select(filters.selectFrom ? filters.selectFrom : {})
        .exec(function (err, object) {
            if (err) {
                console.log(err);
                return next(err);
            } else {
                return next(null, object);
            }

        });
}

function getObjectByQuery(filters, next) {
    Deployment.findOne(filters.query)
        .select(filters.selectFrom ? filters.selectFrom : {})
        .exec(function (err, object) {
            if (err) {
                console.log(err);
                return next(err);
            } else {
                return next(null, object);
            }

        });
}

function updateObjectById(id, updatedObject, next) {
    Deployment.findById(id, function (err, object) {
        if (err) {
            return next(err);
        }
        for (let prop in updatedObject) {
            object[prop] = updatedObject[prop];
        }
        object.save(function (err, savedObject) {
            if (err) {
                return next(err);
            } else {
                return next(null, savedObject);
            }
        });
    });
}

function deleteObject(objectId, next) {
    Deployment.findByIdAndRemove(objectId, function (err, object) {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            return next(null, objectId);
        }
    });
}

function addObject(object, next) {
    let objectModel = new Deployment(object);
    objectModel.save(function (err, object) {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            return next(null, object);
        }
    });
}

module.exports = {
    getAllObjects: getAllObjects,
    getAllObjectsCount: getAllObjectsCount,
    getObjectById: getObjectById,
    updateObjectById: updateObjectById,
    deleteObject: deleteObject,
    addObject: addObject,
    getObjectByQuery: getObjectByQuery
};
