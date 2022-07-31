var gitmojis = require('gitmojis');
var gitmojiTypes = () => {
  var data = gitmojis.gitmojis;
  var types = {};
  for (const item in data) {
    var emoji = data[item];
    types[emoji.emoji] = {
      description: emoji.description,
      title: emoji.name
    };
  }
  return types;
};

module.exports = gitmojiTypes();
