const redis = require("redis");

const client = redis.createClient({
  legacyMode: true,
});

client.connect().then(() => {
    client.publish('ToprakYazilim',"Mesaj iletildi",(e,number) => {
        console.log(`${number} kişiye gönderildi.`)
    });
}).catch((err) => console.log(err));