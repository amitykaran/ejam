import React, {Component} from 'react';
import _ from 'lodash';
import {
    Button,
    FormControl,
    Form,
    FormGroup,
    Col,
    Modal,
} from 'react-bootstrap';

function AddNewItemForm(props) {
    const handleAddNewItem = () => {

    }
    return(
        <Modal
            show={props.showModal}
            onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title style={{textAlign: 'center'}}>
                    Add New Deployment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form horizontal>
                    <FormGroup>
                        <Col  sm={3}>
                            Name <span style={{color: 'red'}}>*</span>
                        </Col>
                        <Col sm={7}>
                            <FormControl
                                inputRef={ref => { this.name = ref }}
                                type="Text"
                                placeholder={"Enter Name "} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col  sm={3}>
                            Title <span style={{color: 'red'}}></span>
                        </Col>
                        <Col sm={7}>
                            <FormControl
                                inputRef={ref => { this.title = ref }}
                                type="Text"
                                placeholder={"Enter Title "} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col  sm={3}>
                            Url <span style={{color: 'red'}}>*</span>
                        </Col>
                        <Col sm={7}>
                            <FormControl
                                inputRef={ref => { this.url = ref }}
                                type="Text"
                                placeholder={"Enter Url "} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={4} sm={7}>
                        </Col>
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Button onClick={() => this.props.close()}>Close</Button>
                    <Button onClick={() => handleAddNewItem()} >Create</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default AddNewItemForm;
