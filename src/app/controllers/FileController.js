import File from '../models/File';

class FileController {
  async store(req, res) {
  const arrayImages = [];  
  let i;
  for(i=0;i<req.files.length;i++) {
  const {filename:path,originalname:name} = req.files[i];
  
  arrayImages.push(name,path)
  
}
 let [a,b,c,d,e,f,g,h,u,j,k,l,m,n,o,p,q,r,s,t] = arrayImages;

const name =[a,c,e,g,u,k,m,p,r,t];
const path = [b,d,f,h,j,l,n,o,q,s];

 const file = await File.create({
   name,
   path,
   
  
 });
  
    
        return res.json(file); 
     
                            
    }
   
  }

export default new FileController();
