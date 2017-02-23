<template>
    <div class="container">
        <div class="starter-template">
            <h1>Canvas</h1>
            <div class="row">
                <div class="col-sm-8">
                    <div id="canvas"></div>
                </div>

                <div class="col-sm-4">
                    <h4>Color</h4>
                    <button type="button" class="btn btn-default btn-xs" @click="loadImage('/img/bg-1.jpg')">1</button>
                    <button type="button" class="btn btn-default btn-xs" @click="loadImage('/img/bg-2.jpg')">2</button>
                    <h4>Stiker</h4>
                    <button type="button" class="btn btn-default btn-xs" @click="loadStiker('/img/sticker-1.jpg')">stiker 1</button>
                    <button type="button" class="btn btn-default btn-xs" @click="loadStiker('/img/sticker-2.png')">stiker 2</button>
                    <h4>Ingredients</h4>
                    <h4>Pattern</h4>

                    <router-link to="/flavorform" class="btn btn-default">prev</router-link>
                    <router-link to="/FlavorDescription" class="btn btn-default">next</router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Konva from 'konva';
export default {
    data: function() {
        return {
            flavor: 'test fla',
            stage: null,
            layer: null,
            img: null,
            sticker: null,
            ingredients: null,
            pattern: null,
        }
    },
    components: {},
    mounted() {
        this.stage = new Konva.Stage({
            container: 'canvas',
            width: 400,
            height: 400
        });
        this.layer = new Konva.Layer();
        this.img = new Image();
        var vm = this;
        this.img.onload = function() {
            var yoda = new Konva.Image({
                x: 0,
                y: 0,
                image: vm.img,
                width: 400,
                height: 400
            });
            // add the shape to the layer
            vm.layer.add(yoda);
            // add the layer to the stage
            vm.stage.add(vm.layer);
        };
        this.img.src = '/img/bg-1.jpg';

        this.sticker = new Image();
        this.sticker.onload = function() {
            var sticker = new Konva.Image({
                x: 0,
                y: 30,
                image: vm.sticker,
                width: 100,
                height: 100
            });
            vm.layer.add(sticker)
            vm.stage.add(vm.layer)
        };

    },
    methods: {
        loadImage(src) {
            console.log(src);
            this.img.src = src;
        },
        loadStiker(src) {
            this.sticker.src = src;
        },
        kimage() {},
    }
}
</script>
<style>
#canvas {
    border: solid 1px #ccc;
}
</style>
