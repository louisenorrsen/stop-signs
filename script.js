

const app = Vue.createApp ({
    data () {
        return {
            location: '',
            input: '',
            forbidden: ''
        }
    },
    methods: {
        // validateSign: function(firstWord, secondWord) {
        //     let array = ['äta', 'sova']
            


        // },
        generateSign: function() {
          this.forbidden = this.input.split(/\s+/)
          const firstWord = this.forbidden[0]
          const secondWord = this.forbidden[1]

        //   validatSign(firstWord, secondWord)

          if (this.forbidden.length > 1) {
              this.forbidden = `${firstWord[0].toUpperCase() + firstWord.slice(1)} gärna ${secondWord}`

          } else {
              const forbiddenActivity = this.input[0].toUpperCase() + this.input.slice(1)
              this.forbidden = `${forbiddenActivity} gärna`
          }

          this.location = this.location.toLowerCase()
          const sign = document.getElementById("sign")
          const button = document.getElementById("button")
          const submit = document.getElementById("submit")
          sign.style.display = "block"
          sign.style.marginTop ="1em"
          button.style.display = "block"
          submit.style.display = "none"
        },
        resetSign: function() {
            const sign = document.getElementById('sign')
            const button = document.getElementById('button')
            const submit = document.getElementById("submit")
            this.location = ''
            this.input = ['']
            sign.style.display = 'none'
            button.style.display = 'none'
            submit.style.display = "block"
        }
    }
})

app.component('sign', {
    props: ['location', 'forbidden'],
    template: `<p>Det här är {{ location }}.<br>
                {{ forbidden }} någon annanstans.</p>`
})

app.mount('#app')
