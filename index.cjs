// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

const fs = require("fs");
const path = require("path");

const presets = [".golangci.yml", "staticcheck.conf"];
const defaultPreset = ".golangci.yml";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/go-config",
  version: "0.0.7",
  presets,
  defaultPreset,
  content,
};
