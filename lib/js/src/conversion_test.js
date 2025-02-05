// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Conversion = require("./conversion.js");
var Messages_types = require("./messages_types.js");

function log(param) {
  console.log(param.v);
  
}

log(Conversion.convert(/* C */0, Messages_types.default_temperature(undefined, 100, undefined)));

log(Conversion.convert(/* C */0, Messages_types.default_temperature(undefined, undefined, undefined)));

log(Conversion.convert(/* F */1, Messages_types.default_temperature(undefined, undefined, undefined)));

log(Conversion.convert(/* C */0, Messages_types.default_temperature(/* F */1, 32.0, undefined)));

console.log(Conversion.convert_json("{\n    \"desired\": \"F\", \n    \"temperature\": { \"u\" : \"C\", \"v\": 0 }\n  }"));

exports.log = log;
/*  Not a pure module */
