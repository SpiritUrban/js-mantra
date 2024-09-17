const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://mongo:egYemlCbHfDOGFoVyMSevwsYEVpfloCU@junction.proxy.rlwy.net:28537/test?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,
  }
);

const Cat = mongoose.model("Cat", { name: String, color: String  });

//get

 async function catsFunction  (){
  const cats = await Cat.find({});

console.log(cats);
}
catsFunction();


//creating
//const kitty = new Cat({ name: "Mursik", color:"Black" });
//kitty.save().then(() => &//console.log("meow"));

//https://railway.app/project/33026279-98c4-4c2e-abe6-20dd389a1c8b/service/e7803c58-1a80-49b9-9023-32de3eb16adb/variables
