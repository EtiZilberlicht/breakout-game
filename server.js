const express = require("express");
const path = require("path");
const app = express();

// הגשת הקבצים הסטטיים מתוך תיקיית public
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`שרת רץ בכתובת: http://localhost:${PORT}`);
});
