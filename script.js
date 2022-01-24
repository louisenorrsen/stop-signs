

const app = Vue.createApp ({
    data () {
        return {
            location: '',
            input: '',
            forbidden: ['']
        }
    },
    methods: {
        generateSign: function() {
            // this.forbidden.push(this.input.split(' '))

            this.forbidden = `${this.input} gärna`

            // if (this.forbidden.length === 2) {
            //     this.forbidden = `${this.forbidden[0]} gärna ${this.forbidden[1]}`
            // } else {
            //     let forbiddenActivity = this.input[0].toUpperCase() + this.input.slice(1)
            //     this.forbidden = `${forbiddenActivity} gärna`
            // }
           
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
            this.input = ['']
            sign.style.display = 'none'
            button.style.display = 'none'
        }
    }
})

app.component('sign', {
    props: ['location', 'forbidden'],
    template: `<p>Det här är {{ location }}.<br>
                {{ forbidden }} någon annanstans</p>`
})

app.mount('#app')