// const express = require('express')
// const bodyParser = require('body-parser')
// const adminRouter = require('./routes/admin.js')
// const shopRouter = require('./routes/shop.js')
// const contactRouter = require('./routes/contact.js')
// const successRouter = require('./routes/success.js')
// const cartRouter = require('./routes/cart.js')
// const errorController = require('./controller/error.js')
// const sequelize = require('./utils/database.js')
// const path = require('path')

// const app = express()
// app.use(express.json())
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(express.static(path.join(__dirname, 'public')));



// app.use('/',shopRouter)
// app.use('/admin',adminRouter)
// app.use('/contact',contactRouter)
// app.use('/success',successRouter)
// app.use('/cart',cartRouter)

// app.use(errorController.pageNotFound)

// sequelize
// .sync()
// .then((result) => {
//     // console.log(result)
//     app.listen(4000)
// }).catch((err) => {
//     console.log(err)
// })

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controller/error');
const sequelize = require('./utils/database');
const Product = require('./model/products');
const User = require('./model/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.pageNotFound);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return User.findByPk(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Max', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });