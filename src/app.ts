import { trim } from "./util";
import { parseDocument } from  "htmlparser2";
import { Element, Document } from  "domhandler";
import * as CSSselect from "css-select";
import render from "dom-serializer";

const doc: Document = parseDocument(`<!DOCTYPE html>
<html>
<head></head>
<body>
  <div>a</div>
  <div>b</div>
  <div>c</div>
</body>
</html>
`);
console.log(render(CSSselect.selectAll("div", doc)));
console.log(trim("  hello world   "));
