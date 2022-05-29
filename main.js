const app = Vue.createApp({ // pass in options object here inside function and we are using
    data() { // shorthand for function (createApp function () {}) === (createApp() {})
        return {
            product: 'Socks',
            description: 'red'
        }
    }
})