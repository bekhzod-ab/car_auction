import React, {useState, useRef, useContext} from 'react'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from '../../context/UseContext';


export const RegisterComp = () => {
    const [showForm, setShoForm] = useState(false)
    const [error, setError] = useState("")
    const emailRef = useRef()
    const passwordRef = useRef()
    const confpPasswordRef = useRef()
    const { register } = useContext(AuthContext)

    const openForm = () => setShoForm(true)
    const closeForm = () => setShoForm(false)


    const submitForm = async(e) => {
        e.preventDefault()
        setError("")
        if(passwordRef.current.value !== confpPasswordRef.current.value){
            return setError("Passwords don't match")
        }

        try {
           await register(emailRef.current.value,passwordRef.current.value);
           closeForm();
        }
        catch(err){
            setError(err.message)
        }
    }

    return (
        <>
            <div onClick={openForm} className="btn btn-outline-success mx-2">
                Register
            </div>

            <Modal centered show={showForm} onHide={closeForm}>
                <form onSubmit={submitForm}>

                    <Modal.Header>
                        <Modal.Title>
                            Register
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" required ref={emailRef}/>

                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required ref={passwordRef}/>

                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" required ref={confpPasswordRef}/>
                            {error? <Alert variant="danger mt-3">{error}</Alert>: ""}
                        </Form.Group>
                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeForm}>Cancel</Button>
                        <Button variant="success" type="submit">Register</Button>
                        
                    </Modal.Footer>

                </form>  
            
            </Modal>
        </>    
    );
}
