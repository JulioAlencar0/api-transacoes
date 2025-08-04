const getTransacoes = async (req, res) => {
    const { id } = req.params;

    try {
        if (id) {
            // Buscar uma específica
            const resultado = await pool.query('SELECT * FROM tb_transacao WHERE id = $1', [id]);

            if (resultado.rows.length === 0) {
                return res.status(404).json({ error: 'Transação não encontrada' });
            }

            return res.status(200).json(resultado.rows[0]);
        } else {
            // Buscar todas
            const resultado = await pool.query('SELECT * FROM tb_transacao');
            return res.status(200).json(resultado.rows);
        }
    } catch (err) {
        console.error('Erro ao buscar transações:', err);
        res.status(500).json({ error: 'Erro ao buscar transações' });
    }
};


const createTransacoes = async (req, res) => {
    const {descricao, valor, tipo} = req.body;
    try{
        const novaTransacao = await pool.query('INSERT INTO tb_transacao (descricao, valor, tipo) VALUES ($1, $2, $3) RETURNING *',
            [descricao, valor, tipo]
        );
        res.status(200).json(novaTransacao.rows[0])
    } catch (err) {
        console.error('Erro ao criar transação', err);
        res.status(500).json({error: 'Erro ao criar a transação'})
    }   
}

const getResumoFinanceiro = async (_,res) => {
    try{
        const entradasQuery = await pool.query(
            "SELECT COALESCE (SUM(valor), 0) AS total_entradas FROM tb_transacao WHERE tipo = 'entrada'"
        );
        const saidasQuery = await pool.query(
            "SELECT COALESCE(SUM(valor), 0) AS total_saidas FROM tb_transacao WHERE tipo = 'saida'"
        )

        const total_entradas = parseFloat(entradasQuery.rows[0].total_entradas)
        const total_saidas = parseFloat(saidasQuery.rows[0].total_saidas);
        const saldo = total_entradas - total_saidas;

        res.status(200).json({ total_entradas, total_saidas, saldo })
    } catch (err) {
        console.error('Erro ao calcular resumo financeiro', err)
        res.status(500).json({error: 'Erro ao calcular resumo financeiro'})
    }
}


module.exports = {getTransacoes, createTransacoes, getResumoFinanceiro}