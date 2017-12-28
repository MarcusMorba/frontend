(function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var fontfaceobserver_standalone = createCommonjsModule(function (module) {
/* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b);}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a();}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k), a();});}function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c);}
function t(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";";}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b, !0):!1}function z(a,b){function c(){var a=k;y(a)&&a.a.parentNode&&b(a.g);}var k=a;l(a.b,c);l(a.c,c);y(a);}function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal";}var B=null,C=null,E=null,F=null;function G(){if(null===C)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!a&&603>parseInt(a[1],10);}else C=!1;return C}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif";}catch(b){}E=""!==a.style.font;}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=D?b():document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25);},function(){b();});}e();}),N=new Promise(function(a,c){q=setTimeout(c,D);});Promise.race([N,M]).then(function(){clearTimeout(q);a(c);},function(){b(c);});}else m(function(){function u(){var b;if(b=-1!=
f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))), b=B&&(f==v&&g==v&&h==v||f==w&&g==w&&h==w||f==x&&g==x&&h==x)), b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d), clearTimeout(q), a(c));}function I(){if((new Date).getTime()-H>=D)d.parentNode&&d.parentNode.removeChild(d), b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth, g=n.a.offsetWidth, h=p.a.offsetWidth, u();q=setTimeout(I,50);}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,v=-1,w=-1,x=-1,d=document.createElement("div");d.dir="ltr";t(e,L(c,"sans-serif"));t(n,L(c,"serif"));t(p,L(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v=e.a.offsetWidth;w=n.a.offsetWidth;x=p.a.offsetWidth;I();z(e,function(a){f=a;u();});t(e,L(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;u();});t(n,L(c,'"'+c.family+'",serif'));
z(p,function(a){h=a;u();});t(p,L(c,'"'+c.family+'",monospace'));});})};module.exports=A;}());
});

var loadWebfonts = function () {
  // Setup
  const classLoaded = 'fonts-loaded';
  const storageId = 'fonts-loaded';
  const fonts = [new fontfaceobserver_standalone('Source Sans Pro', {
    weight: 'normal',
    style: 'normal'
  }).load(), new fontfaceobserver_standalone('Source Sans Pro', {
    weight: '700',
    style: 'normal'
  }).load(), new fontfaceobserver_standalone('Source Serif Pro', {
    weight: 'normal',
    style: 'normal'
  }).load(), new fontfaceobserver_standalone('Source Code Pro', {
    weight: 'normal',
    style: 'normal'
  }).load()];

  // Events
  function eventFontsLoaded() {
    document.documentElement.classList.add(classLoaded);
    sessionStorage[storageId] = true;
  }

  // Init
  function init() {
    Promise.all(fonts).then(eventFontsLoaded).catch(err => {
      console.error(err);
    });
  }

  init();
};

// Thanks to https://github.com/edenspiekermann/a11y-dialog for focus trapping

const focusableElements = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

function toArray(collection) {
  return Array.prototype.slice.call(collection);
}

function $$(selector, context) {
  return toArray((context || document).querySelectorAll(selector));
}

function getFocusableChildren(node) {
  return $$(focusableElements.join(','), node).filter(child => {
    return Boolean(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
  });
}

function createFirstFocusableChild(node) {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('tabindex', '0');
  newDiv.style.cssText = 'outline:none;';
  const firstChild = node.firstChild;
  node.insertBefore(newDiv, firstChild);
  return newDiv;
}

function getCurrentFocusable(node, event) {
  const focusableChildren = getFocusableChildren(node);
  let focusableElement;

  if (focusableChildren.length > 0) {
    const focusedItemIndex = focusableChildren.indexOf(safeActiveElement());
    if (event.shiftKey && focusedItemIndex === 0) {
      focusableElement = focusableChildren[focusableChildren.length - 1];
    } else if (!event.shiftKey && focusedItemIndex === focusableChildren.length - 1) {
      focusableElement = focusableChildren[0];
    }
  }
  return focusableElement;
}

function trapTabKey(node, event) {
  const focusableElement = getCurrentFocusable(node, event);
  if (focusableElement) {
    focusableElement.focus();
    event.preventDefault();
  }
}

function safeActiveElement() {
  try {
    return document.activeElement;
  } catch (err) {}
}

function bindKeypress(isShown, onExit, node, event) {
  if (isShown && event.which === 27) {
    event.preventDefault();
    onExit();
  }

  if (isShown && event.which === 9) {
    trapTabKey(node, event);
  }
}

function setInitialFocus(node) {
  const firstFocusableChild = getFocusableChildren(node)[0] || createFirstFocusableChild(node);
  if (firstFocusableChild) {
    firstFocusableChild.focus();
  }
}

function removeFocus(node) {
  const focusableChildren = getFocusableChildren(node);
  if (focusableChildren.length > 0) {
    const focusedItemIndex = focusableChildren.indexOf(safeActiveElement());
    if (focusedItemIndex !== -1) {
      focusableChildren[focusedItemIndex].blur();
    }
  }
}

function maintainFocus(isShown, node, event) {
  if (isShown && !node.contains(event.target)) {
    setInitialFocus(node);
  }
}

var inert = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	factory();
}(commonjsGlobal, (function () { function matches(elem, selector) {
  // Vendor-specific implementations of `Element.prototype.matches()`.
  var proto = window.Element.prototype;
  var nativeMatches = proto.matches ||
      proto.mozMatchesSelector ||
      proto.msMatchesSelector ||
      proto.oMatchesSelector ||
      proto.webkitMatchesSelector;

  if (!elem || elem.nodeType !== 1) {
    return false;
  }

  var parentElem = elem.parentNode;

  // use native 'matches'
  if (nativeMatches) {
    return nativeMatches.call(elem, selector);
  }

  // native support for `matches` is missing and a fallback is required
  var nodes = parentElem.querySelectorAll(selector);
  var len = nodes.length;

  for (var i = 0; i < len; i++) {
    if (nodes[i] === elem) {
      return true;
    }
  }

  return false;
}

/**
 * Expose `matches`
 */

var index = matches;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/**
 * This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */

(function (document) {
  // Convenience function for converting NodeLists.
  /** @type {function(number,number):Array} */
  var slice = Array.prototype.slice;

  /** @type {string} */
  var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');

  /**
   * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
   * attribute.
   *
   * Its main functions are:
   *
   * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
   *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
   *   each focusable node in the subtree with the singleton `InertManager` which manages all known
   *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
   *   instance exists for each focusable node which has at least one inert root as an ancestor.
   *
   * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
   *   attribute is removed from the root node). This is handled in the destructor, which calls the
   *   `deregister` method on `InertManager` for each managed inert node.
   */

  var InertRoot = function () {
    /**
     * @param {Element} rootElement The Element at the root of the inert subtree.
     * @param {InertManager} inertManager The global singleton InertManager object.
     */
    function InertRoot(rootElement, inertManager) {
      classCallCheck(this, InertRoot);

      /** @type {InertManager} */
      this._inertManager = inertManager;

      /** @type {Element} */
      this._rootElement = rootElement;

      /**
       * @type {Set<Node>}
       * All managed focusable nodes in this InertRoot's subtree.
       */
      this._managedNodes = new Set([]);

      // Make the subtree hidden from assistive technology
      if (this._rootElement.hasAttribute('aria-hidden')) {
        this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
      }
      this._rootElement.setAttribute('aria-hidden', 'true');

      // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
      this._makeSubtreeUnfocusable(this._rootElement);

      // Watch for:
      // - any additions in the subtree: make them unfocusable too
      // - any removals from the subtree: remove them from this inert root's managed nodes
      // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
      //   element, make that node a managed node.
      this._observer = new MutationObserver(this._onMutation.bind(this));
      this._observer.observe(this._rootElement, { attributes: true, childList: true, subtree: true });
    }

    /**
     * Call this whenever this object is about to become obsolete.  This unwinds all of the state
     * stored in this object and updates the state of all of the managed nodes.
     */


    createClass(InertRoot, [{
      key: 'destructor',
      value: function destructor() {
        this._observer.disconnect();
        this._observer = null;

        if (this._rootElement) {
          if (this.hasSavedAriaHidden) {
            this._rootElement.setAttribute('aria-hidden', this.savedAriaHidden);
          } else {
            this._rootElement.removeAttribute('aria-hidden');
          }
        }
        this._rootElement = null;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._managedNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var inertNode = _step.value;

            this._unmanageNode(inertNode.node);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this._managedNodes = null;

        this._inertManager = null;
      }

      /**
       * @return {Set<InertNode>} A copy of this InertRoot's managed nodes set.
       */

    }, {
      key: '_makeSubtreeUnfocusable',


      /**
       * @param {Node} startNode
       */
      value: function _makeSubtreeUnfocusable(startNode) {
        var _this = this;

        composedTreeWalk(startNode, function (node) {
          return _this._visitNode(node);
        });

        var activeElement = document.activeElement;
        if (!contains(document.body, startNode)) {
          // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
          var node = startNode;
          var root = undefined;
          while (node) {
            if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              root = node;
              break;
            }
            node = node.parentNode;
          }
          if (root) {
            activeElement = root.activeElement;
          }
        }
        if (contains(startNode, activeElement)) {
          activeElement.blur();
        }
      }

      /**
       * @param {Node} node
       */

    }, {
      key: '_visitNode',
      value: function _visitNode(node) {
        if (node.nodeType !== Node.ELEMENT_NODE) {
          return;
        }

        // If a descendant inert root becomes un-inert, its descendants will still be inert because of
        // this inert root, so all of its managed nodes need to be adopted by this InertRoot.
        if (node !== this._rootElement && node.hasAttribute('inert')) {
          this._adoptInertRoot(node);
        }

        if (index(node, _focusableElementsString) || node.hasAttribute('tabindex')) {
          this._manageNode(node);
        }
      }

      /**
       * Register the given node with this InertRoot and with InertManager.
       * @param {Node} node
       */

    }, {
      key: '_manageNode',
      value: function _manageNode(node) {
        var inertNode = this._inertManager.register(node, this);
        this._managedNodes.add(inertNode);
      }

      /**
       * Unregister the given node with this InertRoot and with InertManager.
       * @param {Node} node
       */

    }, {
      key: '_unmanageNode',
      value: function _unmanageNode(node) {
        var inertNode = this._inertManager.deregister(node, this);
        if (inertNode) {
          this._managedNodes.delete(inertNode);
        }
      }

      /**
       * Unregister the entire subtree starting at `startNode`.
       * @param {Node} startNode
       */

    }, {
      key: '_unmanageSubtree',
      value: function _unmanageSubtree(startNode) {
        var _this2 = this;

        composedTreeWalk(startNode, function (node) {
          return _this2._unmanageNode(node);
        });
      }

      /**
       * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
       * @param {Node} node
       */

    }, {
      key: '_adoptInertRoot',
      value: function _adoptInertRoot(node) {
        var inertSubroot = this._inertManager.getInertRoot(node);

        // During initialisation this inert root may not have been registered yet,
        // so register it now if need be.
        if (!inertSubroot) {
          this._inertManager.setInert(node, true);
          inertSubroot = this._inertManager.getInertRoot(node);
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = inertSubroot.managedNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var savedInertNode = _step2.value;

            this._manageNode(savedInertNode.node);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      /**
       * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
       * @param {MutationRecord} records
       * @param {MutationObserver} self
       */

    }, {
      key: '_onMutation',
      value: function _onMutation(records, self) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = records[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var record = _step3.value;

            var target = record.target;
            if (record.type === 'childList') {
              // Manage added nodes
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = slice.call(record.addedNodes)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var node = _step4.value;

                  this._makeSubtreeUnfocusable(node);
                }

                // Un-manage removed nodes
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }

              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = slice.call(record.removedNodes)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var _node = _step5.value;

                  this._unmanageSubtree(_node);
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }
            } else if (record.type === 'attributes') {
              if (record.attributeName === 'tabindex') {
                // Re-initialise inert node if tabindex changes
                this._manageNode(target);
              } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
                // If a new inert root is added, adopt its managed nodes and make sure it knows about the
                // already managed nodes from this inert subroot.
                this._adoptInertRoot(target);
                var inertSubroot = this._inertManager.getInertRoot(target);
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                  for (var _iterator6 = this._managedNodes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var managedNode = _step6.value;

                    if (contains(target, managedNode.node)) {
                      inertSubroot._manageNode(managedNode.node);
                    }
                  }
                } catch (err) {
                  _didIteratorError6 = true;
                  _iteratorError6 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                      _iterator6.return();
                    }
                  } finally {
                    if (_didIteratorError6) {
                      throw _iteratorError6;
                    }
                  }
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }, {
      key: 'managedNodes',
      get: function get$$1() {
        return new Set(this._managedNodes);
      }

      /** @return {boolean} */

    }, {
      key: 'hasSavedAriaHidden',
      get: function get$$1() {
        return '_savedAriaHidden' in this;
      }

      /** @param {string} ariaHidden */

    }, {
      key: 'savedAriaHidden',
      set: function set$$1(ariaHidden) {
        this._savedAriaHidden = ariaHidden;
      }

      /** @return {string} */
      ,
      get: function get$$1() {
        return this._savedAriaHidden;
      }
    }]);
    return InertRoot;
  }();

  /**
   * `InertNode` initialises and manages a single inert node.
   * A node is inert if it is a descendant of one or more inert root elements.
   *
   * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
   * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
   * is intrinsically focusable or not.
   *
   * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
   * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
   * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
   * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
   * or removes the `tabindex` attribute if the element is intrinsically focusable.
   */


  var InertNode = function () {
    /**
     * @param {Node} node A focusable element to be made inert.
     * @param {InertRoot} inertRoot The inert root element associated with this inert node.
     */
    function InertNode(node, inertRoot) {
      classCallCheck(this, InertNode);

      /** @type {Node} */
      this._node = node;

      /** @type {boolean} */
      this._overrodeFocusMethod = false;

      /**
       * @type {Set<InertRoot>} The set of descendant inert roots.
       *    If and only if this set becomes empty, this node is no longer inert.
       */
      this._inertRoots = new Set([inertRoot]);

      /** @type {boolean} */
      this._destroyed = false;

      // Save any prior tabindex info and make this node untabbable
      this.ensureUntabbable();
    }

    /**
     * Call this whenever this object is about to become obsolete.
     * This makes the managed node focusable again and deletes all of the previously stored state.
     */


    createClass(InertNode, [{
      key: 'destructor',
      value: function destructor() {
        this._throwIfDestroyed();

        if (this._node) {
          if (this.hasSavedTabIndex) {
            this._node.setAttribute('tabindex', this.savedTabIndex);
          } else {
            this._node.removeAttribute('tabindex');
          }

          // Use `delete` to restore native focus method.
          if (this._overrodeFocusMethod) {
            delete this._node.focus;
          }
        }
        this._node = null;
        this._inertRoots = null;

        this._destroyed = true;
      }

      /**
       * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
       * If the object has been destroyed, any attempt to access it will cause an exception.
       */

    }, {
      key: '_throwIfDestroyed',


      /**
       * Throw if user tries to access destroyed InertNode.
       */
      value: function _throwIfDestroyed() {
        if (this.destroyed) {
          throw new Error('Trying to access destroyed InertNode');
        }
      }

      /** @return {boolean} */

    }, {
      key: 'ensureUntabbable',


      /** Save the existing tabindex value and make the node untabbable and unfocusable */
      value: function ensureUntabbable() {
        var node = this.node;
        if (index(node, _focusableElementsString)) {
          if (node.tabIndex === -1 && this.hasSavedTabIndex) {
            return;
          }

          if (node.hasAttribute('tabindex')) {
            this._savedTabIndex = node.tabIndex;
          }
          node.setAttribute('tabindex', '-1');
          if (node.nodeType === Node.ELEMENT_NODE) {
            node.focus = function () {};
            this._overrodeFocusMethod = true;
          }
        } else if (node.hasAttribute('tabindex')) {
          this._savedTabIndex = node.tabIndex;
          node.removeAttribute('tabindex');
        }
      }

      /**
       * Add another inert root to this inert node's set of managing inert roots.
       * @param {InertRoot} inertRoot
       */

    }, {
      key: 'addInertRoot',
      value: function addInertRoot(inertRoot) {
        this._throwIfDestroyed();
        this._inertRoots.add(inertRoot);
      }

      /**
       * Remove the given inert root from this inert node's set of managing inert roots.
       * If the set of managing inert roots becomes empty, this node is no longer inert,
       * so the object should be destroyed.
       * @param {InertRoot} inertRoot
       */

    }, {
      key: 'removeInertRoot',
      value: function removeInertRoot(inertRoot) {
        this._throwIfDestroyed();
        this._inertRoots.delete(inertRoot);
        if (this._inertRoots.size === 0) {
          this.destructor();
        }
      }
    }, {
      key: 'destroyed',
      get: function get$$1() {
        return this._destroyed;
      }
    }, {
      key: 'hasSavedTabIndex',
      get: function get$$1() {
        return '_savedTabIndex' in this;
      }

      /** @return {Node} */

    }, {
      key: 'node',
      get: function get$$1() {
        this._throwIfDestroyed();
        return this._node;
      }

      /** @param {number} tabIndex */

    }, {
      key: 'savedTabIndex',
      set: function set$$1(tabIndex) {
        this._throwIfDestroyed();
        this._savedTabIndex = tabIndex;
      }

      /** @return {number} */
      ,
      get: function get$$1() {
        this._throwIfDestroyed();
        return this._savedTabIndex;
      }
    }]);
    return InertNode;
  }();

  /**
   * InertManager is a per-document singleton object which manages all inert roots and nodes.
   *
   * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
   * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
   * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
   * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
   * is created for each such node, via the `_managedNodes` map.
   */


  var InertManager = function () {
    /**
     * @param {Document} document
     */
    function InertManager(document) {
      classCallCheck(this, InertManager);

      if (!document) {
        throw new Error('Missing required argument; InertManager needs to wrap a document.');
      }

      /** @type {Document} */
      this._document = document;

      /**
       * All managed nodes known to this InertManager. In a map to allow looking up by Node.
       * @type {Map<Node, InertNode>}
       */
      this._managedNodes = new Map();

      /**
       * All inert roots known to this InertManager. In a map to allow looking up by Node.
       * @type {Map<Node, InertRoot>}
       */
      this._inertRoots = new Map();

      /**
       * Observer for mutations on `document.body`.
       * @type {MutationObserver}
       */
      this._observer = new MutationObserver(this._watchForInert.bind(this));

      // Add inert style.
      addInertStyle(document.head || document.body || document.documentElement);

      // Wait for document to be loaded.
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
      } else {
        this._onDocumentLoaded();
      }
    }

    /**
     * Set whether the given element should be an inert root or not.
     * @param {Element} root
     * @param {boolean} inert
     */


    createClass(InertManager, [{
      key: 'setInert',
      value: function setInert(root, inert) {
        if (inert) {
          if (this._inertRoots.has(root)) {
            // element is already inert
            return;
          }

          var inertRoot = new InertRoot(root, this);
          root.setAttribute('inert', '');
          this._inertRoots.set(root, inertRoot);
          // If not contained in the document, it must be in a shadowRoot.
          // Ensure inert styles are added there.
          if (!contains(this._document.body, root)) {
            var parent = root.parentNode;
            while (parent) {
              if (parent.nodeType === 11) {
                addInertStyle(parent);
              }
              parent = parent.parentNode;
            }
          }
        } else {
          if (!this._inertRoots.has(root)) {
            // element is already non-inert
            return;
          }

          var _inertRoot = this._inertRoots.get(root);
          _inertRoot.destructor();
          this._inertRoots.delete(root);
          root.removeAttribute('inert');
        }
      }

      /**
       * Get the InertRoot object corresponding to the given inert root element, if any.
       * @param {Element} element
       * @return {InertRoot?}
       */

    }, {
      key: 'getInertRoot',
      value: function getInertRoot(element) {
        return this._inertRoots.get(element);
      }

      /**
       * Register the given InertRoot as managing the given node.
       * In the case where the node has a previously existing inert root, this inert root will
       * be added to its set of inert roots.
       * @param {Node} node
       * @param {InertRoot} inertRoot
       * @return {InertNode} inertNode
       */

    }, {
      key: 'register',
      value: function register(node, inertRoot) {
        var inertNode = this._managedNodes.get(node);
        if (inertNode !== undefined) {
          // node was already in an inert subtree
          inertNode.addInertRoot(inertRoot);
          // Update saved tabindex value if necessary
          inertNode.ensureUntabbable();
        } else {
          inertNode = new InertNode(node, inertRoot);
        }

        this._managedNodes.set(node, inertNode);

        return inertNode;
      }

      /**
       * De-register the given InertRoot as managing the given inert node.
       * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
       * node from the InertManager's set of managed nodes if it is destroyed.
       * If the node is not currently managed, this is essentially a no-op.
       * @param {Node} node
       * @param {InertRoot} inertRoot
       * @return {InertNode?} The potentially destroyed InertNode associated with this node, if any.
       */

    }, {
      key: 'deregister',
      value: function deregister(node, inertRoot) {
        var inertNode = this._managedNodes.get(node);
        if (!inertNode) {
          return null;
        }

        inertNode.removeInertRoot(inertRoot);
        if (inertNode.destroyed) {
          this._managedNodes.delete(node);
        }

        return inertNode;
      }

      /**
       * Callback used when document has finished loading.
       */

    }, {
      key: '_onDocumentLoaded',
      value: function _onDocumentLoaded() {
        // Find all inert roots in document and make them actually inert.
        var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = inertElements[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var inertElement = _step7.value;

            this.setInert(inertElement, true);
          }

          // Comment this out to use programmatic API only.
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        this._observer.observe(this._document.body, { attributes: true, subtree: true, childList: true });
      }

      /**
       * Callback used when mutation observer detects attribute changes.
       * @param {MutationRecord} records
       * @param {MutationObserver} self
       */

    }, {
      key: '_watchForInert',
      value: function _watchForInert(records, self) {
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = records[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var record = _step8.value;

            switch (record.type) {
              case 'childList':
                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = undefined;

                try {
                  for (var _iterator9 = slice.call(record.addedNodes)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var node = _step9.value;

                    if (node.nodeType !== Node.ELEMENT_NODE) {
                      continue;
                    }
                    var inertElements = slice.call(node.querySelectorAll('[inert]'));
                    if (index(node, '[inert]')) {
                      inertElements.unshift(node);
                    }
                    var _iteratorNormalCompletion10 = true;
                    var _didIteratorError10 = false;
                    var _iteratorError10 = undefined;

                    try {
                      for (var _iterator10 = inertElements[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                        var inertElement = _step10.value;

                        this.setInert(inertElement, true);
                      }
                    } catch (err) {
                      _didIteratorError10 = true;
                      _iteratorError10 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion10 && _iterator10.return) {
                          _iterator10.return();
                        }
                      } finally {
                        if (_didIteratorError10) {
                          throw _iteratorError10;
                        }
                      }
                    }
                  }
                } catch (err) {
                  _didIteratorError9 = true;
                  _iteratorError9 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                      _iterator9.return();
                    }
                  } finally {
                    if (_didIteratorError9) {
                      throw _iteratorError9;
                    }
                  }
                }

                break;
              case 'attributes':
                if (record.attributeName !== 'inert') {
                  continue;
                }
                var target = record.target;
                var inert = target.hasAttribute('inert');
                this.setInert(target, inert);
                break;
            }
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }
      }
    }]);
    return InertManager;
  }();

  /**
   * Recursively walk the composed tree from |node|.
   * @param {Node} node
   * @param {(function (Element))=} callback Callback to be called for each element traversed,
   *     before descending into child nodes.
   * @param {ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
   */


  function composedTreeWalk(node, callback, shadowRootAncestor) {
    if (node.nodeType == Node.ELEMENT_NODE) {
      var element = /** @type {Element} */node;
      if (callback) {
        callback(element);
      }

      // Descend into node:
      // If it has a ShadowRoot, ignore all child elements - these will be picked
      // up by the <content> or <shadow> elements. Descend straight into the
      // ShadowRoot.
      var shadowRoot = element.shadowRoot || element.webkitShadowRoot;
      if (shadowRoot) {
        composedTreeWalk(shadowRoot, callback, shadowRoot);
        return;
      }

      // If it is a <content> element, descend into distributed elements - these
      // are elements from outside the shadow root which are rendered inside the
      // shadow DOM.
      if (element.localName == 'content') {
        var content = /** @type {HTMLContentElement} */element;
        // Verifies if ShadowDom v0 is supported.
        var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
        for (var i = 0; i < distributedNodes.length; i++) {
          composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
        }
        return;
      }

      // If it is a <slot> element, descend into assigned nodes - these
      // are elements from outside the shadow root which are rendered inside the
      // shadow DOM.
      if (element.localName == 'slot') {
        var slot = /** @type {HTMLSlotElement} */element;
        // Verify if ShadowDom v1 is supported.
        var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({ flatten: true }) : [];
        for (var _i = 0; _i < _distributedNodes.length; _i++) {
          composedTreeWalk(_distributedNodes[_i], callback, shadowRootAncestor);
        }
        return;
      }
    }

    // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
    // element, nor a <shadow> element recurse normally.
    var child = node.firstChild;
    while (child != null) {
      composedTreeWalk(child, callback, shadowRootAncestor);
      child = child.nextSibling;
    }
  }

  /**
   * Adds a style element to the node containing the inert specific styles
   * @param {Node} node
   */
  function addInertStyle(node) {
    if (node.querySelector('style#inert-style')) {
      return;
    }
    var style = document.createElement('style');
    style.setAttribute('id', 'inert-style');
    style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  user-select: none;\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '}\n';
    node.appendChild(style);
  }

  /**
   * `Node#contains()` polyfill.
   *
   * See: http://compatibility.shwups-cms.ch/en/polyfills/?&id=1
   *
   * @param {Node} node
   * @param {Node} other
   * @return {Boolean}
   * @public
   */
  function contains(node, other) {
    return other && (node === other || !!(node.compareDocumentPosition(other) & 16));
  }

  var inertManager = new InertManager(document);

  Object.defineProperty(Element.prototype, 'inert', {
    enumerable: true,
    get: function get$$1() {
      return this.hasAttribute('inert');
    },
    set: function set$$1(inert) {
      inertManager.setInert(this, inert);
    }
  });
})(document);

})));
});

