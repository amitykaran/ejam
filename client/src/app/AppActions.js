

export const FETCH_DEPLOYMENT = 'FETCH_DEPLOYMENT';
export const LOAD_DEPLOYMENT_LIST = 'LOAD_DEPLOYMENT_LIST';

export function loadDeploymentList(list) {
    return {
        type: LOAD_DEPLOYMENT_LIST,
        items: list
    }
}

export function fetchDeployment(filters) {
    // (dispatch) => {
    //
    // }
}
