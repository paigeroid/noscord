const GuildMember = require('../index.js');


GuildMember.newF("timeout", async function(time) {
    const client = this.parent.parent;
    client.import("util", "errors", "users");
    
    let e = errors.create("Member Timeout");

    let user = await users.get(this.id, this.guild);
    let thing = user.timeout(util.parseMs(time)).catch(e=>{});

    return thing;
});
