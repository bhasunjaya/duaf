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
                    <button type="button" class="btn btn-default btn-xs" @click="loadImage">red</button>
                    <h4>Stiker</h4>
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
            flavor: 'test fla'
        }
    },
    components: {},
    mounted() {
        var width = document.getElementById("canvas").offsetWidth;
        console.log('views/Canvas.vue')
        console.log(width);
        var stage = new Konva.Stage({
            container: 'canvas',
            width: width,
            height: width
        });
        var layer = new Konva.Layer();
        var rect = new Konva.Rect({
            x: 50,
            y: 50,
            width: 100,
            height: 50,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 4
        });
        var simpleText = new Konva.Text({
            x: stage.getWidth() / 2,
            y: 15,
            text: this.flavor,
            fontSize: 30,
            fontFamily: 'Calibri',
            fill: 'green'
        });
        var imageObj = new Image();
        imageObj.onload = function() {
            var yoda = new Konva.Image({
                x: 50,
                y: 50,
                image: imageObj,
                width: 106,
                height: 118
            });
            // add the shape to the layer
            layer.add(yoda);
            // add the layer to the stage
            stage.add(layer);
        }
        imageObj.src = '/img/yoda.jpg';
        // add the shape to the layer
        // layer.add(rect);
        // layer.add(simpleText);
        // layer.add(image);
        // // add the layer to the stage
        // stage.add(layer);
    },
    methods: {
        loadImage() {},
        kimage() {},
    }
}
</script>
<style>
#canvas {
    border: solid 1px #ccc;
}
</style>
