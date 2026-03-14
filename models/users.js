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

module.exports = {searchUsers};