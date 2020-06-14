import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {
    addDeployment,
    deleteDeployments,
    fetchDeployment, fetchTemplates,
    loadDeleteItem
} from '../AppActions';
import {
    getTotalCount,
    getPageSize,
    getPageNum,
    getList,
    getDeleteItemStatus,
    getFetchStatus,
    getAddItemStatus,
    getTemplates
} from '../AppReducer';
import ListTable from "./components/ListTable";
import AddNewItemForm from "./components/AddNewItemForm";



export default function DeploymentList(props) {

    const [ isOpenAddItemForm, handleAddItem] = useState(false);
    const dispatch = useDispatch();
    const currentState = useSelector((state) => {
        return {
            list: getList(state),
            pageNum: getPageNum(state),
            pageSize: getPageSize(state),
            count: getTotalCount(state),
            isFetching: getFetchStatus(state),
            isDeleting: getDeleteItemStatus(state),
            isAdding: getAddItemStatus(state),
            templates: getTemplates(state)
        }
    })

    const deleteItem = (id) => {
        dispatch(deleteDeployments(id));
    }

    const addItem = (item) => {
        dispatch(addDeployment(item));
    }

    useEffect(() => {
        let filters = {};
        filters.pageNum = currentState.pageNum;
        filters.pageSize = currentState.pageSize;
        dispatch(fetchTemplates());
        dispatch(fetchDeployment(filters));
    }, [currentState.count]);

    useEffect(() => {
        if(!currentState.isAdding) {
            handleAddItem(false);
        }
    }, [currentState.isAdding]);

    return(
        <div className="deployment">
            <div>
                <h2>Deployment List</h2>
            </div>
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
                    openAddItemForm={() => handleAddItem(true)}
                />
                {
                    isOpenAddItemForm ?
                        <AddNewItemForm
                            showModal={isOpenAddItemForm}
                            close={() => handleAddItem(false)}
                            addItem={addItem}
                            isAdding={currentState.isAdding}
                            templates={currentState.templates}
                        /> : null
                }

            </div>
        </div>
    )
}
