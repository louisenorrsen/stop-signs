const app = Vue.createApp ({
    data () {
        return {
            location: 'ett stall',
            forbidden: 'klättra'
        }
    },
    methods: {
        generateSign: function() {
            let sign = document.getElementById('sign')
            sign.style.display = 'block'
        }
    }
})

app.component('sign', {
    props: ['location', 'forbidden'],
    template: `<p>Det här är {{ location }}.<br>
                {{ forbidden }} gärna någon annanstans</p>`
})

app.mount('#app')