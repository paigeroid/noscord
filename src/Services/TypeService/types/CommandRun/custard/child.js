this.child = ctx.fetchReply

const CommandRun = require('../index.js');


CommandRun.newP("child", function() {
    return ctx.fetchReply;
});
