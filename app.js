const redis = require("redis");

const client = redis.createClient({
  legacyMode: true,
});

client
  .connect()
  .then(async () => {
    client.on("error", (error) => {
      console.log(error);
    });

    //SET
    client.set("user_name", "Toprak", (error, message) => {
      if (error) {
        console.log("error:", error);
      }
      console.log("Message:", message);
    });
    //GET
    client.get("user_name", (error, message) => {
      if (error) {
        console.log("error:", error);
      }
      console.log("Message:", message);
    });
    //DEL
    client.del("user_name", (error, message) => {
      if (error) {
        console.log("error:", error);
      }
      console.log("Message:", message);
    });
    //EXİST
    client.exists("user_name", (error, message) => {
      if (error) {
        console.log("error:", error);
      }
      console.log("Message:", message);
    });
    //APPEND
    client.append("last_name", "Tuzun",(error, message) => {
        if (error) {
          console.log("error:", error);
        }
        console.log("Message:", message);
        client.get('last_name',(e,m) => {
            console.log("append:",m);
        })
      });
      //SUBSCRIBE
      
      client.on('message',(channel,message) => {
        console.log(`${channel} isimli kanala ${message} geldi`);
      });

      client.subscribe('ToprakYazilim');
  })
  .catch((err) => console.log(err));
