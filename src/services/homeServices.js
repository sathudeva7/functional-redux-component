export const homeService = {
    getCardDetails: getCardDetails,
    setCard:setCard
};

function handleResponse(response) {
    
        return response;
    
}
 
async function getCardDetails(){

    // let arr = [ {title:'abc',body:'body abc',location:'location abc'},
    // {title:'def',body:'body def',location:'location def'},
    // {title:'def',body:'bodyew def',location:'location def'},
    // {title:'def',body:'bodyewqe def',location:'location def'}]
    //console.log(fetch('https://fakestoreapi.com/products'))
    
    return await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>handleResponse(json))

     
    //return arr;

}

async function setCard(obj){
    console.log(obj)
    return await fetch(`https://fakestoreapi.com/products/${obj.id}`)
    .then(res=>res.json())
    .then(json=>handleResponse(json))
}