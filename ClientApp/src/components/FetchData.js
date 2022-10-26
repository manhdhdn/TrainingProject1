import React, { useEffect, useState } from 'react';

export function FetchData() {
    const [loading, setLoad] = useState(true);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        populateRoleData();

        async function populateRoleData() {
            const response = await fetch('api/roles');
            const data = await response.json();
            setRoles(data);
            setLoad(false);
        };
    }, []);

    const renderRolesTable = () => {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Role ID</th>
                        <th>Role Name</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map(role =>
                        <tr key={role.roleID}>
                            <td>{role.roleID}</td>
                            <td>{role.roleName}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderRolesTable();

    return (
        <div>
            <h1 id="tabelLabel" >Role</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
}
