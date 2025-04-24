const cliente = require('../config/db');

exports.getAllUsers = async () => {
    try {
        let { data } = await cliente.supabase.from('usuario').select('*');
        return data
    } catch(error) {
        console.error(error);
    }
}

exports.getOneUser = async (req) => {
    try {
        const {id} = req.params
        let { data } = await cliente.supabase.from('usuario').select('*').eq('id', id);
        return data
    } catch(error) {
        console.error(error);
    }
}

exports.createUser = async (req) => {
    try {
        const {email, password, genero, nome} = req.body
        const { data, error } = await cliente.supabase.from('usuario').insert({
            email: email,
            password: password,
            name: Yoda,
          })
        return data
    } catch(error) {
        console.error(error);
    }
}

exports.deleteUser = async (req) => {
    try {
        const {id} = req.body
        let { data } = await cliente.supabase.from('usuario').delete().eq('id', id);
        return data
    } catch(error) {
        console.error(error);
    }
}
//module.exports = getAllUsers;