mapboxgl.accessToken = 'pk.eyJ1Ijoid2FsbGV2YWx5YSIsImEiOiJjazE4aWRzOHowMWRxM2pvNHlubm1ndHlxIn0.Ijj5Aiv98kB_rBcQqocUQQ';


var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'js/style.json', // stylesheet location
    center: [30.356808959286, 59.931796904510936], // starting position [lng, lat]
    zoom: 16.889898 // starting zoom
});

if(document.documentElement.clientWidth > 767) {
    map.jumpTo({zoom:17.7, center: [30.356608959286, 59.931759045109]});
} else if(document.documentElement.clientWidth > 1279) {
    map.jumpTo({zoom: 16.889898, center: [30.356808959286, 59.931796904510936]});
}
map.on("load", function () {
    /* Image: An image is loaded and added to the map. */
    map.loadImage("img/marker.png", function(error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        map.addLayer({
            id: "markers",
            type: "symbol",
            /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
            source: {
                type: "geojson",
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: "Point",
                                coordinates: [30.356978959286, 59.931852104510936]
                            }
                        }
                    ]
                }
            },
            layout: {
                "icon-image": "custom-marker",
            }
        });
    });
});