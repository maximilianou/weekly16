// models/User.js
//const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//const { Schema } = mongoose;
//
//const userSchema = Schema({
//  username: {
//    type: String,
//    min: [4, 'Too short, min 4 chars!'],
//    man: [32, 'Too long, max 16 chars!'],
//  },
//  email: {
//    type: String,
//    min: [4, 'Too short, min 4 chars!'],
//    man: [32, 'Too long, max 16 chars!'],
//    lowercase: true,
//    unique: true,
//    required: 'Email is required',
//    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
//  },
//  password: {
//    type: String,
//    min: [4, 'Too short, min 4 chars!'],
//    man: [32, 'Too long, max 16 chars!'],
//    required: 'Password is required',
//  },
//  passwordConfirmation: {
//    type: String,
//    min: [4, 'Too short, min 4 chars!'],
//    man: [32, 'Too long, max 16 chars!'],
//  },
//});
//
//userSchema.pre('save', function (next) {
//  const user = this;
//  bcrypt.genSaltSync(10, (err, salt) => {
//    if (err) {
//      return res.status(422).json({
//        error: 'There is an error while gensalt hash',
//      });
//    }
//    bcrypt.hashSync(user.password, salt, (err, hash) => {
//      if (err) {
//        return res.status(422).json({
//          error: 'There is an error while password hash',
//        });
//      }
//      user.password = hash;
//      next();
//    });
//  });
//});
//
//userSchema.methods.hasSamePassword = function (password) {
//  return bcrypt.compareSync(password, this.password);
//};
//
//module.exports = mongoose.model('User', userSchema);
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {}
  );
  //  User.associate = function(models) {
  //    // associations can be defined here
  //    User.hasMany(models.Post, {
  //      foreignKey: 'userId',
  //      as: 'posts',
  //      onDelete: 'CASCADE',
  //    });
  //
  //    User.hasMany(models.Comment, {
  //      foreignKey: 'userId',
  //      as: 'comments',
  //      onDelete: 'CASCADE',
  //    });
  //  };
  return User;
};
