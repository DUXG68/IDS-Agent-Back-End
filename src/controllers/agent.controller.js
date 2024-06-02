var Agent = require('../models/agent.model')

exports.test_api = async function (req, res) {
    try {
        data = req.headers.apikey
        await Agent.test_api(data, function (data) {
            res.send({ result: data })
        })
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}