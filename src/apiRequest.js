const apiRequest = async(url='', optionobj=null, errMsg=null) =>{
    try {
        const response = await fetch(url,optionobj);
        if(!response.ok) throw Error("Please Reload the App");
    } catch (error) {
        errMsg = error.message;
    } finally {
        return errMsg;

    }
}
export default apiRequest;