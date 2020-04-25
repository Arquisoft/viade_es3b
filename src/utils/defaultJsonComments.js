
export default function getJsonComments() {
	var obj = ({
		"@context": {
			"@version": 1.1,
			"comments": {
				"@container": "@list",
				"@id": "viade:comments"
			},
			"dateCreated": {
				"@id": "viade:dateCreated",
				"@type": "xsd:date"
			},
			"text": {
				"@id": "viade:text",
				"@type": "xsd:string"
			},
			"viade": "http://arquisoft.github.io/viadeSpec/",
			"xsd": "http://www.w3.org/2001/XMLSchema#"
		}, "comments": []
	});

	return JSON.stringify(obj);

}

