
import { Outlet } from 'react-router-dom'

import Header from '../Common/Header'
import Footer from './footer'


const UserLayout = () => {
  return (
    <div className='overflow-x-hidden'>
     <Header/>
     <main>
      <Outlet/>
     </main>
     {/* main content */}
    <Footer/>
    </div>
  )
}

export default UserLayout
