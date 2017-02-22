<template>
    <div class="container">
        <div class="starter-template">
            <h1>BioData</h1>
            <div class="row">
                <div class="col-xs-8">[IMAGE]</div>
                <div class="col-xs-4">

                    <div class="form-group">
                        <label for="">Nama Lengkap</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Nomor Handphone</label>
                        <input type="text" class="form-control">
                    </div>
                    <button class="btn btn-default" @click="submit">register now</button>
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
            this.$router.push({path:'/Success'})
        }
    },
    mounted() {
        console.log('views/Biodata.vue')
    }
}
</script>
