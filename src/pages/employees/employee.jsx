import Table from "../../components/table/table"
import { Button } from "react-bootstrap"
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Employee = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/pages/leads/addLeads');
    }
    const Employee = {
        head: [
            'Name',
            'Mobile No',
            'Email',
            'Date of Birth',
            'Role'
        ],
        body: [
            {
                'name': 'enquiry for crm',
                'mobileno': '8765789042',
                'email': 'yogesh@gmail.com',
                'dob':'2022-09-14',
                'role':'ADMIN'
            }
        ]
    }
    const renderEmployeeHead = (item, index) => (
        <th key={index}>{item}</th>
    )
    const renderEmployeeBody = (item, index) => (
        <tr key={index}>
            <td>{item.name}</td>
            <td>{item.mobileno}</td>
            <td>{item.email}</td>
            <td>{item.dob}</td>
            <td>{item.role}</td>
        </tr>
    )
    return (
        <div className="mr-5">
            <h2 className="page-header ml-2"><i className='bx bxs-user-account mr-2 mt-1'></i>Employees</h2>
            <div className="card">
                <div className="card__body ">
                    <Table
                        headData={Employee.head}
                        renderHead={(item, index) => renderEmployeeHead(item, index)}
                        bodyData={Employee.body}
                        renderBody={(item, index) => renderEmployeeBody(item, index)}
                    />
                </div>
            </div>
                <Link to={'/addEmployee'}>
                    <Button style={{ marginLeft: '810px', backgroundColor: '#fca11a' }}>
                        Add Employee
                    </Button>
                </Link>
                
        </div>
    )
}

export default Employee