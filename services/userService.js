const cliente = require('../config/db');

exports.getAllUsers = async () => {
    try {
      const { data, error } = await cliente.supabase.from('usuario').select('*');
      if (error) throw error;
      console.log(data);
      
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

exports.getOneUser = async (req) => {
    try {
        const { id } = req.params;
        console.log('🔍 Buscando usuário com ID:', id);

        const { data, error } = await cliente.supabase
            .from('usuario')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.error('❌ Erro do Supabase:', error);
            return null;
        }

        console.log('Usuário encontrado:', data);
        return data;
    } catch (error) {
        console.error('Erro inesperado:', error);
        return null;
    }
};


exports.createUser = async (req) => {
    try {
        const { email, nome, data_nascimento } = req.body;
        const { data, error } = await cliente.supabase.from('usuario').insert({
            email: email,
            nome: nome,
            data_nascimento: data_nascimento
        });

        if (error) {
            console.error(error);
            return { error: 'Error creating user' };
        }

        return data;
    } catch (error) {
        console.error(error);
    }
};


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