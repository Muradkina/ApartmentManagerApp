import express from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";

const app = express();
const port = 3000;


// assets dosya yolu
const assetsPath = path.join(path.resolve(), "assests");
app.use(express.static(assetsPath));

// ejs template engine
app.use(expressLayouts);    
app.set('view engine', 'ejs');

// Ana sayfa get isteği
app.get('/', (req, res) => {
    res.render("index",{ layout: "./_Layout"})
});

app.listen(port, () => {
    console.log(`Uygulama ${port} numaralı portta çalışıyor`);
});
