import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../spinner/Spinner.js'

function DashbroadPage() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  if (!user) {
    navigate('/login')
  }

  
  return <h1>This is Dashbroad Page</h1>;

}

export default DashbroadPage;
