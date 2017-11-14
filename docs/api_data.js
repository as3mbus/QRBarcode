define({ "api": [
  {
    "type": "post",
    "url": "api/outlet/create",
    "title": "Create",
    "group": "Outlet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"outlet A\",\n    \"promo\": \"promo lorem ipsume\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>nama outlet</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "promo",
            "description": "<p>promo outlet yang ditawarkan</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "outlet",
            "description": "<p>array dari outlet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"OK\",\n    \"outlet\": {\n            \"id\": 3,\n            \"name\": \"outlet C\",\n            \"promo\": \"promo gocap\",\n            \"updatedAt\": \"2017-11-10T18:23:07.128Z\",\n            \"createdAt\": \"2017-11-10T18:23:07.128Z\"\n          }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  outlet: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/outlet.js",
    "groupTitle": "Outlet",
    "name": "PostApiOutletCreate"
  },
  {
    "type": "post",
    "url": "api/outletcode/create",
    "title": "Create",
    "group": "Outlet_Code",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"barcode\": \"6VI\",\n    \"outletId\": 3\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "barcode",
            "description": "<p>barcode vocher</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "outletId",
            "description": "<p>id outlet</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "outletCode",
            "description": "<p>array dari outletCode</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n \"success\": true,\n     \"status\": \"OK\",\n     \"outletCode\": {\n           \"id\": 69,\n           \"codeId\": 7,\n           \"outletId\": 3,\n           \"updatedAt\": \"2017-11-10T21:15:44.013Z\",\n           \"createdAt\": \"2017-11-10T21:15:44.013Z\"\n         }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  outletCode: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/outletCode.js",
    "groupTitle": "Outlet_Code",
    "name": "PostApiOutletcodeCreate"
  },
  {
    "type": "post",
    "url": "api/vochercode/activated",
    "title": "Activated",
    "group": "VocherCode",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"barcode\": \"NBQ\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "barcode",
            "description": "<p>barcode yang akan di aktifasi</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "vocherCode",
            "description": "<p>array dari vocherCode</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n     \"success\": true,\n     \"status\": \"OK\",\n     \"vocherCode\": {\n             \"id\": 12,\n             \"activated\": true,\n             \"expiryDate\": \"2017-11-08T10:17:29.000Z\",\n             \"outletOrigin\": 1,\n             \"barcode\": \"NBQ\",\n             \"createdAt\": \"2017-11-08T18:45:55.974Z\",\n             \"updatedAt\": \"2017-11-10T21:23:47.747Z\"\n         },\n     \"massage\": \"Vocher was activated!!!\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  vocherCode: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/vocherCode.js",
    "groupTitle": "VocherCode",
    "name": "PostApiVochercodeActivated"
  },
  {
    "type": "post",
    "url": "api/vochercode/create",
    "title": "Create",
    "group": "VocherCode",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"expiryDate\": \"2017-11-08 17:17:29\",\n    \"outletOrigin\": 1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "expiryDate",
            "description": "<p>tanggal kadaluarsa</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "outletOrigin",
            "description": "<p>asal vocher</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "vocherCode",
            "description": "<p>array dari vocherCode</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"status\": \"OK\",\n   \"vocherCode\": {\n             \"id\": 15,\n             \"activated\": false,\n             \"expiryDate\": \"2017-11-08T10:17:29.000Z\",\n             \"outletOrigin\": 1,\n             \"barcode\": \"IG9\",\n             \"updatedAt\": \"2017-11-10T21:18:54.535Z\",\n             \"createdAt\": \"2017-11-10T21:18:54.535Z\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  vocherCode: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/vocherCode.js",
    "groupTitle": "VocherCode",
    "name": "PostApiVochercodeCreate"
  }
] });
