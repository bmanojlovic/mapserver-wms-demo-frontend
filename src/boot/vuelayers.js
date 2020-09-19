// import something here
import Vue from 'vue'
import {
  Map,
  ImageLayer,
  TileLayer,
  OsmSource,
  Geoloc,
  FillStyle,
  DrawInteraction,
  VectorLayer,
  VectorTileLayer,
  VectorTileSource,
  VectorSource,
  StrokeStyle,
  StyleBox,
  ModifyInteraction,
  SnapInteraction,
  SelectInteraction,
  ImageWmsSource,
  WmsSource,
  WmtsSource,
  XyzSource
} from 'vuelayers'

import 'vuelayers/lib/style.css' // needs css-loader

Vue.use(Map)
Vue.use(ImageLayer)
Vue.use(TileLayer)
Vue.use(OsmSource)
Vue.use(Geoloc)
Vue.use(FillStyle)
Vue.use(DrawInteraction)
Vue.use(VectorLayer)
Vue.use(VectorTileLayer)
Vue.use(VectorTileSource)
Vue.use(VectorSource)
Vue.use(StrokeStyle)
Vue.use(StyleBox)
Vue.use(ModifyInteraction)
Vue.use(SnapInteraction)
Vue.use(SelectInteraction)
Vue.use(ImageWmsSource)
Vue.use(WmsSource)
Vue.use(WmtsSource)
Vue.use(XyzSource)
