export default class{
    constructor(){

    }

    getMethods(){
        return{
            searchRequested : (params)=>{
                console.log(params)
            }
        }
    }
}