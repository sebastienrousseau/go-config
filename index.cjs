const fs = require("fs");
const path = require("path");

const presets = [".golangci.yml","staticcheck.conf"];
const defaultPreset = ".golangci.yml";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/go-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};
