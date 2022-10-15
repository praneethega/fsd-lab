const exp=require('express')
const router=exp.Router()
const s=require('../model/books')
router.get('/',async(req,res)=>
{
    try{
        const a=await s.find()
        res.json(a)
    } catch(err){
        res.send("error"+err)
    }
}
)
router.get('/:id',async(req,res)=>{
    try{
        const b=await s.findById(req.params.id)
        res.json(b)
    }
    catch(err){
        res.send("error"+err)
    }
})

router.post('/',async(req,res)=>{
    const a1=new s(
        {
            title:req.body.title,
            author:req.body.author,
            category:req.body.category
        }
    )
    try{
        const c=await a1.save()
        res.json(c)
    }catch(err){
        res.send("error"+err)
    }
})

module.exports=router