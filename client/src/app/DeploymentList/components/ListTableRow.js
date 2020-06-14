import React, {Component} from 'react';
import {
    Button,
    FormControl
} from 'react-bootstrap';

class ListTableRow extends Component {

    constructor() {
        super();
        this.state = {
            isEditable: false,
        };
    };


    openEditForm = () => {
        this.setState({
            isEditable: true
        });
    };

    closeEditForm = () => {
        this.setState({
            isEditable: false
        });
    };

    saveEditItem = () => {
        if (this.name.value.length <= 0) {
            this.props.showMessage(`Name value is too short`, 'error');
        } else {
            let newItem = {
                name: this.name.value,
                seo: this.name.value.split(' ').join('-').toLowerCase()
            };
            this.props.updateItem(this.props.item._id, newItem);
            this.closeEditForm();
        }
    };

    render() {
        if (this.state.isEditable) {
            return (
                <tr className="" style={{fontSize: '1.01em'}}>
                    <td>{this.props.index + 1}</td>
                    <td>
                        <FormControl
                            defaultValue={this.props.item.name}
                            inputRef={ref => { this.name = ref }}
                            placeholder={"Name"}
                            type="text"/>
                    </td>
                    <td>
                        <FormControl
                            defaultValue={this.props.item.title}
                            inputRef={ref => { this.title = ref }}
                            placeholder={"Title"}
                            type="text"/>
                    </td>
                    <td>
                        <FormControl
                            defaultValue={this.props.item.profileImage}
                            inputRef={ref => { this.profileImage = ref }}
                            placeholder={"ProfileImage"}
                            type="text"/>
                    </td>
                    <td>
                        <FormControl
                            defaultValue={this.props.item.isVerified}
                            inputRef={ref => { this.isVerified = ref }}
                            placeholder={"IsVerified"}
                            type="text"/>
                    </td>
                    <td>
                        <FormControl
                            defaultValue={this.props.item.description}
                            inputRef={ref => { this.description = ref }}
                            placeholder={"Description"}
                            type="text"/>
                    </td>
                    <td>
                        <FormControl
                            defaultValue={this.props.item.venueList}
                            inputRef={ref => { this.venueList = ref }}
                            placeholder={"VenueList"}
                            type="text"/>
                    </td>
                    <td>
                        <FormControl
                            defaultValue={this.props.item.social_links}
                            inputRef={ref => { this.social_links = ref }}
                            placeholder={"Social_links"}
                            type="text"/>
                    </td>
                    <td>
                        <div className="row">
                            <div className="col-xs-6">
                                <Button onClick={() => this.closeEditForm()} title="Discard">
                                    <i className="fa fa-times"/>
                                </Button>
                            </div>
                            <div className="col-xs-6">
                                <Button onClick={() => this.saveEditItem()} title="Save data">
                                    <i className="fa fa-save"/>
                                </Button>
                            </div>
                        </div>
                    </td>
                </tr>
            );
        } else {
            return (
                <tr className="">
                    <td> {this.props.index + 1} </td>
                    <td>{this.props.item.isVerified ? 'Yes' : 'No'}</td>
                    <td>{this.props.item.url}</td>
                    <td>{this.props.item.name}</td>
                    <td>{this.props.item.title}</td>
                    <td>{this.props.item.description}</td>
                    <td>
                        <Button
                            target={`_blank`}
                            href={`/manager/venues/expert/${this.props.item._id}/update`}
                            style={{cursor:'pointer', fontSize: '.9em'}}
                            title='Edit Info'>
                            Update
                        </Button>
                    </td>
                    <td>
                        <Button
                            disabled={this.props.item.isDeletingVenue}
                            className="btn btn-danger"
                            onClick={() => this.props.deleteVenue(this.props.item._id)}
                        >
                            {this.props.item.isDeletingVenue ?
                                <span> Deleting <i className="fa fa-trash-o"></i></span> :
                                <span> Delete <i className="fa fa-trash-o"></i></span>
                            }
                        </Button>
                    </td>
                </tr>
            );
        }
    }
}

export default ListTableRow;


