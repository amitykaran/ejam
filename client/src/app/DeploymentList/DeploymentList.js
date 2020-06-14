import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchDeployment } from '../AppActions';
import {
    getTotalCount,
    getPageSize,
    getPageNum,
    getList
} from '../AppReducer';
import ListTable from "./components/ListTable";

// const selectNumOfDoneTodos = createSelector(
//     state => state.todos,
//     todos => todos.filter(todo => todo.isDone).length
// )


export default function DeploymentList(props) {

    const dispatch = useDispatch();
    const currentState = useSelector((state) => {
        return {
            list: getList(state),
            pageNum: getPageNum(state),
            pageSize: getPageSize(state),
            count: getTotalCount(state)
        }
    })

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
                />
            </div>
        </div>
    )
}
