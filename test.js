const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://mongo:egYemlCbHfDOGFoVyMSevwsYEVpfloCU@junction.proxy.rlwy.net:28537/test?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, // Erhöht das Timeout auf 30 Sekunden
  }
);

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
