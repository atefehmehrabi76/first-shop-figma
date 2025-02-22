// import { create } from "zustand";

import { create } from "zustand";

const useBasket=create((set,get)=>{
    return{
        items:[],
        invoice:{
            totalPrice:0,
            discount:0,
            deleveryCost:0
        },
        actions:{
            addToBasket:(payload)=>{
                const allreadyExist=get().items.some((_item)=>{_item.id === payload.id})
                if(allreadyExist){
                    //allreadyExist
                    return{
                        invoice:{
                            ...oldState.invoice,
                            totalPrice:oldState.invoice.totalPrice + payload.price
                        },
                        items:oldState.items.map((_item)=>{
                            if(_item.id === payload.id){
                                return{
                                    ..._item,
                                    quantity: _item.quantity + 1
                                }
                            }else return _item;
                        })
                    }
                }
                
                //set new
                else{
                    set((oldState)=>{
                        return{
                            invoice:{
                                ...oldState.invoice,
                                totalPrice:oldState.invoice.totalPrice + payload.price
                            },
                            items:[
                                ...oldState.items,{...payload , quantity :1}
                            ]
                        }
                    })
                }
            },
            removeFromBasket:(payload)=>{
                const shouldRemove= payload.quantity === 1;
                if(shouldRemove){
                    //shouldRemove
                    set((oldState)=>{
                        return{
                            invoice:{
                                ...oldState.invoice,
                                totalPrice:oldState.invoice.totalPrice - payload.price
                            },
                            items:oldState.items.filter((_item)=>{_item.id !== payload.id})
                        }
                    })
                }
                //decrease
                else{
                    set((oldState)=>{
                        return{
                            invoice:{
                                ...oldState.invoice,
                                totalPrice:oldState.invoice.totalPrice - payload.price
                            },
                            items:oldState.items.map((_item)=>{
                                if(_item.id === payload.id){
                                    return{
                                        ..._item,
                                        quantity:_item.quantity - 1
                                    }
                                }else return _item;
                            })
                        }
                    })
                }
            }
        }
    }
})






// const useBasket= create((set , get)=>{
//     return({
//         items:[],
//         invoice:{
//             totalPrice:0,
//             discount:0,
//             deliveryCost:0,
//         },
//         actions:{
//             addToBasket:(payload)=>{
//                 const alreadyExist = get().items.some((_item)=>{_item.id===payload.id});
//                 //alreadyExist
//                 if(alreadyExist){
//                     set((oldState)=>{
//                         return{
//                             invoice:{
//                                 ...oldState.invoice,
//                                 totalPrice:oldState.invoice.totalPrice + payload.price
//                             },
//                             items: oldState.items.map((_item)=>{
//                                 if(_item.id===payload.id){
//                                     return{
//                                         ..._item,
//                                         quantity: _item.quantity + 1
//                                     }
//                                 }else return _item;
//                             })
                            
//                         }
//                     })
//                 }
                   
                
//                 //set new,
//                 else{
//                     set((oldState)=>{
//                         return{
//                             invoice:{
//                                 ...oldState.invoice,
//                                 totalPrice:oldState.invoice.totalPrice + payload.price
//                             },
//                             items:[
//                                 ...oldState.items,{...payload , quantity:1}
//                             ]
//                         }
//                     })
//                 }
//             },
//             removeFromBasket:(payload)=>{
//                 const shouldRemove=payload.quantity === 1;
//                 if(shouldRemove){
//                     set((oldState)=>{
//                         return{
//                             invoice:{
//                                 ...oldState.invoice,
//                                 totalPrice: oldState.invoice.totalPrice - payload.price
//                             },
//                             items: oldState.items.filter((_item)=>{_item.id !== payload.id})
//                         }
//                     })
//                 }
//                 //should remove
                
//                 //decrease item
//                 else{
//                     set((oldState)=>{
//                         return{
//                             invoice:{
//                                 ...oldState.invoice,
//                                 totalPrice:oldState.invoice.totalPrice - payload.price
//                             },
//                             items: oldState.items.map((_item)=>{
//                                 if(_item.id=== payload.id){
//                                     return{
//                                         ..._item,
//                                         quantity:_item.quantity - 1
//                                     }
//                                 }else return _item
//                             })
//                         }
//                     })
//                 }
//             }
//         }
//     })
// })

