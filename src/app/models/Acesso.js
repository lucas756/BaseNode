import Sequelize, { Model } from 'sequelize';


class Acesso extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        regiao: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  
}
export default Acesso;
