import React, {useState, useRef, useContext} from 'react'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from '../../context/UseContext';


export const LoginComp = () => {
    const [showForm, setShoForm] = useState(false)
    const [error, setError] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useContext(AuthContext)
    

    const openForm = () => setShoForm(true)
    const closeForm = () => setShoForm(false)
    const submitForm = async (e) => {
        e.preventDefault()
        try{
            await login(emailRef.current.value,passwordRef.current.value)
        }
        catch(err){
            setError(err.message)
        }

    }

    return (
        <>
            <div onClick={openForm} className="btn btn-outline-primary mx-2">
                Login
            </div>

            <Modal centered show={showForm} onHide={closeForm}>
                <form onSubmit={submitForm}>

                    <Modal.Header>
                        <Modal.Title>
                            Login
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" required ref={emailRef}/>

                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required ref={passwordRef}/>
                            {error? <Alert variant="danger mt-3">{error}</Alert> : ""}
                        </Form.Group>
                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeForm}>Cancel</Button>
                        <Button type="submit">Login</Button>
                    </Modal.Footer>

                </form>  
            
            </Modal>
        </>    
    );
}
