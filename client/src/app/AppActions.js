import callApi from "../util/apiCaller";


export const LOAD_DEPLOYMENT_LIST = 'LOAD_DEPLOYMENT_LIST';
export const LOAD_DEPLOYMENT_FETCHING_STATUS = 'LOAD_DEPLOYMENT_FETCHING_STATUS';
export const LOAD_DEPLOYMENT_DELETE_STATUS = 'LOAD_DEPLOYMENT_DELETE_STATUS';
export const LOAD_DELETE_DEPLOYMENT = 'LOAD_DELETE_DEPLOYMENT';
export const LOAD_ADD_ITEM = 'LOAD_ADD_ITEM';
export const LOAD_ADD_ITEM_STATUS = 'LOAD_ADD_ITEM_STATUS';
export const LOAD_TEMPLATE = 'LOAD_TEMPLATE';

export function loadDeploymentList(data, pageNum) {
    return {
        type: LOAD_DEPLOYMENT_LIST,
        items: data.deployments,
        count: data.count,
        pageNum: pageNum,
        isFetchingDeployment: false
    }
}

export function loadDeploymentFetchingStatus(status) {
    return {
        type: LOAD_DEPLOYMENT_FETCHING_STATUS,
        isFetchingDeployment: !!status
    }
}

export function fetchDeployment(filters) {
    return (dispatch) => {
        dispatch(loadDeploymentFetchingStatus(true));
        callApi(`api/deployments/list`, 'post', filters).then(res => {
            console.log('res', res);
            if(res && res.status === 'Success') {
                dispatch(loadDeploymentList(res.data, filters.pageNum));
            } else {
                dispatch(loadDeploymentFetchingStatus(false));

            }
        })
    }
}

export function loadDeploymentDeletingStatus(id, status) {
    return {
        type: LOAD_DEPLOYMENT_DELETE_STATUS,
        id: id,
        status: !!status
    }
}

export function loadDeleteItem(id) {
    return {
        type: LOAD_DELETE_DEPLOYMENT,
        id: id
    }
}

export function deleteDeployments(id) {
    return (dispatch) => {
        dispatch(loadDeploymentDeletingStatus(id, true));
        callApi(`api/deployments/${id}/remove`, 'post', {}).then(res => {
            if(res && res.status === 'Success') {
                dispatch(loadDeleteItem(id));
            } else {
                dispatch(loadDeploymentDeletingStatus(id, false));

            }
        })
    }
}

export function loadAddItem(item) {
    return {
        type: LOAD_ADD_ITEM,
        item: item,
        isAdding: false
    }
}

export function loadAddItemStatus(status) {
    return {
        type: LOAD_ADD_ITEM_STATUS,
        isAdding: !!status
    }
}

export function addDeployment(item) {
    return (dispatch) => {
        dispatch(loadAddItemStatus(true));
        callApi('api/deployments/new', 'post', {deployment: item}).then(res => {
            if(res && res.status === 'Success') {
                dispatch(loadAddItem(res.data.deployment));
            } else {
                dispatch(loadAddItemStatus(false));
            }
        })
    }
}

export function loadTemplates(templates) {
    return {
        type: LOAD_TEMPLATE,
        templates: templates
    }
}

export function fetchTemplates() {
    return (dispatch) => {
        callApi('api/templates/list', 'post', {}).then(res => {
            if(res && res.status === 'Success') {
                dispatch(loadTemplates(res.data.templates));
            }
        })
    }
}
