import {create} from 'zustand'
import {devtools,persist} from 'zustand/middleware'
import Axios from 'axios'
const initialState={
    users:[],
};

const createStore= (set)=>({
    ...initialState,
    getUsers: async ()=>{
        const {data} =await Axios.get('https://fakestoreapi.com/products')
        // console.log(data)
        set(()=>({users:data}))
    }

}
)

const useStore =create(
    devtools(
        persist(createStore,{
            name:"users"
        })
    )
)

export default useStore