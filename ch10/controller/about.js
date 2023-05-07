
import {join} from 'path'
const about=(req,res)=>{
    const pat=(join(process.cwd(),'views','about.html'))
    res.sendFile(pat)
}
export {about}