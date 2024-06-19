"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_json_1 = __importDefault(require("../dummydata/todos.json"));
// Router works as a plug-in express application
const router = (0, express_1.Router)();
router.get('/todos', (req, res) => {
    res.send(todos_json_1.default);
});
module.exports = router;
