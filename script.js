

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

          if (this.forbidden.length > 1) {
              this.forbidden = `${firstWord[0].toUpperCase() + firstWord.slice(1)} gärna ${this.forbidden[1]}`

          } else {
              const forbiddenActivity = this.input[0].toUpperCase() + this.input.slice(1)
              this.forbidden = `${forbiddenActivity} gärna`
          }

          this.location = this.location.toLowerCase()
          const sign = document.getElementById("sign")
          const button = document.getElementById("button")
          sign.style.display = "block"
          button.style.display = "block"
        },
        resetSign: function() {
            const sign = document.getElementById('sign')
            const button = document.getElementById('button')
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
                {{ forbidden }} någon annanstans.</p>`
})

app.mount('#app')
