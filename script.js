

const app = Vue.createApp ({
    data () {
        return {
            location: '',
            input: '',
            forbidden: ''
        }
    },
    methods: {
        generateSign: function() {
            this.forbidden = this.input.split(/\s+/)
            const firstWord = this.forbidden[0]
            const secondWord = this.forbidden[1]

            if (this.forbidden.length > 1) {
                this.forbidden = `${firstWord[0].toUpperCase() + firstWord.slice(1)} gärna ${secondWord}`

            } else {
                const forbiddenActivity = this.input[0].toUpperCase() + this.input.slice(1)
                this.forbidden = `${forbiddenActivity} gärna`
            }

            this.location = this.location.toLowerCase()
            const sign = document.getElementById("sign")
            const button = document.getElementById("button")
            const random = document.getElementById('random')
            const submit = document.getElementById("submit")
            sign.style.display = 'block'
            sign.style.marginTop = '1em'
            button.style.display = 'block'
            submit.style.display = 'none'
            random.style.display = 'none'
        },
        generateRandomSign: function() {
            const randomPlaces = ['en hall', 'en förskola', 'en skola', 'ett hus', 'en skog', 'ett bibliotek', 'en lekplats']
            const randomForbiddenActivity = ['spring', 'skrik', 'ha roligt', 'hoppa', 'skratta', 'sola', 'var tjurig']
            const randomPlacesNumber = Math.floor(Math.random() * randomPlaces.length)
            const randomActivityNumber = Math.floor(Math.random() * randomForbiddenActivity.length)

            this.location = randomPlaces[randomPlacesNumber]
            this.input = randomForbiddenActivity[randomActivityNumber]
            this.generateSign()
        },
        resetSign: function() {
            const sign = document.getElementById('sign')
            const button = document.getElementById('button')
            const submit = document.getElementById("submit")
            const random = document.getElementById('random')
            this.location = ''
            this.input = ['']
            sign.style.display = 'none'
            button.style.display = 'none'
            submit.style.display = 'block'
            random.style.display = 'block'
        }
    }
})

app.component('sign', {
    props: ['location', 'forbidden'],
    template: `<p>Det här är {{ location }}.<br>
                {{ forbidden }} någon annanstans.</p>`
})

app.mount('#app')
