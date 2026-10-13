import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <>
            <div className='dashboard'>
                <div className='Side'>Sidebar</div>

                <div className='content'>
                    <div className='top'>Topbar</div>

                    <div className='main'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout