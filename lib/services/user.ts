export const createUser = ({ email, password }: {email: string; password: string  }) => {
  return null;
};

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:egYemlCbHfDOGFoVyMSevwsYEVpfloCU@mongodb.railway.internal:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));




//mongodb://mongo:egYemlCbHfDOGFoVyMSevwsYEVpfloCU@mongodb.railway.internal:27017


//https://railway.app/project/33026279-98c4-4c2e-abe6-20dd389a1c8b/service/e7803c58-1a80-49b9-9023-32de3eb16adb/variables