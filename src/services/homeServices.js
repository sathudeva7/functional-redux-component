export const homeService = {
    getCardDetails: getCardDetails
};
 
function getCardDetails(){

    let arr = [ {title:'abc',body:'body abc',location:'location abc'},
    {title:'def',body:'body def',location:'location def'}]
    return arr;
}