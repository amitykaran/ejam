import React, { useState } from 'react';
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
    const [versions, handleVersion] = useState([]);
    const [version, handleVersionChange] = useState('');
    const [url, handleUrl] = useState('');
    const [template, handleTemplate] = useState({});
    const isValid = (item) => {
        let isValid = true;
        if(!!!item.url) {
            isValid = false;
        } else if(!!!item.templateName) {
            isValid = false;

        } else if(!!!item.version) {
            isValid = false;

        }
        return isValid;
    }
    const handleAddNewItem = () => {
        let item = {};
        item.url = url;
        item.templateName = template.name;
        item.version = version;
        if(isValid(item)) {
            props.addItem(item);
        }
    }
    const handleSelectTemplate = (id) => {
        if(id === '') {
            handleTemplate({});
            handleVersion([]);
            handleVersionChange('');
        } else {
            props.templates.forEach(item => {
                if(item._id === id) {
                    handleTemplate(item);
                    handleVersion(item.versions);
                }
            });
        }
    }
    return(
        <div className="add-overlay">
            <div onClick={() => props.close()} className="add-overlay-background"></div>
            <div className="overlay-wrapper">
                <div className="overlay">
                    <div className="overlay-header">
                        Add Deployment
                    </div>
                    <div className="overlay-body">
                        <Form horizontal>
                            <FormGroup style={{marginBottom: '15px'}}>
                                <div className="input-label">
                                    URL <span style={{color: 'red'}}>*</span>
                                </div>
                                <div>
                                    <FormControl
                                        onChange={(e) => handleUrl(e.target.value)}
                                        type="text"
                                        className="input-style"
                                        placeholder={"Enter Url "} />
                                </div>
                            </FormGroup>
                            <FormGroup style={{marginBottom: '15px'}}>
                                <div className="input-label">
                                    Template Name <span style={{color: 'red'}}>*</span>
                                </div>
                                <Col sm={7}>
                                    <select   className="input-style" name="" id="" onChange={(e) => handleSelectTemplate(e.target.value)}>
                                        <option value="">-- Select Template --</option>
                                        {
                                            props.templates && props.templates.length > 0 && props.templates.map(item => (
                                                <option value={item._id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup style={{marginBottom: '15px'}}>
                                <div className="input-label">
                                    Version <span style={{color: 'red'}}>*</span>
                                </div>
                                <Col sm={7}>
                                    <select className="input-style" disabled={versions.length === 0} name="" id="" onChange={(e) => handleVersionChange(e.target.value)}>
                                        <option value="">-- Select Version --</option>
                                        {
                                            versions && versions.length > 0 && versions.map(item => (
                                                <option value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                    <div className="overlay-footer">
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Button onClick={() => props.close()}>Close</Button>
                            <Button disabled={props.isAdding} onClick={() => handleAddNewItem()} >{props.isAdding ? 'Adding': 'Add'}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewItemForm;
