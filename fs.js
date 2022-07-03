const fs = require("fs").promises;
function saveData() {
  const data = JSON.stringify(player);
  fs.writeFile("player.json", data, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });
}
