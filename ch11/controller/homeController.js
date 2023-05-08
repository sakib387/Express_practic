import { join } from "path";

const homeControl=(req,res)=>{
    res.sendFile(join(process.cwd(),'view','index.html'))
}


export {homeControl}