"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Router works as a plug-in express application
const router = (0, express_1.Router)();
router.get('/contentCard', (req, res) => {
    res.send('Ahoj');
});
module.exports = router;
