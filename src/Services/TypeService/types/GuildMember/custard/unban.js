const GuildMember = require('../index.js');


GuildMember.newF("unban", function(settings={ /* reason and duration */ }) {
    const client = this.parent.parent;
    client.import("app", "errors", "users");
    
    let e = errors.create("Member Unbanning");

    let user = this.raw;
    let thing = user.unban(settings).catch(e=>{});

    if (settings.duration) setTimeout( () => {
         user.guild.members.ban(user.id);
    }, app.parseMs(settings.duration) );

    return thing;
});