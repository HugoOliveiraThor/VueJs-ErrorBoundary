export default {
    name: "app-user-list",
  
    created() {
      this.$store.dispatch(actionsTypes.FETCH_USER_DATA);
    },
  
    errorCaptured(err, vm, info) {
        
      // err: error trace
      // vm: component in which error occured
      // info: Vue specific error information such as lifecycle hooks, events etc.
      // TODO: Perform any custom logic or log to server
      // return false to stop the propagation of errors further to parent or global error handler
    }
  };