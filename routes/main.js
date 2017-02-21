var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    const namespace = req.params.namespace
    const name = req.params.name
    console.log(namespace)
    console.log(name)
    res.render('main', { include: namespace + '/' + name })
})

module.exports = router;