import React from 'react';
import {Button} from "react-bootstrap";

export default function ListTable(props) {
    return(
        <div className="panel">
            <div className="panel-header">
                <div style={{ display: 'inline-flex', width: '100%' }}>
                    <div>{`Showing Item ( ${props.currentCount} )`}</div>
                    <div></div>
                </div>
            </div>
            <div className="panel-body">
                <table className="table" style={{ width: '100%', textAlign: 'left', border: '1px solid #cdcdcd', borderRadius: '3px' }}>
                    <tr>
                        <th style={{ padding: '8px 10px', minWidth: '30px' }}>Sr. No</th>
                        <th style={{ padding: '8px', minWidth: '50px' }}>Url</th>
                        <th style={{ padding: '8px 10px', minWidth: '50px' }}>Template Name</th>
                        <th style={{ padding: '8px 10px', minWidth: '50px' }}>Version</th>
                        <th style={{ padding: '8px 10px', minWidth: '50px' }}>Action</th>
                    </tr>
                    {
                        props.list && props.list.length > 0 ? props.list.map((item, index) => (
                            <tr style={{ color: '#737373' }}>
                                <td style={{ padding: '8px 10px', minWidth: '30px' }}>{index + 1}</td>
                                <td style={{ padding: '8px 10px', minWidth: '50px' }}>{item.url}</td>
                                <td style={{ padding: '8px 10px', minWidth: '30px' }}>{item.templateName}</td>
                                <td style={{ padding: '8px 10px', minWidth: '30px' }}>{item.version}</td>
                                <td style={{ padding: '8px 10px', minWidth: '30px' }}>
                                    <Button onClick={() => props.deleteItem(item._id)} disabled={props.isDeleting[item._id]}>{props.isDeleting[item._id] ? 'Deleting' : 'Delete'}</Button>
                                </td>
                            </tr>
                        )) :
                            <tr>
                                <td colSpan={17} style={{textAlign: 'center'}}>
                                    <h1>
                                        No data
                                    </h1>
                                </td>
                            </tr>
                    }
                </table>
            </div>
            <div className="panel-footer">
                <span>{`Showing ${(props.pageNum - 1) * props.pageSize} to ${props.currentCount} of ${props.count} entries`}</span>
            </div>
        </div>
    )
}
