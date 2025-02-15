const initialStateCustomer = {
    fullName:'',
    nationalId:'',
    createdAt:'',
}

export default function customerReducer(state=initialStateCustomer,action){
    switch(action.type){
        case 'customer/createAccount':
            return {...state,
                    fullName:action.payload.fullName,
                    nationalId:action.payload.nationalId,
                    createdAt:action.payload.createdAt}
        case 'customer/updateAccount':
            return {...state,fullName:action.payload}
        default:
            return state;
    }
}

export function createAccount(fullName,nationalId){
    return {type:'customer/createAccount',
            payload:{fullName,nationalId,
                     createdAt:new Date().toISOString()}}
}
export function updateAccount(fullName)
{
    return {
        type:'customer/updateAccount',
        payload:{fullName}
    }
}