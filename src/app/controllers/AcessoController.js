import Acesso from '../models/Acesso'
import * as yup from 'yup';

class AcessoController {
  async store(req, res) {
    let schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      regiao: yup.string().required(),
    });
    try {
      await schema.validate(req.body);
    } catch (err) {
      return res.status(422).json({ error: `Validation fails` });
    }
    const teste = await Acesso.create(req.body)

    return res.json(teste)
  }


}

export default new AcessoController();