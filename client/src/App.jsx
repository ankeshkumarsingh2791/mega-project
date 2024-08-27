
import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/Auth"


function App() {
  const {loading, setLoading} = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentuser().then((useData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    }).finally( () => setLoading(false))
  }, [])

  return !loading ? (<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
   <div className='w-full block'>
       <index />
   </div>
  </div>) : null
}

export default App
