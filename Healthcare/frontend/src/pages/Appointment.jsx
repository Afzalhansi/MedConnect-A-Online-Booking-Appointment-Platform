import React,{useContext,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Appointment = () => {

  const {docId} = useParams()
    const {doctors, currencySymbol} = useContext(AppContext)

    const [docInfo,setDocInfo] = useState(null)

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id == docId)
        setDocInfo(docInfo)
        console.log(docInfo)
    }

    useEffect(()=> {
      fetchDocInfo()
  },[doctors,docId])

  return (
    <div>
    <div>
      <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt = "" />
    </div>
    </div>
  )
}

export default Appointment
