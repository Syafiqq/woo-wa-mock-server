const express = require('express');
const logger = require('morgan');
const concurrentUtil = require('./concurent-util');
const formData = require('./express-form-config');
const logHelper = require('./logging');
const baseResponse = require('./model/base-response');
const functionS2S = require('./function/server2server');

const app = express();

app.use(logger('dev'));
formData.configure(app)

app.get('/', async (req, res) => {
    logHelper.logRequest(req)
    await concurrentUtil.sleep(1000);
    await res.json(baseResponse.general())
})

app.all('/s2s', async (req, res) => {
    let body = {
        ...req.body,
        method: req.method,
    }
    await functionS2S.saveTransaction(body)
    return res.json(baseResponse.successWithMessage());
})

module.exports = app;
