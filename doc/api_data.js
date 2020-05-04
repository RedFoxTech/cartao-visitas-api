define({ "api": [
  {
    "type": "delete",
    "url": "/business-card/:id",
    "title": "Request card information.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>bussiness card unique ID.</p>"
          }
        ]
      }
    },
    "name": "DeleteBusinessCard",
    "group": "BusinessCard",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "msg",
            "description": "<p>sucessfully deleted business card.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "msg",
            "description": "<p>Error deleted business card.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/card.js",
    "groupTitle": "BusinessCard"
  },
  {
    "type": "get",
    "url": "/business-card/:id",
    "title": "Request card information.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>bussiness card unique ID</p>"
          }
        ]
      }
    },
    "name": "GetBusinessCard",
    "group": "BusinessCard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "arrumarrrrrrrrrrrr",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "error",
            "description": "<p>Error loading business-card.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/card.js",
    "groupTitle": "BusinessCard"
  },
  {
    "type": "put",
    "url": "/business-card/:id",
    "title": "Update card information.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>bussiness card unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>array tags unique ID.</p>"
          }
        ]
      }
    },
    "name": "PutBusinessCard",
    "group": "BusinessCard",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "msg",
            "description": "<p>sucessfully updated business card.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "error",
            "description": "<p>Error updated business card.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/card.js",
    "groupTitle": "BusinessCard"
  },
  {
    "type": "get",
    "url": "/google",
    "title": "Login with google",
    "name": "GetLogin",
    "group": "Login",
    "version": "0.0.0",
    "filename": "src/routes/session.js",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "/schedule",
    "title": "Request logged user schedule.",
    "name": "GetSchedule",
    "group": "Schedule",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cards",
            "description": "<p>logged user cards.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID schedule.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>logged user id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_v",
            "description": "<p>version key.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "error",
            "description": "<p>Error loading schedule.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/schedule.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "get",
    "url": "/schedule/export",
    "title": "export schedule for email.",
    "name": "GetScheduleExport",
    "group": "Schedule",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "msg",
            "description": "<p>email sent</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "error",
            "description": "<p>Error exporting schedule.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/schedule.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "delete",
    "url": "/tags/:id",
    "title": "Delete logged user tag.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Tags unique ID.</p>"
          }
        ]
      }
    },
    "name": "DeleteTag",
    "group": "Tag",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "msg",
            "description": "<p>sucessfully deleted tag.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "error",
            "description": "<p>Error deleting tag.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/tags.js",
    "groupTitle": "Tag"
  },
  {
    "type": "get",
    "url": "/tags",
    "title": "Request logged user tags",
    "name": "GetTags",
    "group": "Tag",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Tag ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tag name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID logged in.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<p>version key.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "error",
            "description": "<p>Error loading logged user tags.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/tags.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/tags",
    "title": "Register logged-in user tags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>tags name</p>"
          }
        ]
      }
    },
    "name": "PostTag",
    "group": "Tag",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "msg",
            "description": "<p>successfully created tag.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "error",
            "description": "<p>Error creating tag.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/tags.js",
    "groupTitle": "Tag"
  },
  {
    "type": "put",
    "url": "/tags/:id",
    "title": "Update logged-in user tags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Tags unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tags name.</p>"
          }
        ]
      }
    },
    "name": "PutTag",
    "group": "Tag",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "msg",
            "description": "<p>successfully updated tag.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "error",
            "description": "<p>Error updating tag.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/tags.js",
    "groupTitle": "Tag"
  },
  {
    "type": "delete",
    "url": "/users",
    "title": "Delete logged user",
    "name": "DeleteUser",
    "group": "User",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "UserDeletedSucess",
            "description": "<p>The logged in user was deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "error",
            "description": "<p>Error deleting user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Request logged user information",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color card.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "googleId",
            "description": "<p>Google user ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<p>version key.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>perfil image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>card logo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "office",
            "description": "<p>user office.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>user phone number.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "error",
            "description": "<p>Error loading logged user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users",
    "title": "Update logged user information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color card.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>perfil image.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>card logo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "office",
            "description": "<p>user office.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>user phone number.</p>"
          }
        ]
      }
    },
    "name": "PutUser",
    "group": "User",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "msg",
            "description": "<p>sucessfully updated user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "error",
            "description": "<p>Error updating user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/user.js",
    "groupTitle": "User"
  }
] });
