import callApi from "../util/apiCaller";


export const LOAD_DEPLOYMENT_LIST = 'LOAD_DEPLOYMENT_LIST';
export const LOAD_DEPLOYMENT_FETCHING_STATUS = 'LOAD_DEPLOYMENT_FETCHING_STATUS';
export const LOAD_DEPLOYMENT_DELETE_STATUS = 'LOAD_DEPLOYMENT_DELETE_STATUS';
export const LOAD_DELETE_DEPLOYMENT = 'LOAD_DELETE_DEPLOYMENT';

export function loadDeploymentList(data, pageNum) {
    return {
        type: LOAD_DEPLOYMENT_LIST,
        items: data.deployments,
        count: data.totalCount,
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
        callApi(`/api/deployments/list`, 'post', filters).then(res => {
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
        callApi(`/api/deployments/${id}/remove`, 'post', {}).then(res => {
            if(res && res.status === 'Success') {
                dispatch(loadDeleteItem(id));
            } else {
                dispatch(loadDeploymentDeletingStatus(id, false));

            }
        })
    }
}
