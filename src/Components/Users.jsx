import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('fliter') === 'active';
    return (
        <div>
            <h1>user 1</h1>
            <h1>user 2</h1>
            <h1>user 3</h1>
            <Outlet />
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>
                    Active Users
                </button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {showActiveUsers ? (
                <h1>Showing Active users</h1>
            ) : (
                <h1>Showing all userss</h1>
            )}
        </div>
    )
}

export default Users
