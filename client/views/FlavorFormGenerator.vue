<template>
    <div class="container">
        <div class="starter-template">
            <h1>Form</h1>
            <div class="row">
                <div class="col-xs-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Buat Nama Baru">
                    </div>

                    <h3>FLAVOR GENERATED WORDS : </h3>
                    <button type="submit" class="btn btn-primary" @click="generate">Generate</button>

                </div>
            </div>
            <p style="margin-top:30px;">
            <button type="submit" class="btn btn-primary" @click="submit">Selanjutnya</button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    methods: {
        submit() {
            this.$router.push({
                path: '/canvas'
            })
        },
        generate(){
            console.log('generated');
        }
    },
    mounted() {
        console.log('views/FlavorForm.vue')
    }
}
</script>
