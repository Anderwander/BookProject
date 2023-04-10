import Book from './book.js';
import User from './user.js';
import Wish from './wish.js';

Book.belongsToMany(User, {
  through: "User_has_Book",
  foreignKey: "idbook",
  timestamps: false,
  otherKey: "iduser",
});

User.belongsToMany(Book, {
  through: "User_has_Book",
  foreignKey: "iduser",
  timestamps: false,
  otherKey: "idbook",
});

Wish.belongsTo(User, {
  foreignKey: 'iduser',
});

Wish.belongsTo(Book, {
  foreignKey: 'idbook',
});

export default {
  Book,
  User,
  Wish,
};
