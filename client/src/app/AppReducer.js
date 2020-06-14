
import {
    LOAD_DEPLOYMENT_LIST,
    LOAD_DEPLOYMENT_FETCHING_STATUS,
    LOAD_DELETE_DEPLOYMENT,
    LOAD_DEPLOYMENT_DELETE_STATUS,
} from './AppActions';

// initial state
const initialState = {
    items: [{
        url: 'test Url',
        templateName: 'Template Name',
        version: '1.0.0',
        deployedAt: Date()
    }],
    count: 1,
    pageNum: 1,
    pageSize: 15,
    isFetchingDeployment: false,
    isDeleting: {}
}

// reducer function
 const appReducer = (state = initialState, action) => {
     let isDeleting = state.isDeleting;
     let items = state.items;
    switch (action.type) {
        case LOAD_DEPLOYMENT_LIST:
            return {
                ...state,
                items: action.items,
                count: action.count,
                pageNum: action.pageNum,
                isFetchingDeployment: false
            };

        case LOAD_DEPLOYMENT_FETCHING_STATUS:
            return {
                ...state,
                isFetchingDeployment: action.isFetchingDeployment
            }

        case LOAD_DEPLOYMENT_DELETE_STATUS:
            isDeleting[action.id] = action.status;
            return {
                ...state,
                isDeleting: isDeleting
            }

        case LOAD_DELETE_DEPLOYMENT:
            isDeleting[action.id] = false;
            items = items.filter(item => item._id !== action.id);
            return {
                ...state,
                items: items,
                count: state.count - 1
            }

        default:
            return {
                ...state
            }
    }
}

// selectors
export const getList = (state) => state.items;
export const getPageNum = (state) => state.pageNum;
export const getPageSize = (state) => state.pageSize;
export const getTotalCount = (state) => state.count;
export const getFetchStatus = (state) => state.isFetchingDeployment;
export const getDeleteItemStatus = (state) => state.isDeleting;

export default appReducer;
