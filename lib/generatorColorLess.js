const fs = require("fs");
const path = require("path");

const colors = [
  "primary-color",
  "blue-6",
  "purple-6",
  "cyan-6",
  "green-6",
  "magenta-6",
  "pink-6",
  "red-6",
  "orange-6",
  "yellow-6",
  "volcano-6",
  "geekblue-6",
  "lime-6",
  "gold-6"
];
const tintColors = ["@primary-color"];
const fadeColors = [
  "#00230b",
  "@black",
  "@white",
  "#000",
  "#fff",
  "@primary-color"
];
const outUrl = path.join(__dirname, "../public/lessColor.less");

module.exports = function() {
  let lessContent = "";
  // colorPalette
  for (let i = 0; i < colors.length; i++) {
    for (let j = 1; j < 10; j++) {
      lessContent += `
.colorPalette-${colors[i]}-${j} {
  background-color: color(~\`colorPalette("@{${colors[i]}}", ${j}) \`);
}
      `;
    }
  }

  // tint
  for (let i = 0; i < tintColors.length; i++) {
    for (let j = 5; j <= 100; ) {
      j += 5;
      lessContent += `
.tint-${tintColors[i].substring(1, tintColors[i].length)}-${j} {
  background-color: tint(${tintColors[i]}, ${j}%);
}
      `;
    }
  }

  // fade
  for (let i = 0; i < fadeColors.length; i++) {
    for (let j = 5; j <= 100; ) {
      j += 5;
      lessContent += `
.fade-${fadeColors[i].substring(1, fadeColors[i].length)}-${j} {
  background-color: fade(${fadeColors[i]}, ${j}%);
}
      `;
    }
  }

  const lessTmp = `
@import "./lib/style/themes/default";
@import "./lib/style/mixins/index";
  
${lessContent}
  `;

  fs.writeFileSync(outUrl, lessTmp);
};
