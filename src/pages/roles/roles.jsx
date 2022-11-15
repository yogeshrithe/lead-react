import Table from "../../components/table/table"
import { Button } from "react-bootstrap"
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Roles = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/pages/leads/addLeads');
    }
    const Role = {
        head: [
            'Role',
            'Level',
        ],
        body: [
            {
                'role': 'Admin',
                'level': '1'
            },
            {
                'role': 'Employee',
                'level': '2'
            }
        ]
    }
    const renderRoleHead = (item, index) => (
        <th key={index}>{item}</th>
    )
    const renderRoleBody = (item, index) => (
        <tr key={index}>
            <td>{item.role}</td>
            <td>{item.level}</td>
        </tr>
    )
    return (
        <div className="mr-5">
            <h2 className="page-header ml-2"><i className='bx bxs-group mr-2 mt-1'></i>Roles</h2>
            <div className="card">
                <div className="card__body ">
                    <Table
                        headData={Role.head}
                        renderHead={(item, index) => renderRoleHead(item, index)}
                        bodyData={Role.body}
                        renderBody={(item, index) => renderRoleBody(item, index)}
                    />
                </div>
            </div> 
        </div>
    )
}

export default Roles