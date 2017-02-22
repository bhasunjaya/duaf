<template>
    <div class="container">
        <div class="starter-template">
            <h1>Canvas</h1>
            <div class="row">
                <div class="col-xs-8">[IMAGE]</div>
                <div class="col-xs-4">
                    <label>
                        Tell us About Your Flavor
                    </label>
                    <div class="form-group">
                    <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <router-link to="/Canvas" class="btn btn-default">prev</router-link>
                    <button class="btn btn-default" @click="submit">next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    methods: {
        submit(){
            console.log('submit');
            this.$router.push({path:'/Biodata'})
        }
    },
    mounted() {
        console.log('views/Canvas.vue')
    }
}
</script>
