export const initialState={
    basket:[],
    user:null
}
export const getProductTotal=(basket)=>(
    basket?.reduce((amount,item)=>(item.price + amount ), 0)
)
export const reducer=(state,action)=>{
    switch(action.type){
        case 'AddToBasket':
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
        case 'RemoveBasket':
            const index=state.basket.findIndex((basketv)=>
            basketv.id===action.id)   
            const newBasket=[...state.basket]
            if(index >= 0){
                newBasket?.splice(index,1)
            } else{
                console.warn(`the product${action.id} doesnt exist `)
            }
            return{
                ...state,
                basket:newBasket
            }
            case 'authUser':
                return{
                    ...state,
                    user:action.user
                }
        default:
            return{
                ...state,
            } 
    }
}