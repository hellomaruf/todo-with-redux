const logger = (state) => (next) => (action) =>{
    console.log('state',state.getState());
    console.log('action',action);
    return next(action)
}
export default logger