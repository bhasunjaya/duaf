<template>
    <div class="container">
        <div class="starter-template">
            <h1>Success</h1>
            <div class="row">
                <div class="col-xs-12">
                    <router-link to='/FlavorForm' class="btn btn-default">Create Another Flavor</router-link>
                    or
                    <router-link to="/FlavorFormGenerator" type="button" class="btn btn-default">Flavor Geneator</router-link>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    methods: {},
    mounted() {
    	console.log('views/Success.vue')
    }
}
</script>
