<template>
    <div class="container">
        <div class="starter-template">
            <h1>Form</h1>
            <div class="row">
                <div class="col-xs-12">
                    <div class="form-inline">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Buat Nama Baru">
                        </div>
                        <button type="submit" class="btn btn-primary" @click="submit">Selanjutnya</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    methods: {
        submit() {
            this.$router.push({path:'/canvas'})
        }
    },
    mounted() {
        console.log('views/FlavorForm.vue')
    }
}
</script>
