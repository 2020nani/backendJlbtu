import Sequelize, { Model } from 'sequelize';

class Posicao extends Model {
  
    static init(sequelize) {
      super.init({
        end:Sequelize.STRING,
        latitude:Sequelize.DECIMAL,
        longitude:Sequelize.DECIMAL,
        
        //url: {
        //  type: Sequelize.VIRTUAL,
       //   get() {
        //    return `${process.env.APP_URL}/files/${this.path}`;
         // },
       // },
      },
      {
        sequelize,
      }  
      );

    return this;
  }
  user() {
    return this.belongsTo('App/models/User')
  }
  images(){
    return this.hasMany('App/models/User')
  }
}

export default Posicao;