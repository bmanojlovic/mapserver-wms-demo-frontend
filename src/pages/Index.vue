<template>
  <q-page padding>
    <vl-map data-projection="EPSG:4326" :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height: 800px">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-layer-tile id="cache-wms">
        <vl-source-xyz
          attributions=''
          url="/mapcache/gmaps/countries@GoogleMapsCompatible/{z}/{x}/{y}.png"
        >
        </vl-source-xyz>
      </vl-layer-tile>

    </vl-map>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      url: '/wms',
      url_wmts: '/wms?mode=tile',
      extParams: { TILED: true },
      serverType: 'mapserver',
      matrixSet: 'EPSG:4326',
      layers: 'heatmap',
      zoom: 9,
      center: [20.544434, 44.268805],
      rotation: 0,
      styleName: 'default',
      format: 'image/png',
      layerName: 'opstina',
      attribution: ''
    }
  }
}
</script>
