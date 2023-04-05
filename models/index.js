const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(BlogPost, {
    foreingKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

module.exports = { BlogPost, Comment, User }