'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    description: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
  }, {});
  Tweet.associate = function (models) {
    Tweet.belongsTo(models.User)
    Tweet.hasMany(models.Reply)
    Tweet.hasMany(models.Like)
    // Tweet.belongsToMany(models.User, {
    //   through: models.Like,
    //   foreignKey: 'TweetId',
    //   as: 'LikedUsers'
    // })
  };
  return Tweet;
};