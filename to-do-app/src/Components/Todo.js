import React from 'react'
import '../Styling/Style.css'

const Todo=()=>{
    
    return(
        <>
        <table className='tableStyle'>
            <tbody>
            <tr >
                <th colSpan="3">
                    TO DO LIST
                </th>
            </tr>
            <tr>
                <th>
                    Description
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
                <td>
                    {`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}
                </td>
                <td>
                    In progress
                </td>
            </tr>
            <tr>
                <td>
                    Learn JAVA
                </td>
                <td>
                    {`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}
                </td>
                <td>
                    Yes
                </td>
            </tr>
            <tr>
                <td>
                    Learn MongoDB
                </td>
                <td>
                    {`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}
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