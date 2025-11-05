import fs from "fs";
const js = fs.readFileSync("dist/lovecookies.umd.js", "utf8");
const css = fs.readFileSync("dist/sdk.css", "utf8");
const inline = `(()=>{const s=document.createElement('style');s.textContent=\`${css}\`;document.head.appendChild(s);})();`;
fs.writeFileSync("dist/lovecookies.umd.js", inline + "\n" + js);
