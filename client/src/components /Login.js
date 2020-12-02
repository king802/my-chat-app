import React, {useRef} from 'react';
import {Container, Form, Button} from "react-bootstrap";
import { v4 as uuidV4 } from "uuid"


function Login({onIdSubmit}) {
    const idRef = useRef();

    function handelSubmit(e) {
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }

    function createId() {
        onIdSubmit(uuidV4())

    }

    return (
        <Container className="align-items-center d-flex"
                   style={{height: '100vh'}}>
            <Form
                className="w-100"
                onSubmit={handelSubmit}>
                <Form.Group>
                    <Form.Label>
                        Enter Your ID
                    </Form.Label>
                    <Form.Control type='text'
                                  ref={idRef}
                                  required/>
                </Form.Group>
                <Button
                    className='mr-2'
                    type='submit'>
                    Login
                </Button>
                <Button
                    variant='secondary'
                    onClick={createId}>
                    Create New Id
                </Button>
            </Form>
        </Container>

    );
}

export default Login;