define({ "api": [
  {
    "type": "get",
    "url": "/fishtanks/:id",
    "title": "Request Fishtank data",
    "name": "GetFishtank",
    "group": "Fishtanks",
    "description": "<p>This URL displays data about a given fishtank</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Number identifying the fishtank</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 1",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/index.js",
    "groupTitle": "Fishtanks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/fishtanks/:id",
    "title": "Edit Fishtank data",
    "name": "PatchFishtank",
    "group": "Fishtanks",
    "description": "<p>This URL receives edition requests for a given fishtank</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Number identifying the fishtank</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "type: 1",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/index.js",
    "groupTitle": "Fishtanks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/fishtanks",
    "title": "Create Fishtank",
    "name": "PostFishtanks",
    "group": "Fishtanks",
    "description": "<p>This URL receives new fishtank declarations</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/index.js",
    "groupTitle": "Fishtanks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks"
      }
    ]
  }
] });
