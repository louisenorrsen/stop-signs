

const app = Vue.createApp ({
    data () {
        return {
            location: '',
            forbidden: ''
        }
    },
    methods: {
        generateSign: function() {
            this.forbidden = this.forbidden[0].toUpperCase() + this.forbidden.slice(1)
            this.location = this.location.toLowerCase()
            let sign = document.getElementById('sign')
            let button = document.getElementById('button')
            sign.style.display = 'block'
            button.style.display = 'block'
        },
        resetSign: function() {
            let sign = document.getElementById('sign')
            let button = document.getElementById('button')
            this.location = ''
            this.forbidden = ''
            sign.style.display = 'none'
            button.style.display = 'none'
        }
    }
})

app.component('sign', {
    props: ['location', 'forbidden'],
    template: `<p>Det här är {{ location }}.<br>
                {{ forbidden }} gärna någon annanstans</p>`
})

app.mount('#app')