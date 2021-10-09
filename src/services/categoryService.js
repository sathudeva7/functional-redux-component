export const categoryService = {
    getCategories: getCategories,
    setCategory: setCategory
    
};

function handleResponse(response) {
    
    return response;

}

async function getCategories(){
    return await fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=>handleResponse(json))
}

async function setCategory(category){
    return await fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>handleResponse(json))
}