export default {
    name: 'ErrorBoundary',
    data: () => ({
      error: false
    }),
    errorCaptured (err, vm, info) {
        console.log('err', err)
        console.log('vm', vm)
        console.log('info', info)
      this.error = true
    },
    render (h) {
      return this.error ? h('p', 'Alguma coisa saiu errada') : this.$slots.default[0]
    }
  }