import { Form, Row, Col, Button, InputGroup,ButtonGroup } from 'react-bootstrap';
import {
  InputLabel, MenuItem, FormControl, Select, Icon, Autocomplete, TextField
} from '@mui/material';
import { Link } from "react-router-dom";
function AddEmployee() {

  const role = ['ADMIN', 'EMPLOYEE']

  return (
    <div>
      <h2 className="page-header ml-2"><i className='bx bxs-user-account mr-2 mt-1'></i>addEmployees</h2>
      <Form className="card mr-4" >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Lead Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" placeholder="Enter Date Of Birth" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile No.</Form.Label>
          <Form.Control type="text" placeholder="Enter Mobile No." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Enter Address" />
        </Form.Group>

        <InputGroup className="mb-2">
          <h6 className="mt-1">Role</h6>
        </InputGroup>

        <FormControl className="mb-5">
          <Autocomplete
            style={{ width: 910 }}
            freeSolo
            autoComplete
            autoHighlight
            options={role}
            renderInput={(params) => (

              <TextField
                {...params}
                variant="outlined"
                label="Select Status"
                size="small"
              />
            )}
          />
        </FormControl>
      </Form>
      <ButtonGroup className='mb-5'>
        <Link to={'/employees'}>
          <Button style={{ marginLeft: '780px', backgroundColor: '#fca11a' }}>
            Submit
          </Button>
          
        </Link>
        <Link to={'/employees'}>
      <Button style={{marginLeft: '12px', backgroundColor: '#fca11a' }}>
            Cancel
          </Button>
      </Link>
      </ButtonGroup>
    </div>
  );
}

export default AddEmployee;