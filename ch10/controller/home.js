import {join} from 'path'

const home=(req,res)=>{
   const pat=(join(process.cwd(),'views','home.html'))
    res.sendFile(pat)
}
export {home}