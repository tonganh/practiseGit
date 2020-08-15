function Mouse(name) {
  this.name = name;
  this.dead = false;
};
Mouse.prototype.die = function() {
  this.dead = true;
};
<<<<<<< HEAD
=======
Mouse.prototype.sleep = function() {
  console.log('Sleeping...');
};
module.exports = Mouse;
>>>>>>> 73ae417a2d12cdbd574f4021c3eb8da73d844503
