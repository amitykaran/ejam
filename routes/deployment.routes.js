import deploymentHelper from '../helpers/deployment.helper';
import _ from 'lodash';
import async from 'async';

import { Router } from 'express';

const router = new Router();

router.route('/list').post((req, res) => {
    const model = [];
    const totalCount = 0;
    const filters = {};
    let query = {};
    if (req.body.qtext && req.body.qtext !== '') {
        var queryText = req.body.qtext;
        query = {
            '$or': [{'contact_name': {$regex: '(?i)' + queryText}},
                {'contact_phone': {$regex: '(?i)' + queryText}},
                {'contact_email': {$regex: '(?i)' + queryText}},
            ]
        };
    }
    filters.sortBy = {'_id': -1};
    filters.pageNum = req.body.pageNum ? req.body.pageNum : 1;
    filters.pageSize = req.body.pageSize ? req.body.pageSize : 50;
    filters.query = query;
    filters.selectFrom = req.body.selectFrom ? req.body.selectFrom : {};
    async.series([
        cb => {
            deploymentHelper.getAllObjects(filters, (err, objects) => {
                if (err) {
                    return cb(err);
                } else {
                    model.objects = objects;
                    return cb();
                }
            });
        },
        cb => {
            deploymentHelper.getAllObjectsCount(filters, (err, count) => {
                if (err) {
                    return cb(err);
                } else {
                    model.count = count;
                    return cb();
                }
            });
        }
    ], err => {
        if (err) {
            res.status(500);
            res.json({
                status: 'Error',
                data: 'Error occured: ' + err
            });
        } else {
            res.status(201);
            res.json({
                status: 'Success',
                data: {
                    deployments: model.objects,
                    count: model.count
                }
            });
        }
    });
});

router.route('/new').post((req, res) => {
    if (_.isEmpty(req.body.deployment)) {
        res.status(500);
        res.json({
            status: 'Error',
            data: 'No response body sent'
        });
    } else {
        deploymentHelper.addObject(req.body.deployment, (err, object) => {
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
                        deployment: object
                    }
                });
            }
        });
    }
});

router.route('/:id').get((req, res) => {
    if (req.params.id) {
        const filters = {};
        filters.id = req.params.id;
        filters.selectFrom = {};
        deploymentHelper.getObjectById(filters, (err, object) => {
            if (err) {
                res.status(500);
                res.json({
                    status: 'Error',
                    data: 'Error occured: ' + err
                });
            } else {
                if (object) {
                    res.status(200);
                    res.json({
                        status: 'Success',
                        data: {
                            deployment: object
                        }
                    });
                } else {
                    res.status(404);
                    res.json({
                        status: 'Error',
                        data: 'deployment: ' + req.params.id + ' not found'
                    });
                }
            }
        });
    } else {
        res.status(500);
        res.json({
            status: 'Error',
            data: 'No response id sent'
        });
    }
});

router.route('/:id/update').post((req, res) => {
    if (req.params.id && !_.isEmpty(req.body.deployment)) {
        deploymentHelper.updateObjectById(req.params.id, req.body.deployment, (err, object) => {
            if (err) {
                res.status(500);
                res.json({
                    status: 'Error',
                    data: 'Error occured: ' + err
                });
            } else {
                if (object) {
                    res.status(200);
                    res.json({
                        status: 'Success',
                        data: {
                            deployment: object
                        }
                    });
                } else {
                    res.status(404);
                    res.json({
                        status: 'Error',
                        data: 'deployment: ' + req.params.id + ' not found'
                    });
                }
            }
        });
    } else {
        res.status(500);
        res.json({
            status: 'Error',
            data: 'No response id or data sent'
        });
    }
});

router.route('/:id/remove').post((req, res) => {
    if (req.params.id) {
        deploymentHelper.deleteObject(req.params.id, (err, object) => {
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
                    data: 'deployment: ' + req.params.id + ' deleted successfully'
                });
            }
        });
    } else {
        res.status(500);
        res.json({
            status: 'Error',
            data: 'No response id sent'
        });
    }
});

export default router;
