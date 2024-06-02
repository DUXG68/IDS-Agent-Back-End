module.exports = (router) => {
  var ruleController = require('../controllers/rule.controller');
  var agentController = require('../controllers/agent.controller');
  var AuthenticateAPIKey = require('../Policy/AuthenticateAPIKey');
  //rule
  router.get("/agent/check_apikey", AuthenticateAPIKey.check_apikey, agentController.test_api);
  router.post("/agent/rule/write", AuthenticateAPIKey.check_apikey, ruleController.save_rule_agent);

}



