import React from 'react'

const Todo=()=>{
    
    return(
        <>
        <table>
            <tbody>
            <tr>
                <th>
                    description
                </th>
                <th>
                    time
                </th>
                <th>
                    Is completed
                </th>
            </tr>
            <tr>
                <td>
                    Learn React
                </td>
                {/* <td>
                    {new Date()}
                </td> */}
                <td>
                    In progress
                </td>
            </tr>
            <tr>
                <td>
                    Learn JAVA
                </td>
                {/* <td>
                    {new Date()}
                </td> */}
                <td>
                    Yes
                </td>
            </tr>
            <tr>
                <td>
                    Learn MongoDB
                </td>
                <td>
                    {(new Date()).toString}
                </td>
                <td>
                    No
                </td>
            </tr>
            </tbody>
        </table>
        </>
    )
}

export default Todo