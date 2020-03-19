import {VisibilityFilters, SET_VISIBILITY_FILTER, TotalAction} from "types"

const visibilityFilter = (state : string = VisibilityFilters.SHOW_ALL, action :TotalAction) : string =>{
    switch(action.type) {
        case SET_VISIBILITY_FILTER : {
            return action.filter
        }
        default:
            return state
    }
}

export default visibilityFilter