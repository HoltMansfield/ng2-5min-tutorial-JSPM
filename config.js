System.config({
  // this makes the project root the server root
  baseURL: "/",
  //
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },
  // What is this? Do I want this?
  map: {
    "typescript": "npm:typescript@1.7.5"
  },
  //
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    }
  }
});
