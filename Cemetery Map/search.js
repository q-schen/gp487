var searchControl = new L.Control.Search({layer: myGeoJSONLayers , propertyName: 'properties.Family_name', circleLocation:false});

searchControl.on('search_locationfound', 
	function(e) {
		e.layer.setStyle({fillColor: 'white', color: 'white', fillOpacity: 0.5});
		if(e.layer._popup)
			e.layer.openPopup();
	}).on('search_collapsed', function(e) {
		myGeoJSONLayers.eachLayer(function(layer) {
			myGeoJSONLayers.resetStyle(layer);
			});
	});
	
map.addControl( searchControl );  //inizialize search control