module.exports = {
  swagger: "2.0",
  info: {
    title: "JiosaavnAPI",
    description: "Unofficial JioSaavn API Written in Javascript",
    version: "3.0.0",
  },
  host: process.env.APP_URL?.split("://")[1] || "localhost:3000",
  basePath: "/",
  license: {
    name: "Apache 2.0",
    url: "https://github.com/tuhinpal/JiosaavnAPI/blob/v3/LICENSE",
  },
  tags: [
    {
      name: "Song",
      description: "Get song related information like search or fetch a song",
    },
    {
      name: "Album",
      description:
        "Get album related information like album search or fetch songs",
    },
  ],
  schemes: [process.env.APP_URL?.split("://")[0] || "http"],
  consumes: [],
  produces: [],
  paths: {
    "/search": {
      get: {
        tags: ["Song"],
        description: "Search song from query",
        parameters: [
          {
            name: "query",
            in: "query",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description: "Not Found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/song": {
      get: {
        tags: ["Song"],
        description: "Get song detail from id",
        parameters: [
          {
            name: "id",
            in: "query",
            type: "string",
          },
          {
            name: "lyrics",
            in: "query",
            type: "boolean",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description: "Not Found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/link": {
      get: {
        tags: ["Song"],
        description: "Get song detail from Jiosaavn Link",
        parameters: [
          {
            name: "link",
            in: "query",
            type: "string",
          },
          {
            name: "lyrics",
            in: "query",
            type: "boolean",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description: "Not Found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/lyrics": {
      get: {
        tags: ["Song"],
        description: "Get lyrics of a song (If Available)",
        parameters: [
          {
            name: "id",
            in: "query",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description: "Not Found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/albumsearch": {
      get: {
        tags: ["Album"],
        description: "Search albums from query",
        parameters: [
          {
            name: "query",
            in: "query",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description: "Not Found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/album": {
      get: {
        tags: ["Album"],
        description: "Get Album information from Album ID",
        parameters: [
          {
            name: "id",
            in: "query",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description: "Not Found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
  },
  definitions: {},
};
