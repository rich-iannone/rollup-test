import { trim } from "./util";
import { Parser, parseDocument, DomHandler, DomUtils, DomHandlerOptions } from  "htmlparser2"

parseDocument("");
console.log(trim("  hello world   "));
