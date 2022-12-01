const validates = (req, res, next) => {
    const { cpf, name } = req.body;
    if(name === '' || !name) return res.status(401).json({ erro: 'name is required' });
    if(cpf.length !== 14) return res.status(401).json({ erro: 'cpf is required' });
    if(!cpf) return res.status(401).json({ erro:'number cpf is invalid' });
    if(cpf === false) return res.status(401).json({ erro: 'CPF is invalid'});
    next();
};
module.exports = {
    validates
};