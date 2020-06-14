import React, {Component} from 'react';
import _ from 'lodash';
import {
    Button,
    FormControl,
    Form,
    FormGroup,
    Col,
    ControlLabel,
    Modal,
} from 'react-bootstrap';

class AddNewItemForm extends Component{
    constructor() {
        super();
        this.state = {};
    }

    handleAddNewItem = () => {
        console.log('a', this.name);
        console.log('b', this.name.value);
        if (this.name.value === '') {
            this.props.showMessage(`Name is required`, 'warning');
        } else if (this.title.value === '') {
            this.props.showMessage(`Title is required`, 'warning');
        } else if(this.url.value === '') {
            this.props.showMessage(`Url is Required`, 'warning');
        } else {
            let newItem = {
                name: this.name.value,
                title: this.title.value,
                url: _.kebabCase(_.deburr(this.url.value)),
            };
            this.props.addNewItem(newItem);
        }
    };

    render() {
        return(
            <Modal
                show={this.props.showModal}
                onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign: 'center'}}>
                        Add {this.props.modelName.toUpperCase()}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>
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
                            <Col componentClass={ControlLabel} sm={3}>
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
                            <Col componentClass={ControlLabel} sm={3}>
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
                                <Button onClick={() => this.handleAddNewItem()} >Create</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.props.close()}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddNewItemForm;
