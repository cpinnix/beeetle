"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var ramda = require("ramda");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }

    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var currentObject = null;
var currentId = 0;
var setCurrentObject = function setCurrentObject(newObject) {
  currentObject = newObject;
};
var getCurrentObject = function getCurrentObject() {
  return currentObject;
};
var getCurrentObjectId = function getCurrentObjectId() {
  var cid = currentId;
  currentId = currentId + 1;
  return cid;
};
var clear = function clear() {
  currentObject = null;
  currentId = 0;
};

var EFFECTS = Symbol("beeetle.effects");
var STATES = Symbol("beeetle.states");

var commit = ramda.when(
  function(element) {
    return element.component.connected;
  },
  function(element) {
    setCurrentObject(element);
    element.component.render(element, element.component.props);
    clear();
    ramda.when(
      function(component) {
        return component[EFFECTS];
      },
      function(component) {
        return component[EFFECTS].forEach(function(_ref) {
          var effect = _ref.effect;
          return effect();
        });
      }
    )(element.component);
  }
);

var connectProps = ramda.when(
  function(element) {
    return element.component.props;
  },
  function(element) {
    return Object.keys(element.component.props).map(function(key) {
      return Object.defineProperty(element, key, {
        get: function get() {
          return element.component.props[key];
        },
        set: function set(val) {
          element.component = _objectSpread({}, element.component, {
            props: _objectSpread(
              {},
              element.component.props,
              _defineProperty({}, key, val)
            )
          });
          commit(element);
        }
      });
    });
  }
);
var constructor = function constructor(element, component) {
  element.component = _objectSpread({}, component);
  connectProps(element);
};

var connected = function connected(element) {
  element.component.connected = true;
  commit(element);
};

var disconnected = ramda.pipe(
  function(element) {
    return element.component;
  },
  ramda.when(
    function(component) {
      return component[EFFECTS];
    },
    function(component) {
      return component[EFFECTS].forEach(
        ramda.when(
          function(hook) {
            return hook.clean;
          },
          function(hook) {
            return hook.clean();
          }
        )
      );
    }
  )
);

var create = function create(component) {
  var Base =
    /*#__PURE__*/
    (function(_HTMLElement) {
      _inherits(Base, _HTMLElement);

      function Base() {
        var _this;

        _classCallCheck(this, Base);

        _this = _possibleConstructorReturn(
          this,
          _getPrototypeOf(Base).call(this)
        );
        constructor(
          _assertThisInitialized(_assertThisInitialized(_this)),
          component
        );
        return _this;
      }

      _createClass(Base, [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            connected(this);
          }
        },
        {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            disconnected(this);
          }
        }
      ]);

      return Base;
    })(_wrapNativeSuper(HTMLElement));

  customElements.define(component.name, Base);
};

var useState = function useState(initialState) {
  var id = getCurrentObjectId();
  var element = getCurrentObject();
  element.component = ramda.unless(
    function(component) {
      return component[STATES];
    },
    function(component) {
      return _objectSpread({}, component, _defineProperty({}, STATES, []));
    }
  )(element.component);
  element.component[STATES][id] = ramda.unless(
    function(hook) {
      return hook;
    },
    function() {
      var hook = {
        state: initialState,
        updater: function updater(newState) {
          hook.state = newState;
          commit(element);
        }
      };
      return hook;
    }
  )(element.component[STATES][id]);
  var _element$component$ST = element.component[STATES][id],
    state = _element$component$ST.state,
    updater = _element$component$ST.updater;
  return [state, updater];
};

var useReducer = function useReducer(reducer, initialState) {
  var id = getCurrentObjectId();
  var element = getCurrentObject();
  element.component = ramda.unless(
    function(component) {
      return component[STATES];
    },
    function(component) {
      return _objectSpread({}, component, _defineProperty({}, STATES, []));
    }
  )(element.component);
  element.component[STATES][id] = ramda.unless(
    function(hook) {
      return hook;
    },
    function() {
      var hook = {
        state: initialState,
        dispatch: function dispatch(action) {
          hook.state = reducer(hook.state, action);
          commit(element);
        }
      };
      return hook;
    }
  )(element.component[STATES][id]);
  var _element$component$ST = element.component[STATES][id],
    state = _element$component$ST.state,
    dispatch = _element$component$ST.dispatch;
  return [state, dispatch];
};

var useEffect = function useEffect(fn) {
  var id = getCurrentObjectId();
  var element = getCurrentObject();
  element.component = ramda.unless(
    function(component) {
      return component[EFFECTS];
    },
    function(component) {
      return _objectSpread({}, component, _defineProperty({}, EFFECTS, []));
    }
  )(element.component);
  element.component[EFFECTS][id] = ramda.ifElse(
    function(hook) {
      return hook;
    },
    function(hook) {
      if (hook.clean) hook.clean();
      return {
        effect: function effect() {
          hook.clean = fn();
        }
      };
    },
    function(hook) {
      hook = {
        effect: function effect() {
          hook.clean = fn();
        }
      };
      return hook;
    }
  )(element.component[EFFECTS][id]);
};

var printWarning = function printWarning(subject, text) {
  var message = "Warning - ".concat(subject, " - ").concat(text);

  if (typeof console !== "undefined") {
    console.error(message);
  }

  try {
    throw new Error(message);
  } catch (x) {}
};

exports.create = create;
exports.useState = useState;
exports.useReducer = useReducer;
exports.useEffect = useEffect;
exports.printWarning = printWarning;
