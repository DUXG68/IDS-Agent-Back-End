const Rule = function (rule) {
  this.rule_id = rule.rule_id
  this.content_rule = rule.content_rule
  this.hostname = rule.hostname
  this.rule_state = rule.rule_state
};
const { exec } = require('child_process');
var fs = require('fs');
//var config = require('../../config')
require('dotenv').config()

// const filePathWrite = config.PATH_RULE;
const filePathWrite = process.env.PATH_RULE
//const filePathWrite = __dirname.replace('src\\models', '') + 'write.rules';

Rule.save_rule_agent = async function (data, result) {
  const infoArray = [];
  data.forEach(item => {
    const content_rule = item.content_rule;
    infoArray.push(content_rule);
  });

  const Contents = infoArray.join('\n') + "\n";
  await fs.writeFileSync(filePathWrite, Contents, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Data has been written to file successfully!');
    }
  });

  exec('sudo systemctl restart snort', (error, stdout, stderr) => {
    if (error) {
      console.error(`Loi khi thuc hien ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Loi tieu chuan: ${stderr}`);
      return;
    }
    console.log(`ket qua: ${stdout}`);
  });

  result("Success")
}

module.exports = Rule