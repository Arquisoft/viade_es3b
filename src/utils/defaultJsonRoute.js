
export default function getJsonRoute(name,description,author,points,media,waypoints) {
	if(name === undefined) name = "";
	if(description === undefined) description = "";
	if(author === undefined) author = "";
	if(points === undefined) points = [];
	if(media === undefined) media = [];
	if(waypoints === undefined) waypoints = [];

	var obj = ({
			"@context": {
				"@version": 1.1,
				"comments": {
					"@id": "viade:comments",
					"@type": "@id"
				},
				"description": {
					"@id": "schema:description",
					"@type": "xsd:string"
				},
				"media": {
					"@container": "@list",
					"@id": "viade:media"
				},
				"name": {
					"@id": "schema:name",
					"@type": "xsd:string"
				},
				"points": {
					"@container": "@list",
					"@id": "viade:points"
				},
				"latitude": {
					"@id": "schema:latitude",
					"@type": "xsd:double"
				},
				"longitude": {
					"@id": "schema:longitude",
					"@type": "xsd:double"
				},
				"elevation": {
					"@id": "schema:elevation",
					"@type": "xsd:double"
				},
				"author":{
					"@id": "schema:author",
					"@type": "@id"
				},
				"rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
				"rdfs": "http://www.w3.org/2000/01/rdf-schema#",
				"schema": "http://schema.org/",
				"viade": "http://arquisoft.github.io/viadeSpec/",
				"xsd": "http://www.w3.org/2001/XMLSchema#"
			},
			"name": name,
			"author": author,
			"description": description,
			"comments": "",
			"media": [],
			"waypoints" : [],
			"points": []
		
	});

	points.forEach(element => {
		let lat = element[0];
		let lng = element[1];
		
		obj.points.push({
			"latitude": lat,
            "longitude": lng,
            "elevation": 0
		})
	});

	media.forEach(element => {
		obj.media.push({
			"@id": element
		})
	});

	waypoints.forEach(element => {
		let name = element.name;
		let description = element.description;
		let lat = element.point.latitude;
		let lng = element.point.longitude;
		obj.waypoints.push({
			"name": name,
            "description": description,
            "latitude": lat,
            "longitude": lng,
            "elevation": 0
		})
	});

	return obj;

}

