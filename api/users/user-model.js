const db = require("../../data/db-config.js");

// TEST COMMENT
//TEST COMMENT2
/// TEST Comment 3 
/// TEST Comment 4 
/// TEST Comment 5

module.exports = {
  find,
  findById,
  findBySpotifyId,
  findBy,
  findByEmail,
  add,
  update,
  remove
};

function find() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where("id", id)
    .first()
    .then(user => (user ? user : null));
}

function findBySpotifyId(spotify_id) {
  console.log(spotify_id);
  return db("users")
    .where("spotify_user_id", spotify_id)
    .first()
    .then(user => (user ? user : null));
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .first()
    .then(user => (user ? user : null));
}

/* function findTasteProfiles(userId) {
  return db('taste_profiles as t')
    .join('users as u', 'u.id', 't.user_id')
    .select('t.id', 'u.email as user_email')
    .where('t.user_id', userId);
} */

function findByEmail(user_email) {
  return db("users")
    .where("email", user_email)
    .first()
    .then(user => (user ? user : null));
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => this.findById(id));
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}
