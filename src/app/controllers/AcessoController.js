class AcessoController {
    async store(req, res) {
      
      console.log('oi');
      return res.json({message: 'oiiiiii'})
    }

  
}

export default new AcessoController();