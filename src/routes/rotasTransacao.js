const express = require('express');
const router = express.Router();
const {getTransacoes, createTransacoes, getResumoFinanceiro} = require('./../controllers/controleTransacao')

router.get('/resumo', getResumoFinanceiro)
router.get('/', getTransacoes)
router.get('/:id', getTransacoes)
router.post('/',createTransacoes )
module.exports = router