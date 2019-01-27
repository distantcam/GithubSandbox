var fs = require('fs');

const processor = function(data, callback) {
  const comments = hexo.locals.get('comments') || [];

  const comment = JSON.parse(fs.readFileSync(data.source, 'utf8'));

  comments.push(comment);

  hexo.locals.set('comments', function() {
    return comments;
  });

  return callback();
};

hexo.extend.processor.register('_data/comments/*.json', processor);
