# prime-airline-api-front

## Endpoints

```json
{
  "swagger": "2.0",
  "info": {
    "title": "My API",
    "description": "Description",
    "version": "1.0.0"
  },
  "host": "localhost:3000",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": {
    "/book": {
      "post": {
        "description": "",
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/booking-history": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      }
    },
    "/cancel-book": {
      "post": {
        "description": "",
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/flights": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "currency",
            "in": "query",
            "type": "string"
          },
          {
            "name": "date",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      }
    },
    "/flights/currencies": {
      "get": {
        "description": "",
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/me": {
      "get": {
        "description": "",
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/login": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "email": {
                  "example": "any"
                },
                "password": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      }
    },
    "/signin": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "name": {
                  "example": "any"
                },
                "email": {
                  "example": "any"
                },
                "password": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/logout": {
      "post": {
        "description": "",
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    }
  }
}

```