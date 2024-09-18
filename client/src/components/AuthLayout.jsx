import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protected = ({children, authentication = true }) => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector (state => state.auth.status)

    useEffect( () => {
        // true && false !== true = true 
        // todo make it more easy
        if(authentication && authStatus !== authentication){
         navigate('/login')
        } else if(!authentication && authStatus !== authentication){  // false && true !== true = false
            navigate("/")
        }
        setLoader(false)

    },[authStatus, navigate, authentication])
  return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected
