# MongoDB Atlas local setup

&nbsp;
&nbsp;
&nbsp;

- Make sure mongodb and mongoose are installed (both are needed according to mongoose docs)

&nbsp;
&nbsp;
&nbsp;

```console
  $ npm install mongodb mongoose
```

&nbsp;
&nbsp;
&nbsp;

Connect to Atlas like you normally would, just the url looks different. Note: importing mongodb is not necessary, only mongoose.

```javascript
const mongoose = require('mongoose');

exports.connectDB = () => {
  return mongoose.connect(
    'mongodb+srv://process.env.MONGODB_USER:process.env.MONGODB_PASSWORD@cluster0.0rmucpd.mongodb.net/?retryWrites=true&w=majority'
  );
};
```

MONGODB_USER and MONGODB_PASSWORD will have to be added to your .env file before connecting to the database.
