<template>
  <q-page class="flex flex-center">
    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      style="width: 100%; height: 100vh; margin-top: -50px; padding-top: 50px"
    >
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
      />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
      <ol-tile-layer id="cache-wms">
        <ol-source-xyz :url="mapservurl" />
      </ol-tile-layer>
    </ol-map>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "IndexPage",
  setup() {
    const center = ref([21, 43.5]);
    const projection = ref("EPSG:4326");
    const zoom = ref(8);
    const rotation = ref(0);
    const mapservurl = ref(
      "/wms?mode=tile&tilemode=gmap&layers=countries&tile={x}+{y}+{z}"
    );
    return {
      center,
      projection,
      zoom,
      rotation,
      mapservurl,
    };
  },
});
</script>
