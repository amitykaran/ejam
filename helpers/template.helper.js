'use strict';

const Template = require('../models/template');

function getAllObjects(filters, next) {
    let query = filters.query ? filters.query : {};
    Template.find(query)
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
    Template.count(query, function (err, count) {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            return next(null, count);
        }

    });
}

function getObjectById(filters, next) {
    Template.findById(filters.id)
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


module.exports = {
    getAllObjects: getAllObjects,
    getAllObjectsCount: getAllObjectsCount,
    getObjectById: getObjectById,
};
