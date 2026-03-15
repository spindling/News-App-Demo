const sqlite3 = require("sqlite3").verbose();
const sqlite = require("sqlite");

async function init() {
  try {
    db = await sqlite.open({
      filename: 'database.db',
      driver: sqlite3.Database
    });
  } catch(err) {
      console.error(err);
  }
}

init();

//Search database for matching user credentials
async function searchUsers(username) {

  let results = await db.all("SELECT * FROM Users WHERE username = ?", [username]);
  return results;
}

async function addUser(username, password){

  await db.all("INSERT INTO Users VALUES (?,?,?)",[username, password, "member"]);

}

module.exports = {searchUsers, addUser};