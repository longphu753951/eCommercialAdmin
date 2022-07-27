import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container-fluid d-flex align-content-center justify-content-center flex-wrap">
      <Form
        style={{ width: '22%', minWidth: '20rem' }}
        className="shadow-lg p-4 mb-5 bg-body rounded"
        onSubmit={() => handleSubmit()}
      >
        <h3 className="mb-4">Log In</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex justify-content-between"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Remember me" />
          <Link to={''}>Forgot password</Link>
        </Form.Group>
        <Button style={{ width: '100%' }} variant="primary" type="submit">
          LOG IN
        </Button>
      </Form>
    </div>
  );
};

export default Login;
