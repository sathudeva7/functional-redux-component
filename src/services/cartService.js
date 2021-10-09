export const cartService = {
    addCart:addCart
};

function handleResponse(response) {
    
    return response;

}

async function addCart(obj) {
    return await fetch('https://fakestoreapi.com/carts',{
        method:"POST",
        body:JSON.stringify(
            obj
        )
    })
        .then(res=>res.json())
        .then(json=>handleResponse(json))
}