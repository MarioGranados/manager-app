import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import EmployeeForm from '../components/EmployeeForm';
import Spinner from '../components/Spinner';
import { getEmployees, reset } from '../features/employees/employeeSlice';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth)
  const {employees, isLoading, isError, message} = useSelector((state) => state.employees)
  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getEmployees())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return (<Spinner/>)
  }
  return (
    <>
    <section>
      <h1>Welcome {user && user.firstName }</h1>
      <p>Employees</p>
      <EmployeeForm/>
    </section>
    
    </>
  )
}

export default Dashboard