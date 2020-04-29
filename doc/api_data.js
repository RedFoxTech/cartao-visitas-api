define({ "api": [
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
            "field": "businessCard",
            "description": "<p>ID user card.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": "<p>ID user schedule.</p>"
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
    "name": "PutUser",
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
            "field": "businessCard",
            "description": "<p>ID user card.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": "<p>ID user schedule.</p>"
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
