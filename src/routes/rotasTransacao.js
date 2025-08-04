const express = require('express');
const router = express.Router();
const {getTransacoes, createTransacoes, getResumoFinanceiro} = require('./../controllers/controleTransacao')

router.get('/', getTransacoes)
router.get('/:id', getTransacoes)
router.post('/',createTransacoes )
router.get('/resumo', getResumoFinanceiro)
module.exports = router