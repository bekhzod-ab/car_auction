import React, {useState, useRef, useContext} from 'react'
import { Modal, Form, Button, Alert, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";



export const AddLoot = () => {
    const [showForm, setShoForm] = useState(false)
    const [error, setError] = useState("")
    const nameRef = useRef()
    const registrRef = useRef()
    const milleageRef = useRef()
    const fuelRef = useRef()
    const transRef = useRef()
   


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
                + Lot
            </div>

            <Modal centered show={showForm} onHide={closeForm}>
                <form onSubmit={submitForm}>

                    <Modal.Header>
                        <Modal.Title>
                            Create Lot
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                       <Row>
                           <Col>
                            <Form.Group>
                                <Form.Label>Vehicle Name:</Form.Label>
                                <Form.Control type="text" required ref={nameRef}/>
                            </Form.Group>
                           </Col>
                           <Col>
                            <Form.Group>
                                <Form.Label>First Registration:</Form.Label>
                                <Form.Control type="number" required ref={registrRef}/>
                            </Form.Group>
                           </Col>
                           <Col>
                            <Form.Group>
                                <Form.Label>Milleage:</Form.Label>
                                <Form.Control type="number" required ref={milleageRef}/>
                            </Form.Group>
                           </Col>
                           <Col>
                            <Form.Group>
                                <Form.Label>Fuel:</Form.Label>
                                <Form.Control type="text" required ref={fuelRef}/>
                            </Form.Group>
                           </Col>
                           <Col>
                            <Form.Group>
                                <Form.Label>Transmission:</Form.Label>
                                <Form.Control type="text" required ref={transRef}/>
                            </Form.Group>
                           </Col>
                           <Col>
                            <Form.Group>
                                <Form.Label>Start Price:</Form.Label>
                                <Form.Control type="number" required ref={startRef}/>
                            </Form.Group>
                           </Col>
                           <Col>
                            <Form.Group>
                                <Form.Label>Lot Duration:</Form.Label>
                                <Form.Control type="number" required ref={durationRef}/>
                            </Form.Group>
                           </Col>
                       </Row>
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

