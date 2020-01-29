import Posicao from '../models/Posicao';

class PosicaoController {
  async store({auth,request, response}) {
    const {id} = auth.user
    const data = request.only(
      'end',
      'latitude',
      'longitude'
    )
    const posicaos = await Posicao.create({...data,user_id: id})
    return posicaos
 
 /*const {end,latitude,longitude} = await Posicao.create(req.body)
   
  
    
        return res.json(
          end,
          latitude,
          longitude
        ); */
     
                            
    }
   
  }

export default new PosicaoController();