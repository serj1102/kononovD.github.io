$(document).ready(function(){$(".owl-carousel").owlCarousel({loop:!0,margin:15,items:2,smartSpeed:500,center:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},992:{items:2}}}),map=new OpenLayers.Map("map"),map.addLayer(new OpenLayers.Layer.OSM);var e=new OpenLayers.LonLat(30.52431106567383,50.44985322241888).transform(new OpenLayers.Projection("EPSG:4326"),map.getProjectionObject()),a=new OpenLayers.Layer.Markers("Markers");map.addLayer(a),a.addMarker(new OpenLayers.Marker(e)),map.setCenter(e,12)});
//# sourceMappingURL=main.js.map