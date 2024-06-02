var Rule = require('../models/rule.model')


exports.save_rule_agent = async function (req, res) {
    try {
        data = req.body;
        await Rule.save_rule_agent(data, function (result) {
            res.send({ result: result })
        });
        // res.send({ result: data })
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}