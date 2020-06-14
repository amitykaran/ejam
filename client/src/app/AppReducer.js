
import {
    LOAD_DEPLOYMENT_LIST
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
    pageSize: 15
}

// reducer function
 const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DEPLOYMENT_LIST:
            return {
                ...state
            };

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

export default appReducer;
