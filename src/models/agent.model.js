const Agent = function (agent) {
    this.agent_id = agent.agent_id
    this.host_ip = agent.host_ip
    this.hostname = agent.hostname
};

Agent.test_api = async function (data, result) {
    result("success")
}

module.exports = Agent;