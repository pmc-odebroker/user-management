//src/compponents/GuestLayout.jsx
import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { Outlet , Navigate} from 'react-router-dom'

export default function GuestLayout() {
  const {token} = useStateContext()
  if(token){
    return <Navigate to="/users" />
  }

  return (
    <div>
      <Outlet/>
    </div>
  );
}
