import express from "express";

const app = express();

app.use(express.json());
app.get("/home", (req, res) => {
    return res.json({
        message: "vai porra"
    })
})

app.post("/home", (req,res) => {
    const name = req.body.name
    const id = req.body.id
    // return res.json({
    //     message: "vai porra",
    //     name: name,
    //     id:id
    // })

    console.log(req.body);
    return res.json({
        message:"Os dados do post estao abaixo",
        name:name,
        id:id
    });
})

app.listen(3333, () => console.log("Server rodando na porta 3333!"));