const express = require("express");
const mongoose = require("mongoose");
const { getAllUsers, editUser, removeUser } = require("../controllers/user");
const router = express.Router();

//CRUD

// Add user
router.post("/", addUser);

//Get all users
router.get("/", getAllUsers);

//  Edit by ID
router.put("/:ID", editUser);

// REMOVE BY ID
router.delete("/:ID", removeUser);
