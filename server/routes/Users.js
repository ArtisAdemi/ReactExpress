const express = require("express");
const router = express.Router();
const {Users} = require("../models");
const bcrypt = require("bcrypt");
const {sign} = require('jsonwebtoken');

router.get("/", async (req, res) => {
    const users = await Users.findAll();
    res.json(users);
});

router.get("/:id", async (req,res) => {
    const id = req.params.id;
    const user = await Users.findByPk(id);
    res.json(user);
})

router.post("/", async (req, res) => {
    const {username, password} = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        });
        res.json("Success");
    });
    // await Users.create(user);
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const user = await Users.findOne({ where: {username: username}});

    if (!user) return res.json({error: "User does not exist"});
    
    bcrypt.compare(password, user.password).then((match) => {
        if (!match){
            return res.json({error: "Wrong Password"});
        }
        const accessToken = sign({username: user.username, id: user.id}, "importantsecret");
        res.json(accessToken);
    });
});

module.exports = router;