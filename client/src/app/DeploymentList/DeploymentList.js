import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {
    deleteDeployments,
    fetchDeployment,
    loadDeleteItem
} from '../AppActions';
import {
    getTotalCount,
    getPageSize,
    getPageNum,
    getList,
    getDeleteItemStatus,
    getFetchStatus
} from '../AppReducer';
import ListTable from "./components/ListTable";



export default function DeploymentList(props) {

    const dispatch = useDispatch();
    const currentState = useSelector((state) => {
        return {
            list: getList(state),
            pageNum: getPageNum(state),
            pageSize: getPageSize(state),
            count: getTotalCount(state),
            isFetching: getFetchStatus(state),
            isDeleting: getDeleteItemStatus(state)
        }
    })

    const deleteItem = (id) => {
        dispatch(deleteDeployments(id));
    }

    useEffect(() => {
        let filters = {};
        // dispatch(fetchDeployment(filters));
    });

    console.log('deployment list', currentState, props);

    return(
        <div className="deployment">
            <div>Deployment List</div>
            <div>
                <ListTable
                    count={currentState.count}
                    list={currentState.list}
                    currentCount={ currentState.list && currentState.list.length > 0 ? currentState.list.length : 0 }
                    pageNum={currentState.pageNum}
                    pageSize={currentState.pageSize}
                    isDeleting={currentState.isDeleting}
                    isFetching={currentState.isFetching}
                    deleteItem={deleteItem}
                />
            </div>
        </div>
    )
}
