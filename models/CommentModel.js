const Sequelize = require('sequelize');
const sequelize = require('../database');
const Post = require('./PostModel');
const CommentLike = require('./CommentLikeModel');

const Comment = sequelize.define('comments', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  post_id: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: new Date(),
    allowNull: false,
  },
  updated_at: {
    type: Sequelize.DATE,
  },
  deleted_at: {
    type: Sequelize.DATE,
  },
}, {
  timestamps: true,
});

Comment.hasMany(CommentLike, { foreignKey: 'comments_id' });

module.exports = Comment;
