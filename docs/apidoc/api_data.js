define({ "api": [
  {
    "type": "post",
    "url": "/",
    "title": "make a new transaction",
    "version": "1.0.0",
    "name": "Create_Transaction",
    "group": "Transaction",
    "description": "<p>Create a User Account</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "content_creator",
            "description": "<p>The id of the content creator</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "ammount",
            "description": "<p>ammount of money that is being tipped</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "const data = {\n   \"content_creator\": 23,\n   \"ammount\": 200\n}\n\n$http.defaults.headers.common[\"Authorization\"] = token;\n$http.post(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "saved",
            "description": "<p>Boolean to determine if user was saved successfully</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the saved user (id they were saved)</p>"
          },
          {
            "group": "Success 201",
            "type": "List",
            "optional": false,
            "field": "errors",
            "description": "<p>list of errors that were found with the data (if any)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 201 OK\n {\n  \"saved\": true|false,\n  \"id\": \"id\",\n   \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/transactions.js",
    "groupTitle": "Transaction",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n  \"message\": \"Invalid credentials\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/",
    "title": "Delete a Transaction",
    "version": "1.0.0",
    "name": "Delete_Transaction",
    "group": "Transaction",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Delete a User Account</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "const data = {\n}\n\n$http.defaults.headers.common[\"Authorization\"] = token;\n$http.delete(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "Boolean",
            "description": "<p>to determine if transaction was deleted successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 201 OK\n {\n  \"deleted\": true|false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/transactions.js",
    "groupTitle": "Transaction",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n  \"message\": \"Invalid credentials\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/:id/",
    "title": "Get Transaction Details",
    "version": "1.0.0",
    "name": "Get_Details",
    "group": "Transaction",
    "description": "<p>Get Transaction Details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the Transaction</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "const data = {\n}\n\n$http.get(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "transaction",
            "description": "<p>contain transaction details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 201 OK\n {\n  \"transaction\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/transactions.js",
    "groupTitle": "Transaction"
  },
  {
    "type": "post",
    "url": "/",
    "title": "Create a user Account",
    "version": "1.0.0",
    "name": "Create_Account",
    "group": "User",
    "description": "<p>Create a User Account</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user password</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "confirmationPassword",
            "description": "<p>user confirmationPassword</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The Users city</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>The user type</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "const data = {\n   \"name\": \"kimmy wesley\",\n   \"password\": \"password\",\n   \"confirmationPassword\": \"confirmationPassword\",\n   \"email\": \"email@email.com\",\n   \"city\": \"Cairo\",\n   \"type\": \"REGULAR | ADMIN | SUPER_ADMIN\"\n}\n\n$http.post(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "saved",
            "description": "<p>Boolean to determine if user was saved successfully</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the saved user (id they were saved)</p>"
          },
          {
            "group": "Success 201",
            "type": "List",
            "optional": false,
            "field": "errors",
            "description": "<p>list of errors that were found with the data (if any)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 201 OK\n {\n  \"saved\": true|false,\n  \"id\": \"id\",\n   \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n  \"message\": \"Invalid credentials\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/",
    "title": "Delete a User Account",
    "version": "1.0.0",
    "name": "Delete_Account",
    "group": "User",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Delete a User Account</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "const data = {\n}\n\n$http.defaults.headers.common[\"Authorization\"] = token;\n$http.delete(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "Boolean",
            "description": "<p>to determine if user was deleted successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 201 OK\n {\n  \"deleted\": true|false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n  \"message\": \"Invalid credentials\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/:id/",
    "title": "Get a user Details",
    "version": "1.0.0",
    "name": "Get_a_user_Details",
    "group": "User",
    "description": "<p>Get a user Details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the user</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "const data = {\n}\n\n$http.get(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>contain user details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 201 OK\n {\n  \"user\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/:id/",
    "title": "Get a user tips",
    "version": "1.0.0",
    "name": "Get_a_user_tips",
    "group": "User",
    "description": "<p>Get a user tips</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the user</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "const data = {\n}\n\n$http.get(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "tips",
            "description": "<p>contain user tip list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 201 OK\n {\n  \"tips\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/",
    "title": "update a user Account",
    "version": "1.0.0",
    "name": "Update_Account",
    "group": "User",
    "description": "<p>Create a User Account</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The Users city</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The Users email</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>The user type</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "const data = {\n   \"name\": \"kimmy wesley\",\n   \"email\": \"email@email.com\",\n   \"city\": \"Cairo\",\n   \"type\": \"REGULAR | ADMIN | SUPER_ADMIN\"\n}\n\n$http.defaults.headers.common[\"Authorization\"] = token;\n$http.post(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "saved",
            "description": "<p>Boolean to determine if user was saved successfully</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the saved user (id they were saved)</p>"
          },
          {
            "group": "Success 201",
            "type": "List",
            "optional": false,
            "field": "errors",
            "description": "<p>list of errors that were found with the data (if any)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 201 OK\n {\n  \"saved\": true|false,\n  \"id\": \"id\",\n   \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized response:",
          "content": "HTTP 401 Unauthorized\n{\n  \"message\": \"Invalid credentials\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/login",
    "title": "login a user",
    "version": "1.0.0",
    "name": "login_a_user",
    "group": "User",
    "description": "<p>login a user</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "const data = {\n   username: \"ken\", \n   password: \"ken123\"    \n}\n\n$http.defaults.headers.common[\"Authorization\"] = token;\n$http.post(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "String",
            "description": "<p>containing the authentication token</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>containing the user details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 201 OK\n {\n  \"token\": \"tokenstring\",\n  \"user\": {} \n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  }
] });
