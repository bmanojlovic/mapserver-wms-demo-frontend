import { boot } from "quasar/wrappers";
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/dist/vue3-openlayers.css";

export default boot(async ({ app }) => {
  app.use(OpenLayersMap);
});

export { OpenLayersMap };
