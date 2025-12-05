const admidAuth =  (req, res, next)=>{
    const token = "abc"
    const admidAuth = token === "abc"
    if(!admidAuth){
        res.status(401).send("Unauthorized !!! acces")
    }
    else{
        next()
    }
}

const userdata =  (req, res, next)=>{
    const token = "abc"
    const userAuth = token === "abc"
    if(!userAuth){
        res.status(401).send("Unauthorized !!! acces")
    }
    else{
        next()
    }
}


module.exports={
    admidAuth,
    userdata
}