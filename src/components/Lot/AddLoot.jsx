import React, {useState, useRef, useContext} from 'react'
import { Modal, Form, Button, Alert, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from '../../context/UseContext';
const date = new Date()

export const AddLoot = ({setLot}) => {
    const [showForm, setShoForm] = useState(false)
    const [error, setError] = useState("")



    const modelRef = useRef()
    const registrRef = useRef()
    const milleageRef = useRef()
    const fuelRef = useRef()
    const transRef = useRef()
    const startRef = useRef()
    const durationRef = useRef()
    const currentRef = useRef()
    const {user} = useContext(AuthContext)
    const vehicleImage = useRef()

    const openForm = () => setShoForm(true)
    const closeForm = () => setShoForm(false)

    //Validate Image types mention in array
    const imgTypes =["image/png", "image/jpeg", "image/jpg"]

    const submitForm = async(e) => {
        e.preventDefault()
        setError("");

        let dueDate = date.setHours(
            date.getHours() + durationRef.current.value
        );

        if(!imgTypes.includes(vehicleImage.current.files[0].type)) {
            return setError("Please upload only in following formats: .png/.jpeg/.jpg ")
        }
        
        let newLot = {
            email: user.email,
            model: modelRef.current.value,
            registration: registrRef.current.value,
            milleage: milleageRef.current.value,
            fuel: fuelRef.current.value,
            transmission: transRef.current.value,
            startingPrice: startRef.current.value,
            currentPrice: currentRef.current.value,
            vehicleImage: vehicleImage.current.files[0],
            duration: dueDate 
        };

        setLot(newLot)
        closeForm()
    }

    return (
        <>  <div className="col d-flex justify-content-center">
                <div onClick={openForm} className="btn btn-outline-success mx-2">
                    Add Lot
                </div>
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
                                <Form.Label>Vehicle Model:</Form.Label>
                                <Form.Control type="text" required ref={modelRef}/>
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
                                <Form.Label>Current Price:</Form.Label>
                                <Form.Control type="number" required ref={currentRef}/>
                            </Form.Group>
                           </Col>
                           <Col>
                            <Form.Group>
                                <Form.Label>Lot Duration:</Form.Label>
                                <Form.Control type="number" required ref={durationRef}/>
                            </Form.Group>
                           </Col>
                           <Col>
                            <Form.Group>
                                <Form.Label>Seller:</Form.Label>
                                <Form.Control type="text" value={user.email} readOnly/>
                            </Form.Group>
                           </Col>
                           <Col>
                            <Form.Group>
                                <Form.Label>Vehicle Image</Form.Label>
                                <Form.File label="Select Lot Image" custom required ref={vehicleImage}/>
                            </Form.Group>
                           </Col>
                       </Row>
                        {error? <Alert variant="danger mt-2">{error}</Alert>:""}
                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeForm}>Cancel</Button>
                        <Button variant="success" type="submit">Submit</Button>
                        
                    </Modal.Footer>

                </form>  
            
            </Modal>
        </>    
    );
}

