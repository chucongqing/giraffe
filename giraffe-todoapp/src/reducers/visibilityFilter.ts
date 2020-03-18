import {VisibilityFilters, SET_VISIBILITY_FILTER, SetVisibilityFilterAction} from "types"
import { type } from "os"

const visibilityFilter = (state : string = VisibilityFilters.SHOW_ALL, action :SetVisibilityFilterAction) =>{
    switch(action.type) {
        case SET_VISIBILITY_FILTER : {
            return action.filter
        }
        default:
            return state
    }
}

export default visibilityFilter