var menu = function () {
  // Set timeout so that transitions don't run on page load
  const menuEl = document.querySelector('.c-menu');
  setTimeout(() => {
    menuEl.classList.remove('no-transition');
  }, 10);

  // Set up menu button
  // Mark drawer as being closed
  const buttonEl = document.querySelector('.c-menu__button');
  buttonEl.setAttribute('aria-expanded', false);

  // Set up menu drawer
  const drawerEl = document.querySelector('.c-menu__drawer');
  drawerEl.setAttribute('role', 'dialog');
  drawerEl.setAttribute('aria-hidden', 'true');
  drawerEl.hidden = true;

  // Set up backdrop
  const backdropEl = document.createElement('div');
  document.body.appendChild(backdropEl);
  backdropEl.className = 'c-backdrop';
  backdropEl.setAttribute('tabindex', -1);

  // Set up body state
  document.body.setAttribute('data-menu-expanded', false);

  // Focusing
  const focusRegion = drawerEl;
  let previousFocusedElement;

  function handleKeypress(e) {
    bindKeypress(true, () => {
      handleRemoveFocus();
    }, focusRegion, e);
  }

  function handleMaintainFocus(e) {
    maintainFocus(true, focusRegion, e);
  }

  function handleSetFocus() {
    previousFocusedElement = safeActiveElement();
    setInitialFocus(focusRegion);
    document.addEventListener('keydown', handleKeypress);
    document.body.addEventListener('focus', handleMaintainFocus, true);
  }

  function handleRemoveFocus() {
    document.removeEventListener('keydown', handleKeypress);
    document.body.removeEventListener('focus', handleMaintainFocus, true);
    removeFocus(focusRegion);
    previousFocusedElement.focus();
  }

  // Inertia
  function handleInert(state) {
    Array.from(document.body.children).forEach(child => {
      if (child !== menuEl) {
        child.inert = state;
        console.log(state);
      }
    });
  }

  function toggleMenu(state) {
    if (state === 'true') {
      // Open menu
      drawerEl.setAttribute('aria-hidden', false);
      drawerEl.hidden = false;
      handleSetFocus();
      handleInert(true);
    } else {
      // Close menu
      setTimeout(() => {
        // Leave time for animation to complete before changing state
        drawerEl.setAttribute('aria-hidden', true);
        drawerEl.hidden = true;
      }, 450);
      handleRemoveFocus();
      handleInert(false);
    }

    // …and only then update the attribute for `aria-expanded`
    buttonEl.setAttribute('aria-expanded', state);

    // …and update global value so other elements can query state
    document.body.setAttribute('data-menu-expanded', state);
  }

  if (buttonEl) {
    // Remove script and applied style that hides drawer during load
    const drawerElStyle = drawerEl.getAttributeNode('style');
    drawerEl.removeAttributeNode(drawerElStyle);
    document.querySelector('.c-menu__onload').remove();

    // Toggle drawer on clicking button
    buttonEl.addEventListener('click', e => {
      const state = buttonEl.getAttribute('aria-expanded') === 'false' ? 'true' : 'false';
      toggleMenu(state);

      e.preventDefault();
    });

    // Close menu if escape key is pressed
    window.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        toggleMenu(false);
        handleRemoveFocus();
      }
    });

    // Close menu if backdrop (area outside menu) is clicked
    backdropEl.addEventListener('click', e => {
      const state = buttonEl.getAttribute('aria-expanded') === 'false' ? 'true' : 'false';
      toggleMenu(state);
      e.preventDefault();
    });
  }
};

// Import modules
// Flag JS as being supported
const docEl = document.documentElement;
docEl.className = docEl.className.replace('no-js', 'has-js');

// Run
menu();
loadWebfonts();

}());
//# sourceMappingURL=app.js.map
