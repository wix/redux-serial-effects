// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Repromise = require("@aantron/repromise/src/js/repromise.js");
var ThrowJSException = require("./throwJSException");
var Middleware$ReduxSerialEffects = require("./Middleware.bs.js");

Repromise.onUnhandledException[0] = (function (exn) {
    return ThrowJSException(exn);
  });

function createMiddleware(param) {
  var match = Middleware$ReduxSerialEffects.create(/* () */0);
  var middleware = match[0];
  var jsMiddleware = function (store) {
    return (function (next) {
        return (function (action) {
            var match = Curry._3(middleware, store, next, action);
            switch (match.tag | 0) {
              case 0 : 
                  return Repromise.Rejectable[/* andThen */4]((function (result) {
                                if (result.tag) {
                                  return Repromise.Rejectable[/* rejected */3](result[0]);
                                } else {
                                  return Repromise.Rejectable[/* resolved */2](undefined);
                                }
                              }), Repromise.Rejectable[/* relax */0](match[0]));
              case 1 : 
                  return ThrowJSException(match[0]);
              case 2 : 
                  return Repromise.Rejectable[/* resolved */2](match[0]);
              
            }
          });
      });
  };
  return {
          middleware: jsMiddleware,
          subscribe: match[1],
          onIdle: match[2]
        };
}

exports.createMiddleware = createMiddleware;
/*  Not a pure module */