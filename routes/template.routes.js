'use strict';

var _ = require('lodash');
var  async = require('async');

var templateHelper = require('../helpers/template.helper');

var { Router } = require('express');

const router = new Router();

router.route('/list').post(function (req, res) {
    const model = [];
    const filters = {};
    let query = {};
    filters.query = query;
    filters.selectFrom = req.body.selectFrom ? req.body.selectFrom : {};
    templateHelper.getAllObjects(filters, function (err, objects) {
        if (err) {
            res.status(500);
            res.json({
                status: 'Error',
                data: 'Error occured: ' + err
            });
        } else {
            res.status(200);
            res.json({
                status: 'Success',
                data: {
                    templates: objects
                }
            });
        }
    });
});


module.exports =  router;
