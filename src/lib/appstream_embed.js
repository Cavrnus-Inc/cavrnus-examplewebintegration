/**
 * appstream_embed.js
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Provided as AWS Content and subject to the AWS Customer agreement and any other agreement with AWS governing your use of AWS services.
 */

const initAppStream = () => {
	!(function e(t, n, r) {
	  function i(o, E) {
		if (!n[o]) {
		  if (!t[o]) {
			var a = 'function' == typeof require && require;
			if (!E && a) return a(o, !0);
			if (s) return s(o, !0);
			var _ = new Error("Cannot find module '" + o + "'");
			throw ((_.code = 'MODULE_NOT_FOUND'), _);
		  }
		  var u = (n[o] = { exports: {} });
		  t[o][0].call(
			u.exports,
			function (e) {
			  return i(t[o][1][e] || e);
			},
			u,
			u.exports,
			e,
			t,
			n,
			r
		  );
		}
		return n[o].exports;
	  }
	  for (
		var s = 'function' == typeof require && require, o = 0;
		o < r.length;
		o++
	  )
		i(r[o]);
	  return i;
	})(
	  {
		1: [
		  function (e, t, n) {
			const r = e('./lib/embed-v1');
			(window.AppStream = r),
			  (window.AppStream.Embed = r.AppStreamEmbed),
			  (window.AppStream.Embed.Options = r.EMBED_OPTIONS),
			  (window.AppStream.Embed.Elements = r.EMBED_ELEMENTS),
			  (window.AppStream.Embed.Methods = r.EMBED_METHODS),
			  (window.AppStream.Embed.Events = r.EMBED_EVENTS),
			  (window.AppStream.Embed.EventParams = r.EMBED_EVENT_PARAMS),
			  (window.AppStream.Embed.SessionStatus = r.EMBED_SESSION_STATUS),
			  (window.AppStream.Embed.InputListeners = r.EMBED_INPUT_LISTENERS),
			  (window.AppStream.Embed.KeyboardLocation =
				r.EMBED_KEYBOARD_LOCATION);
		  },
		  { './lib/embed-v1': 2 },
		],
		2: [
		  function (e, t, n) {
			'use strict';
			var r, i;
			!(function (e) {
			  (e.OPTION_STREAMING_URL = 'streamingURL'),
				(e.OPTION_HIDDEN_ELEMENTS = 'hiddenElements'),
				(e.OPTION_DISABLED_INPUT = 'disabledInput'),
				(e.MAX_HIDDEN_ELEMENTS_LENGTH = 14),
				(e.ELEMENT_TOOLBAR = 'toolbar'),
				(e.ELEMENT_TOOLBAR_CATALOG = 'catalogButton'),
				(e.ELEMENT_TOOLBAR__WINDOW_SWITCHER = 'windowSwitcherButton'),
				(e.ELEMENT_TOOLBAR_FILES = 'filesButton'),
				(e.ELEMENT_TOOLBAR_CLIPBOARD = 'clipboardButton'),
				(e.ELEMENT_TOOLBAR_COPY_LOCAL = 'copyToLocalButton'),
				(e.ELEMENT_TOOLBAR_PASTE_REMOTE = 'pasteToRemoteButton'),
				(e.ELEMENT_TOOLBAR_SETTINGS = 'settingsButton'),
				(e.ELEMENT_TOOLBAR_MICROPHONE = 'enableMicrophoneButton'),
				(e.ELEMENT_TOOLBAR_STREAMING_MODE = 'streamingModeButton'),
				(e.ELEMENT_TOOLBAR_SCREEN_RESOLUTION = 'screenResolutionButton'),
				(e.ELEMENT_TOOLBAR_REGIONAL_SETTINGS = 'regionalSettingsButton'),
				(e.ELEMENT_TOOLBAR_FULLSCREEN = 'fullscreenButton'),
				(e.ELEMENT_TOOLBAR_END_SESSION = 'endSessionButton'),
				(function (e) {
				  (e[(e.KEY_DOWN = 0)] = 'KEY_DOWN'),
					(e[(e.KEY_UP = 1)] = 'KEY_UP'),
					(e[(e.KEY_PRESS = 2)] = 'KEY_PRESS'),
					(e[(e.MOUSE_MOVE = 3)] = 'MOUSE_MOVE'),
					(e[(e.MOUSE_DOWN = 4)] = 'MOUSE_DOWN'),
					(e[(e.MOUSE_UP = 5)] = 'MOUSE_UP'),
					(e[(e.MOUSE_LEAVE = 6)] = 'MOUSE_LEAVE'),
					(e[(e.WHEEL = 7)] = 'WHEEL'),
					(e[(e.TOUCH_START = 8)] = 'TOUCH_START'),
					(e[(e.TOUCH_MOVE = 9)] = 'TOUCH_MOVE'),
					(e[(e.TOUCH_END = 10)] = 'TOUCH_END'),
					(e[(e.TOUCH_CANCEL = 11)] = 'TOUCH_CANCEL');
				})(e.InputListeners || (e.InputListeners = {}));
			  var t = (function () {
				function e() {}
				return (
				  (e.EVENT_API_BRIDGE = 'appstreamAPI'),
				  (e.EVENT_SESSION_STATE_CHANGED = 'sessionStateChange'),
				  (e.EVENT_USER_INTERFACE_STATE_CHANGED =
					'userInterfaceStateChange'),
				  (e.EVENT_SESSION_ENDED = 'embedSessionEnded'),
				  (e.EVENT_SESSION_RESIZE = 'sessionResize'),
				  (e.EVENT_SESSION_ERROR = 'sessionError'),
				  (e.EVENT_PARAM_SESSION_STATUS = 'sessionStatus'),
				  (e.EVENT_PARAM_STATUS = 'status'),
				  (e.EVENT_PARAM_ERROR = 'error'),
				  e
				);
			  })();
			  (e.Events = t),
				(e.METHOD_END_SESSION = 'endSession'),
				(e.METHOD_SEND_KEYS = 'sendKeys'),
				(e.METHOD_SEND_KEYBOARD_EVENT = 'sendKeyboardEvent'),
				(e.METHOD_ENTER_FULLSCREEN = 'enterFullscreen'),
				(e.METHOD_EXIT_FULLSCREEN = 'exitFullscreen'),
				(e.METHOD_SHOW_SOFTKEYBOARD = 'showSoftkeyboard'),
				(e.METHOD_HIDE_SOFTKEYBOARD = 'hideSoftkeyboard'),
				(e.METHOD_LAUNCH_APP = 'launchApp'),
				(e.METHOD_LAUNCH_APP_SWITCHER = 'launchAppSwitcher'),
				(e.BRIDGE_CLIENT_NAMESPACE = 'appstream.embed.message.client'),
				(e.BRIDGE_HOST_NAMESPACE = 'appstream.embed.message.host'),
				(e.METHOD_EMBED_CLIENT_INTERFACE_READY =
				  'appstreamEmbedClientInterfaceReady'),
				(e.METHOD_EMBED_OPTIONS = 'appstreamEmbedOptions'),
				(e.METHOD_UPDATE_USER_INTERFACE_STATE =
				  'updateUserInterfaceState'),
				(e.METHOD_UPDATE_SESSION_STATE = 'updateSessionState'),
				(e.METHOD_SEND_INITIAL_STATE = 'sendInitialState'),
				(e.METHOD_DISCONNECT_SESSION = 'disconnectSession'),
				(e.METHOD_REPORT_ERROR = 'reportError'),
				(e.HOST_WAIT_TIMEOUT = 1e4),
				(e.CLIENT_WAIT_TIMEOUT = 1e3),
				(e.DISCONNECT_WAIT_TIMEOUT = 1e3),
				(function (e) {
				  (e[(e.Unknown = 0)] = 'Unknown'),
					(e[(e.Reserved = 1)] = 'Reserved'),
					(e[(e.Started = 2)] = 'Started'),
					(e[(e.Disconnected = 3)] = 'Disconnected'),
					(e[(e.Ended = 4)] = 'Ended');
				})(e.SessionStatus || (e.SessionStatus = {})),
				(function (e) {
				  e[(e.USER_ENDED_SESSION = 0)] = 'USER_ENDED_SESSION';
				})(
				  e.SessionTerminationReason || (e.SessionTerminationReason = {})
				),
				(function (e) {
				  (e.VALIDATION_ERROR =
					'The input fails to satisfy the constraints specified by an AWS service.'),
					(e.MISSING_PARAMETER =
					  'A required parameter for the specified action is not supplied.'),
					(e.INTERNAL_SERVER_ERROR =
					  'The request processing has failed because of an unknown error, exception or failure.');
				})(e.ErrorMessages || (e.ErrorMessages = {})),
				(function (e) {
				  (e[
					(e.DOM_KEY_LOCATION_STANDARD =
					  KeyboardEvent.DOM_KEY_LOCATION_STANDARD)
				  ] = 'DOM_KEY_LOCATION_STANDARD'),
					(e[
					  (e.DOM_KEY_LOCATION_LEFT =
						KeyboardEvent.DOM_KEY_LOCATION_LEFT)
					] = 'DOM_KEY_LOCATION_LEFT'),
					(e[
					  (e.DOM_KEY_LOCATION_RIGHT =
						KeyboardEvent.DOM_KEY_LOCATION_RIGHT)
					] = 'DOM_KEY_LOCATION_RIGHT'),
					(e[
					  (e.DOM_KEY_LOCATION_NUMPAD =
						KeyboardEvent.DOM_KEY_LOCATION_NUMPAD)
					] = 'DOM_KEY_LOCATION_NUMPAD');
				})(e.EmbedKeyboardLocation || (e.EmbedKeyboardLocation = {})),
				(function (e) {
				  e.V1 = '1';
				})(e.MessageVersions || (e.MessageVersions = {})),
				(function (e) {
				  e.V1 = '1.0.0';
				})(e.ClientVersions || (e.ClientVersions = {}));
			})(r || (r = {})),
			  (function (e) {
				var t = (function () {
				  function e() {
					(this.hidden = []),
					  (this.isFullscreen = !1),
					  (this.isSoftKeyboardVisible = !1);
				  }
				  return (
					(e.prototype.updateState = function (t) {
					  var n = {};
					  return (
						t &&
						  (void 0 !== t.hidden &&
							t.hidden instanceof Array &&
							((this.hidden = t.hidden),
							(n[e.HIDDEN_KEY] = this.hidden)),
						  void 0 !== t.isFullscreen &&
							((this.isFullscreen = t.isFullscreen),
							(n[e.IS_FULLSCREEN_KEY] = this.isFullscreen)),
						  void 0 !== t.isSoftKeyboardVisible &&
							((this.isSoftKeyboardVisible =
							  t.isSoftKeyboardVisible),
							(n[e.IS_SOFT_KEYBOARD_VISIBLE_KEY] =
							  this.isSoftKeyboardVisible))),
						n
					  );
					}),
					(e.HIDDEN_KEY = 'hidden'),
					(e.IS_FULLSCREEN_KEY = 'isFullscreen'),
					(e.IS_SOFT_KEYBOARD_VISIBLE_KEY = 'isSoftKeyboardVisible'),
					e
				  );
				})();
				e.EmbedUserInterfaceState = t;
				var n = (function () {
				  function e() {
					this.sessionStatus = r.SessionStatus.Unknown;
				  }
				  return (
					(e.prototype.updateState = function (t) {
					  var n = {};
					  return (
						t &&
						  void 0 !== t.sessionStatus &&
						  this.sessionStatus !== r.SessionStatus.Ended &&
						  ((this.sessionStatus = t.sessionStatus),
						  (n[e.SESSION_STATUS_KEY] =
							r.SessionStatus[this.sessionStatus]),
						  t.sessionTerminationReason &&
							((this.sessionTerminationReason =
							  t.sessionTerminationReason),
							(n[e.SESSION_TERMINATION_REASON_KEY] =
							  this.sessionTerminationReason)),
						  t.sessionDisconnectionReason &&
							((this.sessionDisconnectionReason =
							  t.sessionDisconnectionReason),
							(n[e.SESSION_DISCONNECTION_REASON_KEY] =
							  this.sessionDisconnectionReason)),
						  t.redirectURL &&
							((this.redirectURL = t.redirectURL),
							(n[e.REDIRECT_URL_KEY] = this.redirectURL))),
						n
					  );
					}),
					(e.SESSION_STATUS_KEY = 'sessionStatus'),
					(e.SESSION_TERMINATION_REASON_KEY =
					  'sessionTerminationReason'),
					(e.SESSION_DISCONNECTION_REASON_KEY =
					  'sessionDisconnectionReason'),
					(e.REDIRECT_URL_KEY = 'redirectURL'),
					e
				  );
				})();
				e.EmbedSessionState = n;
			  })(i || (i = {}));
			var s = e('events');
			e('es6-promise/auto');
			var o = (function () {
			  function e(e, t) {
				var n = this;
				if (
				  ((this._disconnectingSession = !1),
				  (this._waiting_for_new_ie_frame = !1),
				  (this.reportError = function (e) {
					var t;
					(t =
					  null !== e.errorMessage &&
					  null !== e.errorCode &&
					  void 0 !== e.errorMessage &&
					  void 0 !== e.errorCode
						? e
						: {
							errorCode: 500,
							errorMessage: r.ErrorMessages.INTERNAL_SERVER_ERROR,
						  }),
					  n._eventEmitter.emit(r.Events.EVENT_SESSION_ERROR, t);
				  }),
				  (this._isIE_or_Edge = function () {
					return (
					  window.navigator.userAgent.indexOf('MSIE') > 0 ||
					  window.navigator.userAgent.indexOf('Trident') > 0 ||
					  window.navigator.userAgent.indexOf('Edge') > 0
					);
				  }),
				  (this._bridgeReady = function (e) {
					var t;
					n._eventEmitter.emit(
					  r.Events.EVENT_API_BRIDGE,
					  (((t = {})[r.Events.EVENT_PARAM_STATUS] = 'success'), t)
					);
				  }),
				  (this._bridgeError = function (e) {
					n._waiting_for_new_ie_frame = !1;
					var t = {
					  errorCode: 500,
					  errorMessage: r.ErrorMessages.INTERNAL_SERVER_ERROR,
					};
					n.reportError(t);
				  }),
				  (this.updateUserInterfaceState = function (e) {
					n._userInterfaceState ||
					  (n._userInterfaceState = new i.EmbedUserInterfaceState()),
					  n._eventEmitter.emit(
						r.Events.EVENT_USER_INTERFACE_STATE_CHANGED,
						n._userInterfaceState.updateState(e)
					  );
				  }),
				  (this.updateSessionState = function (e) {
					n._sessionState ||
					  (n._sessionState = new i.EmbedSessionState()),
					  n._eventEmitter.emit(
						r.Events.EVENT_SESSION_STATE_CHANGED,
						n._sessionState.updateState(e)
					  ),
					  e.sessionStatus == r.SessionStatus.Disconnected &&
						n._disconnectingSession &&
						n.destroy();
				  }),
				  (this._options = this.sanitize(t)),
				  (this._eventEmitter = new s.EventEmitter()),
				  this._options)
				) {
				  this._onBridgeReady = this._getBridgeReady(e);
				  var o = this._createSessionIframe(this._options);
				  this._isIE_or_Edge() && (o.style.display = 'none'),
					(this._iframe = o),
					(this._iframe.onload = function () {
					  this._clientOrigin = this._urlOrigin(this._iframe.src);
					}.bind(this)),
					e.appendChild(this._iframe),
					(this._client = this._iframe.contentWindow),
					(this._clientOrigin = this._urlOrigin(
					  this._options.sessionURL
					)),
					(this._origin = document.location.origin);
				}
			  }
			  return (
				(e.prototype.sanitize = function (e) {
				  var t;
				  return (
					e.sessionURL ||
					  (console.error(
						'Expected AppStream streaming URL to embed.'
					  ),
					  (t = {
						errorCode: 400,
						errorMessage: r.ErrorMessages.MISSING_PARAMETER,
					  }),
					  this.reportError(t)),
					e.userInterfaceConfig &&
					  (e.userInterfaceConfig.hiddenElements &&
						(e.userInterfaceConfig.hiddenElements.length >
						  r.MAX_HIDDEN_ELEMENTS_LENGTH &&
						  ((t = {
							errorCode: 400,
							errorMessage: r.ErrorMessages.VALIDATION_ERROR,
						  }),
						  console.error(
							'Exceeded the number of hidden elements allowed : ' +
							  r.MAX_HIDDEN_ELEMENTS_LENGTH
						  ),
						  this.reportError(t)),
						Array.isArray(e.userInterfaceConfig.hiddenElements) ||
						  ((t = {
							errorCode: 400,
							errorMessage: r.ErrorMessages.VALIDATION_ERROR,
						  }),
						  console.error('Hidden elements must be of type Array'),
						  this.reportError(t))),
					  e.userInterfaceConfig.disabledInput &&
						(Array.isArray(e.userInterfaceConfig.disabledInput) ||
						  ((t = {
							errorCode: 400,
							errorMessage: r.ErrorMessages.VALIDATION_ERROR,
						  }),
						  console.error('Disabled input must be of type Array'),
						  this.reportError(t)))),
					e
				  );
				}),
				(e.prototype.serializeKeyboardEvent = function (e) {
				  return null != e && e instanceof KeyboardEvent
					? {
						type: e.type,
						eventInit: {
						  key: e.key,
						  location: e.location,
						  ctrlKey: e.ctrlKey,
						  altKey: e.altKey,
						  shiftKey: e.shiftKey,
						  metaKey: e.metaKey,
						  code: e.code,
						  repeat: e.repeat,
						},
					  }
					: null;
				}),
				(e.prototype._getSessionState = function () {
				  if (!this._sessionState) return null;
				  var e = {};
				  return (
					null !== this._sessionState.sessionStatus &&
					  void 0 !== this._sessionState.sessionStatus &&
					  (e[i.EmbedSessionState.SESSION_STATUS_KEY] =
						this._sessionState.sessionStatus),
					null !== this._sessionState.sessionTerminationReason &&
					  void 0 !== this._sessionState.sessionTerminationReason &&
					  (e[i.EmbedSessionState.SESSION_TERMINATION_REASON_KEY] =
						this._sessionState.sessionTerminationReason),
					null !== this._sessionState.sessionDisconnectionReason &&
					  void 0 !== this._sessionState.sessionDisconnectionReason &&
					  (e[i.EmbedSessionState.SESSION_DISCONNECTION_REASON_KEY] =
						this._sessionState.sessionDisconnectionReason),
					e
				  );
				}),
				(e.prototype._getUserInterfaceState = function () {
				  return this._userInterfaceState
					? {
						hidden: this._userInterfaceState.hidden,
						isFullscreen: this._userInterfaceState.isFullscreen,
						isSoftKeyboardVisible:
						  this._userInterfaceState.isSoftKeyboardVisible,
					  }
					: null;
				}),
				(e.prototype.callSessionMethod = function (e, t) {
				  this._sendMessage_v1(e, t);
				}),
				(e.prototype.disconnect = function () {
				  var e = this;
				  (this._disconnectingSession = !0),
					this._sendMessage_v1(r.METHOD_DISCONNECT_SESSION),
					setTimeout(function () {
					  return e.destroy();
					}, r.DISCONNECT_WAIT_TIMEOUT);
				}),
				(e.prototype.destroy = function () {
				  this._iframe.parentNode.removeChild(this._iframe),
					(this._waiting_for_new_ie_frame = !1),
					window.removeEventListener('message', this),
					delete this._iframe,
					delete this._client;
				}),
				(e.prototype._createSessionIframe = function (e) {
				  var t = document.createElement('iframe');
				  return (
					t.setAttribute('frameBorder', '0'),
					void 0 !== e.iframeConfig &&
					  null !== e.iframeConfig &&
					  this.setElementAttributes(t, e.iframeConfig),
					t.setAttribute('src', e.sessionURL),
					t.setAttribute('id', 'appstream-streaming-session'),
					t.setAttribute('allow', 'fullscreen *; microphone *;'),
					t.setAttribute('allowfullscreen', ''),
					t.setAttribute('scrolling', 'no'),
					(t.style.height = '1px'),
					(t.style.width = '1px'),
					(t.style.minHeight = '100%'),
					(t.style.minWidth = '100%'),
					t
				  );
				}),
				(e.prototype.setElementAttributes = function (e, t) {
				  if (null != e && e instanceof HTMLElement)
					for (var n in t)
					  n.length > 0 &&
						null !== t[n] &&
						void 0 !== t[n] &&
						e.setAttribute(n, t[n]);
				}),
				(e.prototype._getBridgeReady = function (e) {
				  var t = this;
				  return new Promise(function (n, i) {
					var s;
					s = t._isIE_or_Edge()
					  ? function (n) {
						  if (
							t._isClientMessage(n) &&
							n.data.method ===
							  r.METHOD_EMBED_CLIENT_INTERFACE_READY
						  )
							try {
							  var i = t._clientOrigin
								  .split('https://')[1]
								  .split(':')[0],
								s = n.data.args[0];
							  if (
								!t._waiting_for_new_ie_frame &&
								s.embedOrigin.indexOf(i) > -1
							  ) {
								t._clientOrigin = s.embedOrigin;
								var E =
									t._options.sessionURL.split(
									  '/authenticate?'
									)[1],
								  a = t._clientOrigin + '/authenticate?' + E;
								(t._options.sessionURL = a),
								  1 == s.recreateIFrame &&
									(t.destroy(),
									(t._iframe = t._createSessionIframe(
									  t._options
									)),
									(t._iframe.onload = function () {
									  t._clientOrigin = t._urlOrigin(a);
									}.bind(t)),
									e.appendChild(t._iframe),
									(t._client = t._iframe.contentWindow),
									(t._clientOrigin = t._urlOrigin(
									  t._options.sessionURL
									)),
									(t._origin = document.location.origin),
									(t._waiting_for_new_ie_frame = !0));
							  } else
								window.addEventListener('message', o),
								  t._sendEmbedOptions(),
								  (t._waiting_for_new_ie_frame = !1);
							} catch (e) {
							  var _ = {
								errorCode: 500,
								errorMessage:
								  r.ErrorMessages.INTERNAL_SERVER_ERROR,
							  };
							  console.error(
								'Error during the IE/Edge Specific multi session flow'
							  ),
								console.error(e),
								t.reportError(_);
							}
						}.bind(t)
					  : function (e) {
						  if (
							t._isClientMessage(e) &&
							e.data.method ===
							  r.METHOD_EMBED_CLIENT_INTERFACE_READY
						  ) {
							var n = e.data.args[0].embedOrigin;
							null != n &&
							  ((t._clientOrigin = n),
							  t._iframe.setAttribute(
								'allow',
								'fullscreen ' +
								  t._clientOrigin +
								  '; microphone ' +
								  t._clientOrigin
							  )),
							  window.addEventListener('message', o),
							  t._sendEmbedOptions();
						  }
						}.bind(t);
					var o = function (e) {
					  if (
						t._isClientMessage(e) &&
						e.data.method === r.METHOD_SEND_INITIAL_STATE
					  ) {
						window.removeEventListener('message', o),
						  window.addEventListener('message', t);
						var i = e.data.args[0];
						t.updateUserInterfaceState(i.userInterfaceState),
						  t.updateSessionState(i.sessionState),
						  n();
					  }
					}.bind(t);
					window.addEventListener('message', s),
					  setTimeout(i, r.HOST_WAIT_TIMEOUT);
				  }).then(t._bridgeReady, t._bridgeError);
				}),
				(e.prototype._sendEmbedOptions = function () {
				  var e = {
					embedOptions: {
					  origin: this._origin,
					  sessionURL: this._options.sessionURL,
					  clientVersion: r.ClientVersions.V1,
					  userInterfaceConfig: this._options.userInterfaceConfig,
					},
				  };
				  this._sendMessage_v1(r.METHOD_EMBED_OPTIONS, e);
				}),
				(e.prototype._sendMessage_v1 = function (e, t) {
				  var n = {
					namespace: r.BRIDGE_HOST_NAMESPACE,
					messageVersion: r.MessageVersions.V1,
					method: e,
					args: [t],
				  };
				  this._client.postMessage(n, this._clientOrigin);
				}),
				(e.prototype._isClientMessage = function (e) {
				  return (
					!!this._iframe &&
					(this._isIE_or_Edge()
					  ? Boolean(e.data) &&
						e.data.namespace === r.BRIDGE_CLIENT_NAMESPACE
					  : Boolean(e.data) &&
						e.data.namespace === r.BRIDGE_CLIENT_NAMESPACE &&
						e.source === this._client)
				  );
				}),
				(e.prototype.addEventListener = function (e, t) {
				  (Object.values =
					Object.values ||
					function (e) {
					  return Object.keys(e).map(function (t) {
						return e[t];
					  });
					}),
					Array.prototype.includes
					  ? Object.values(r.Events).includes(e) &&
						this._eventEmitter.on(e, t)
					  : Object.values(r.Events).indexOf(e) >= 0 &&
						this._eventEmitter.on(e, t);
				}),
				(e.prototype.removeEventListener = function (e, t) {
				  this._eventEmitter.removeListener(e, t);
				}),
				(e.prototype.handleEvent = function (e) {
				  if (e.data.version)
					switch (e.data.version) {
					  case r.MessageVersions.V1:
						this._handleEventV1(e);
					}
				}),
				(e.prototype._handleEventV1 = function (e) {
				  if (this._isClientMessage(e)) {
					var t = e.data.args[0];
					switch (e.data.method) {
					  case r.METHOD_UPDATE_USER_INTERFACE_STATE:
						this.updateUserInterfaceState(t.userInterfaceState);
						break;
					  case r.METHOD_UPDATE_SESSION_STATE:
						this.updateSessionState(t.sessionState);
						break;
					  case r.METHOD_REPORT_ERROR:
						this.reportError(t.error);
					}
				  }
				}),
				(e.prototype._urlOrigin = function (e) {
				  var t = document.createElement('a');
				  return (
					(t.href = e),
					void 0 !== t.origin &&
					null !== t.origin &&
					t.origin.length > 0
					  ? t.origin
					  : void 0 !== t.host && null !== t.host && t.host.length > 0
					  ? 'https://' + t.host
					  : void 0 !== t.hostname &&
						null !== t.hostname &&
						t.hostname.length > 0
					  ? 'https://' + t.hostname
					  : '*'
				  );
				}),
				e
			  );
			})();
			t.exports = {};
			var E,
			  a = Object.freeze({
				STREAMING_URL: r.OPTION_STREAMING_URL,
				HIDDEN_ELEMENTS: r.OPTION_HIDDEN_ELEMENTS,
				DISABLED_INPUT: r.OPTION_DISABLED_INPUT,
			  }),
			  _ = Object.freeze({
				TOOLBAR: r.ELEMENT_TOOLBAR,
				CATALOG_BUTTON: r.ELEMENT_TOOLBAR_CATALOG,
				WINDOW_SWITCHER_BUTTON: r.ELEMENT_TOOLBAR__WINDOW_SWITCHER,
				FILES_BUTTON: r.ELEMENT_TOOLBAR_FILES,
				CLIPBOARD_BUTTON: r.ELEMENT_TOOLBAR_CLIPBOARD,
				COPY_LOCAL_BUTTON: r.ELEMENT_TOOLBAR_COPY_LOCAL,
				PASTE_REMOTE_BUTTON: r.ELEMENT_TOOLBAR_PASTE_REMOTE,
				SETTINGS_BUTTON: r.ELEMENT_TOOLBAR_SETTINGS,
				ENABLE_MICROPHONE_BUTTON: r.ELEMENT_TOOLBAR_MICROPHONE,
				STREAMING_MODE_BUTTON: r.ELEMENT_TOOLBAR_STREAMING_MODE,
				SCREEN_RESOLUTION_BUTTON: r.ELEMENT_TOOLBAR_SCREEN_RESOLUTION,
				REGIONAL_SETTINGS_BUTTON: r.ELEMENT_TOOLBAR_REGIONAL_SETTINGS,
				FULLSCREEN_BUTTON: r.ELEMENT_TOOLBAR_FULLSCREEN,
				END_SESSION_BUTTON: r.ELEMENT_TOOLBAR_END_SESSION,
			  }),
			  u = Object.freeze({
				KEY_DOWN: r.InputListeners.KEY_DOWN,
				KEY_UP: r.InputListeners.KEY_UP,
				KEY_PRESS: r.InputListeners.KEY_PRESS,
				MOUSE_MOVE: r.InputListeners.MOUSE_MOVE,
				MOUSE_DOWN: r.InputListeners.MOUSE_DOWN,
				MOUSE_UP: r.InputListeners.MOUSE_UP,
				MOUSE_LEAVE: r.InputListeners.MOUSE_LEAVE,
				WHEEL: r.InputListeners.WHEEL,
				TOUCH_START: r.InputListeners.TOUCH_START,
				TOUCH_MOVE: r.InputListeners.TOUCH_MOVE,
				TOUCH_END: r.InputListeners.TOUCH_END,
				TOUCH_CANCEL: r.InputListeners.TOUCH_CANCEL,
			  }),
			  c = Object.freeze({
				SESSION_STATE_CHANGE: r.Events.EVENT_SESSION_STATE_CHANGED,
				SESSION_INTERFACE_STATE_CHANGE:
				  r.Events.EVENT_USER_INTERFACE_STATE_CHANGED,
				SESSION_RESIZE: r.Events.EVENT_SESSION_RESIZE,
				SESSION_ERROR: r.Events.EVENT_SESSION_ERROR,
			  }),
			  f = Object.freeze({
				STATUS: r.Events.EVENT_PARAM_SESSION_STATUS,
				ERROR: r.Events.EVENT_PARAM_ERROR,
			  }),
			  l = Object.freeze(r.SessionStatus),
			  S = Object.freeze(r.EmbedKeyboardLocation),
			  d = Object.freeze({
				END_SESSION: r.METHOD_END_SESSION,
				SEND_KEYS: r.METHOD_SEND_KEYS,
				SEND_KEYBOARD_EVENT: r.METHOD_SEND_KEYBOARD_EVENT,
				ENTER_FULLSCREEN: r.METHOD_ENTER_FULLSCREEN,
				EXIT_FULLSCREEN: r.METHOD_EXIT_FULLSCREEN,
				SHOW_SOFTKEYBOARD: r.METHOD_SHOW_SOFTKEYBOARD,
				HIDE_SOFTKEYBOARD: r.METHOD_HIDE_SOFTKEYBOARD,
				LAUNCH_APP: r.METHOD_LAUNCH_APP,
				LAUNCH_APP_SWITCHER: r.METHOD_LAUNCH_APP_SWITCHER,
			  }),
			  h = (function () {
				function e(e, t) {
				  this._bridge = new o(
					(function (e) {
					  if (T(e)) return document.getElementById(e);
					  return e;
					})(e),
					t
				  );
				}
				return (
				  (e.prototype.endSession = function () {
					this._bridge.callSessionMethod(d.END_SESSION);
				  }),
				  (e.prototype.enterFullscreen = function () {
					this._bridge.callSessionMethod(d.ENTER_FULLSCREEN);
				  }),
				  (e.prototype.exitFullscreen = function () {
					this._bridge.callSessionMethod(d.EXIT_FULLSCREEN);
				  }),
				  (e.prototype.launchAppSwitcher = function () {
					this._bridge.callSessionMethod(d.LAUNCH_APP_SWITCHER);
				  }),
				  (e.prototype.launchApp = function (e) {
					T(e) &&
					  this._bridge.callSessionMethod(d.LAUNCH_APP, { appId: e });
				  }),
				  (e.prototype.sendKeys = function (e) {
					e.length > 0 &&
					  this._bridge.callSessionMethod(d.SEND_KEYS, { keys: e });
				  }),
				  (e.prototype.sendKeyboardEvent = function (e) {
					var t = this._bridge.serializeKeyboardEvent(e);
					t &&
					  this._bridge.callSessionMethod(d.SEND_KEYBOARD_EVENT, {
						keyboardEvent: t,
					  });
				  }),
				  (e.prototype.getSessionState = function () {
					return this._bridge._getSessionState();
				  }),
				  (e.prototype.getUserInterfaceState = function () {
					return this._bridge._getUserInterfaceState();
				  }),
				  (e.prototype.addEventListener = function (e, t) {
					this._bridge.addEventListener(e, t);
				  }),
				  (e.prototype.removeEventListener = function (e, t) {
					this._bridge.removeEventListener(e, t);
				  }),
				  (e.prototype.destroy = function () {
					this._bridge && this._bridge.disconnect();
				  }),
				  e
				);
			  })();
			function T(e) {
			  return 'string' == typeof e;
			}
			(t.exports = {
			  AppStreamEmbed: h,
			  EMBED_OPTIONS: a,
			  EMBED_ELEMENTS: _,
			  EMBED_EVENTS: c,
			  EMBED_INPUT_LISTENERS: u,
			  EMBED_EVENT_PARAMS: f,
			  EMBED_SESSION_STATUS: l,
			  EMBED_METHODS: d,
			  EMBED_KEYBOARD_LOCATION: S,
			}),
			  (function (e) {
				var t = function () {};
				e.EmbedError = t;
			  })(E || (E = {}));
		  },
		  { 'es6-promise/auto': 3, events: 5 },
		],
		3: [
		  function (e, t, n) {
			'use strict';
			t.exports = e('./').polyfill();
		  },
		  { './': 4 },
		],
		4: [
		  function (e, t, n) {
			(function (r, i) {
			  /*!
			   * @overview es6-promise - a tiny implementation of Promises/A+.
			   * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
			   * @license   Licensed under MIT license
			   *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
			   * @version   v4.2.8+1e68dce6
			   */
			  !(function (e, r) {
				'object' == typeof n && void 0 !== t
				  ? (t.exports = r())
				  : 'function' == typeof define && define.amd
				  ? define(r)
				  : (e.ES6Promise = r());
			  })(this, function () {
				'use strict';
				function t(e) {
				  return 'function' == typeof e;
				}
				var n = Array.isArray
					? Array.isArray
					: function (e) {
						return (
						  '[object Array]' === Object.prototype.toString.call(e)
						);
					  },
				  s = 0,
				  o = void 0,
				  E = void 0,
				  a = function (e, t) {
					(d[s] = e),
					  (d[s + 1] = t),
					  2 === (s += 2) && (E ? E(h) : A());
				  };
				var _ = 'undefined' != typeof window ? window : void 0,
				  u = _ || {},
				  c = u.MutationObserver || u.WebKitMutationObserver,
				  f =
					'undefined' == typeof self &&
					void 0 !== r &&
					'[object process]' === {}.toString.call(r),
				  l =
					'undefined' != typeof Uint8ClampedArray &&
					'undefined' != typeof importScripts &&
					'undefined' != typeof MessageChannel;
				function S() {
				  var e = setTimeout;
				  return function () {
					return e(h, 1);
				  };
				}
				var d = new Array(1e3);
				function h() {
				  for (var e = 0; e < s; e += 2) {
					(0, d[e])(d[e + 1]), (d[e] = void 0), (d[e + 1] = void 0);
				  }
				  s = 0;
				}
				var T,
				  O,
				  p,
				  N,
				  A = void 0;
				function v(e, t) {
				  var n = this,
					r = new this.constructor(I);
				  void 0 === r[R] && K(r);
				  var i = n._state;
				  if (i) {
					var s = arguments[i - 1];
					a(function () {
					  return H(i, r, s, n._result);
					});
				  } else U(n, r, e, t);
				  return r;
				}
				function m(e) {
				  if (e && 'object' == typeof e && e.constructor === this)
					return e;
				  var t = new this(I);
				  return D(t, e), t;
				}
				f
				  ? (A = function () {
					  return r.nextTick(h);
					})
				  : c
				  ? ((O = 0),
					(p = new c(h)),
					(N = document.createTextNode('')),
					p.observe(N, { characterData: !0 }),
					(A = function () {
					  N.data = O = ++O % 2;
					}))
				  : l
				  ? (((T = new MessageChannel()).port1.onmessage = h),
					(A = function () {
					  return T.port2.postMessage(0);
					}))
				  : (A =
					  void 0 === _ && 'function' == typeof e
						? (function () {
							try {
							  var e = Function('return this')().require('vertx');
							  return void 0 !==
								(o = e.runOnLoop || e.runOnContext)
								? function () {
									o(h);
								  }
								: S();
							} catch (e) {
							  return S();
							}
						  })()
						: S());
				var R = Math.random().toString(36).substring(2);
				function I() {}
				var L = void 0,
				  g = 1,
				  y = 2;
				function M(e, n, r) {
				  n.constructor === e.constructor &&
				  r === v &&
				  n.constructor.resolve === m
					? (function (e, t) {
						t._state === g
						  ? C(e, t._result)
						  : t._state === y
						  ? w(e, t._result)
						  : U(
							  t,
							  void 0,
							  function (t) {
								return D(e, t);
							  },
							  function (t) {
								return w(e, t);
							  }
							);
					  })(e, n)
					: void 0 === r
					? C(e, n)
					: t(r)
					? (function (e, t, n) {
						a(function (e) {
						  var r = !1,
							i = (function (e, t, n, r) {
							  try {
								e.call(t, n, r);
							  } catch (e) {
								return e;
							  }
							})(
							  n,
							  t,
							  function (n) {
								r || ((r = !0), t !== n ? D(e, n) : C(e, n));
							  },
							  function (t) {
								r || ((r = !0), w(e, t));
							  },
							  e._label
							);
						  !r && i && ((r = !0), w(e, i));
						}, e);
					  })(e, n, r)
					: C(e, n);
				}
				function D(e, t) {
				  if (e === t)
					w(
					  e,
					  new TypeError('You cannot resolve a promise with itself')
					);
				  else if (
					((i = typeof (r = t)),
					null === r || ('object' !== i && 'function' !== i))
				  )
					C(e, t);
				  else {
					var n = void 0;
					try {
					  n = t.then;
					} catch (t) {
					  return void w(e, t);
					}
					M(e, t, n);
				  }
				  var r, i;
				}
				function b(e) {
				  e._onerror && e._onerror(e._result), B(e);
				}
				function C(e, t) {
				  e._state === L &&
					((e._result = t),
					(e._state = g),
					0 !== e._subscribers.length && a(B, e));
				}
				function w(e, t) {
				  e._state === L && ((e._state = y), (e._result = t), a(b, e));
				}
				function U(e, t, n, r) {
				  var i = e._subscribers,
					s = i.length;
				  (e._onerror = null),
					(i[s] = t),
					(i[s + g] = n),
					(i[s + y] = r),
					0 === s && e._state && a(B, e);
				}
				function B(e) {
				  var t = e._subscribers,
					n = e._state;
				  if (0 !== t.length) {
					for (
					  var r = void 0, i = void 0, s = e._result, o = 0;
					  o < t.length;
					  o += 3
					)
					  (r = t[o]), (i = t[o + n]), r ? H(n, r, i, s) : i(s);
					e._subscribers.length = 0;
				  }
				}
				function H(e, n, r, i) {
				  var s = t(r),
					o = void 0,
					E = void 0,
					a = !0;
				  if (s) {
					try {
					  o = r(i);
					} catch (e) {
					  (a = !1), (E = e);
					}
					if (n === o)
					  return void w(
						n,
						new TypeError(
						  'A promises callback cannot return that same promise.'
						)
					  );
				  } else o = i;
				  n._state !== L ||
					(s && a
					  ? D(n, o)
					  : !1 === a
					  ? w(n, E)
					  : e === g
					  ? C(n, o)
					  : e === y && w(n, o));
				}
				var P = 0;
				function K(e) {
				  (e[R] = P++),
					(e._state = void 0),
					(e._result = void 0),
					(e._subscribers = []);
				}
				var V = (function () {
				  function e(e, t) {
					(this._instanceConstructor = e),
					  (this.promise = new e(I)),
					  this.promise[R] || K(this.promise),
					  n(t)
						? ((this.length = t.length),
						  (this._remaining = t.length),
						  (this._result = new Array(this.length)),
						  0 === this.length
							? C(this.promise, this._result)
							: ((this.length = this.length || 0),
							  this._enumerate(t),
							  0 === this._remaining &&
								C(this.promise, this._result)))
						: w(
							this.promise,
							new Error('Array Methods must be provided an Array')
						  );
				  }
				  return (
					(e.prototype._enumerate = function (e) {
					  for (var t = 0; this._state === L && t < e.length; t++)
						this._eachEntry(e[t], t);
					}),
					(e.prototype._eachEntry = function (e, t) {
					  var n = this._instanceConstructor,
						r = n.resolve;
					  if (r === m) {
						var i = void 0,
						  s = void 0,
						  o = !1;
						try {
						  i = e.then;
						} catch (e) {
						  (o = !0), (s = e);
						}
						if (i === v && e._state !== L)
						  this._settledAt(e._state, t, e._result);
						else if ('function' != typeof i)
						  this._remaining--, (this._result[t] = e);
						else if (n === Y) {
						  var E = new n(I);
						  o ? w(E, s) : M(E, e, i), this._willSettleAt(E, t);
						} else
						  this._willSettleAt(
							new n(function (t) {
							  return t(e);
							}),
							t
						  );
					  } else this._willSettleAt(r(e), t);
					}),
					(e.prototype._settledAt = function (e, t, n) {
					  var r = this.promise;
					  r._state === L &&
						(this._remaining--,
						e === y ? w(r, n) : (this._result[t] = n)),
						0 === this._remaining && C(r, this._result);
					}),
					(e.prototype._willSettleAt = function (e, t) {
					  var n = this;
					  U(
						e,
						void 0,
						function (e) {
						  return n._settledAt(g, t, e);
						},
						function (e) {
						  return n._settledAt(y, t, e);
						}
					  );
					}),
					e
				  );
				})();
				var Y = (function () {
				  function e(t) {
					(this[R] = P++),
					  (this._result = this._state = void 0),
					  (this._subscribers = []),
					  I !== t &&
						('function' != typeof t &&
						  (function () {
							throw new TypeError(
							  'You must pass a resolver function as the first argument to the promise constructor'
							);
						  })(),
						this instanceof e
						  ? (function (e, t) {
							  try {
								t(
								  function (t) {
									D(e, t);
								  },
								  function (t) {
									w(e, t);
								  }
								);
							  } catch (t) {
								w(e, t);
							  }
							})(this, t)
						  : (function () {
							  throw new TypeError(
								"Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
							  );
							})());
				  }
				  return (
					(e.prototype.catch = function (e) {
					  return this.then(null, e);
					}),
					(e.prototype.finally = function (e) {
					  var n = this.constructor;
					  return t(e)
						? this.then(
							function (t) {
							  return n.resolve(e()).then(function () {
								return t;
							  });
							},
							function (t) {
							  return n.resolve(e()).then(function () {
								throw t;
							  });
							}
						  )
						: this.then(e, e);
					}),
					e
				  );
				})();
				return (
				  (Y.prototype.then = v),
				  (Y.all = function (e) {
					return new V(this, e).promise;
				  }),
				  (Y.race = function (e) {
					var t = this;
					return n(e)
					  ? new t(function (n, r) {
						  for (var i = e.length, s = 0; s < i; s++)
							t.resolve(e[s]).then(n, r);
						})
					  : new t(function (e, t) {
						  return t(
							new TypeError('You must pass an array to race.')
						  );
						});
				  }),
				  (Y.resolve = m),
				  (Y.reject = function (e) {
					var t = new this(I);
					return w(t, e), t;
				  }),
				  (Y._setScheduler = function (e) {
					E = e;
				  }),
				  (Y._setAsap = function (e) {
					a = e;
				  }),
				  (Y._asap = a),
				  (Y.polyfill = function () {
					var e = void 0;
					if (void 0 !== i) e = i;
					else if ('undefined' != typeof self) e = self;
					else
					  try {
						e = Function('return this')();
					  } catch (e) {
						throw new Error(
						  'polyfill failed because global object is unavailable in this environment'
						);
					  }
					var t = e.Promise;
					if (t) {
					  var n = null;
					  try {
						n = Object.prototype.toString.call(t.resolve());
					  } catch (e) {}
					  if ('[object Promise]' === n && !t.cast) return;
					}
					e.Promise = Y;
				  }),
				  (Y.Promise = Y),
				  Y
				);
			  });
			}.call(
			  this,
			  e('_process'),
			  'undefined' != typeof global
				? global
				: 'undefined' != typeof self
				? self
				: 'undefined' != typeof window
				? window
				: {}
			));
		  },
		  { _process: 6 },
		],
		5: [
		  function (e, t, n) {
			var r =
				Object.create ||
				function (e) {
				  var t = function () {};
				  return (t.prototype = e), new t();
				},
			  i =
				Object.keys ||
				function (e) {
				  var t = [];
				  for (var n in e)
					Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
				  return n;
				},
			  s =
				Function.prototype.bind ||
				function (e) {
				  var t = this;
				  return function () {
					return t.apply(e, arguments);
				  };
				};
			function o() {
			  (this._events &&
				Object.prototype.hasOwnProperty.call(this, '_events')) ||
				((this._events = r(null)), (this._eventsCount = 0)),
				(this._maxListeners = this._maxListeners || void 0);
			}
			(t.exports = o),
			  (o.EventEmitter = o),
			  (o.prototype._events = void 0),
			  (o.prototype._maxListeners = void 0);
			var E,
			  a = 10;
			try {
			  var _ = {};
			  Object.defineProperty &&
				Object.defineProperty(_, 'x', { value: 0 }),
				(E = 0 === _.x);
			} catch (e) {
			  E = !1;
			}
			function u(e) {
			  return void 0 === e._maxListeners
				? o.defaultMaxListeners
				: e._maxListeners;
			}
			function c(e, t, n) {
			  if (t) e.call(n);
			  else
				for (var r = e.length, i = A(e, r), s = 0; s < r; ++s)
				  i[s].call(n);
			}
			function f(e, t, n, r) {
			  if (t) e.call(n, r);
			  else
				for (var i = e.length, s = A(e, i), o = 0; o < i; ++o)
				  s[o].call(n, r);
			}
			function l(e, t, n, r, i) {
			  if (t) e.call(n, r, i);
			  else
				for (var s = e.length, o = A(e, s), E = 0; E < s; ++E)
				  o[E].call(n, r, i);
			}
			function S(e, t, n, r, i, s) {
			  if (t) e.call(n, r, i, s);
			  else
				for (var o = e.length, E = A(e, o), a = 0; a < o; ++a)
				  E[a].call(n, r, i, s);
			}
			function d(e, t, n, r) {
			  if (t) e.apply(n, r);
			  else
				for (var i = e.length, s = A(e, i), o = 0; o < i; ++o)
				  s[o].apply(n, r);
			}
			function h(e, t, n, i) {
			  var s, o, E;
			  if ('function' != typeof n)
				throw new TypeError('"listener" argument must be a function');
			  if (
				((o = e._events)
				  ? (o.newListener &&
					  (e.emit('newListener', t, n.listener ? n.listener : n),
					  (o = e._events)),
					(E = o[t]))
				  : ((o = e._events = r(null)), (e._eventsCount = 0)),
				E)
			  ) {
				if (
				  ('function' == typeof E
					? (E = o[t] = i ? [n, E] : [E, n])
					: i
					? E.unshift(n)
					: E.push(n),
				  !E.warned && (s = u(e)) && s > 0 && E.length > s)
				) {
				  E.warned = !0;
				  var a = new Error(
					'Possible EventEmitter memory leak detected. ' +
					  E.length +
					  ' "' +
					  String(t) +
					  '" listeners added. Use emitter.setMaxListeners() to increase limit.'
				  );
				  (a.name = 'MaxListenersExceededWarning'),
					(a.emitter = e),
					(a.type = t),
					(a.count = E.length),
					'object' == typeof console &&
					  console.warn &&
					  console.warn('%s: %s', a.name, a.message);
				}
			  } else (E = o[t] = n), ++e._eventsCount;
			  return e;
			}
			function T() {
			  if (!this.fired)
				switch (
				  (this.target.removeListener(this.type, this.wrapFn),
				  (this.fired = !0),
				  arguments.length)
				) {
				  case 0:
					return this.listener.call(this.target);
				  case 1:
					return this.listener.call(this.target, arguments[0]);
				  case 2:
					return this.listener.call(
					  this.target,
					  arguments[0],
					  arguments[1]
					);
				  case 3:
					return this.listener.call(
					  this.target,
					  arguments[0],
					  arguments[1],
					  arguments[2]
					);
				  default:
					for (
					  var e = new Array(arguments.length), t = 0;
					  t < e.length;
					  ++t
					)
					  e[t] = arguments[t];
					this.listener.apply(this.target, e);
				}
			}
			function O(e, t, n) {
			  var r = {
				  fired: !1,
				  wrapFn: void 0,
				  target: e,
				  type: t,
				  listener: n,
				},
				i = s.call(T, r);
			  return (i.listener = n), (r.wrapFn = i), i;
			}
			function p(e, t, n) {
			  var r = e._events;
			  if (!r) return [];
			  var i = r[t];
			  return i
				? 'function' == typeof i
				  ? n
					? [i.listener || i]
					: [i]
				  : n
				  ? (function (e) {
					  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
						t[n] = e[n].listener || e[n];
					  return t;
					})(i)
				  : A(i, i.length)
				: [];
			}
			function N(e) {
			  var t = this._events;
			  if (t) {
				var n = t[e];
				if ('function' == typeof n) return 1;
				if (n) return n.length;
			  }
			  return 0;
			}
			function A(e, t) {
			  for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
			  return n;
			}
			E
			  ? Object.defineProperty(o, 'defaultMaxListeners', {
				  enumerable: !0,
				  get: function () {
					return a;
				  },
				  set: function (e) {
					if ('number' != typeof e || e < 0 || e != e)
					  throw new TypeError(
						'"defaultMaxListeners" must be a positive number'
					  );
					a = e;
				  },
				})
			  : (o.defaultMaxListeners = a),
			  (o.prototype.setMaxListeners = function (e) {
				if ('number' != typeof e || e < 0 || isNaN(e))
				  throw new TypeError('"n" argument must be a positive number');
				return (this._maxListeners = e), this;
			  }),
			  (o.prototype.getMaxListeners = function () {
				return u(this);
			  }),
			  (o.prototype.emit = function (e) {
				var t,
				  n,
				  r,
				  i,
				  s,
				  o,
				  E = 'error' === e;
				if ((o = this._events)) E = E && null == o.error;
				else if (!E) return !1;
				if (E) {
				  if (
					(arguments.length > 1 && (t = arguments[1]),
					t instanceof Error)
				  )
					throw t;
				  var a = new Error('Unhandled "error" event. (' + t + ')');
				  throw ((a.context = t), a);
				}
				if (!(n = o[e])) return !1;
				var _ = 'function' == typeof n;
				switch ((r = arguments.length)) {
				  case 1:
					c(n, _, this);
					break;
				  case 2:
					f(n, _, this, arguments[1]);
					break;
				  case 3:
					l(n, _, this, arguments[1], arguments[2]);
					break;
				  case 4:
					S(n, _, this, arguments[1], arguments[2], arguments[3]);
					break;
				  default:
					for (i = new Array(r - 1), s = 1; s < r; s++)
					  i[s - 1] = arguments[s];
					d(n, _, this, i);
				}
				return !0;
			  }),
			  (o.prototype.addListener = function (e, t) {
				return h(this, e, t, !1);
			  }),
			  (o.prototype.on = o.prototype.addListener),
			  (o.prototype.prependListener = function (e, t) {
				return h(this, e, t, !0);
			  }),
			  (o.prototype.once = function (e, t) {
				if ('function' != typeof t)
				  throw new TypeError('"listener" argument must be a function');
				return this.on(e, O(this, e, t)), this;
			  }),
			  (o.prototype.prependOnceListener = function (e, t) {
				if ('function' != typeof t)
				  throw new TypeError('"listener" argument must be a function');
				return this.prependListener(e, O(this, e, t)), this;
			  }),
			  (o.prototype.removeListener = function (e, t) {
				var n, i, s, o, E;
				if ('function' != typeof t)
				  throw new TypeError('"listener" argument must be a function');
				if (!(i = this._events)) return this;
				if (!(n = i[e])) return this;
				if (n === t || n.listener === t)
				  0 == --this._eventsCount
					? (this._events = r(null))
					: (delete i[e],
					  i.removeListener &&
						this.emit('removeListener', e, n.listener || t));
				else if ('function' != typeof n) {
				  for (s = -1, o = n.length - 1; o >= 0; o--)
					if (n[o] === t || n[o].listener === t) {
					  (E = n[o].listener), (s = o);
					  break;
					}
				  if (s < 0) return this;
				  0 === s
					? n.shift()
					: (function (e, t) {
						for (
						  var n = t, r = n + 1, i = e.length;
						  r < i;
						  n += 1, r += 1
						)
						  e[n] = e[r];
						e.pop();
					  })(n, s),
					1 === n.length && (i[e] = n[0]),
					i.removeListener && this.emit('removeListener', e, E || t);
				}
				return this;
			  }),
			  (o.prototype.removeAllListeners = function (e) {
				var t, n, s;
				if (!(n = this._events)) return this;
				if (!n.removeListener)
				  return (
					0 === arguments.length
					  ? ((this._events = r(null)), (this._eventsCount = 0))
					  : n[e] &&
						(0 == --this._eventsCount
						  ? (this._events = r(null))
						  : delete n[e]),
					this
				  );
				if (0 === arguments.length) {
				  var o,
					E = i(n);
				  for (s = 0; s < E.length; ++s)
					'removeListener' !== (o = E[s]) && this.removeAllListeners(o);
				  return (
					this.removeAllListeners('removeListener'),
					(this._events = r(null)),
					(this._eventsCount = 0),
					this
				  );
				}
				if ('function' == typeof (t = n[e])) this.removeListener(e, t);
				else if (t)
				  for (s = t.length - 1; s >= 0; s--)
					this.removeListener(e, t[s]);
				return this;
			  }),
			  (o.prototype.listeners = function (e) {
				return p(this, e, !0);
			  }),
			  (o.prototype.rawListeners = function (e) {
				return p(this, e, !1);
			  }),
			  (o.listenerCount = function (e, t) {
				return 'function' == typeof e.listenerCount
				  ? e.listenerCount(t)
				  : N.call(e, t);
			  }),
			  (o.prototype.listenerCount = N),
			  (o.prototype.eventNames = function () {
				return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
			  });
		  },
		  {},
		],
		6: [
		  function (e, t, n) {
			var r,
			  i,
			  s = (t.exports = {});
			function o() {
			  throw new Error('setTimeout has not been defined');
			}
			function E() {
			  throw new Error('clearTimeout has not been defined');
			}
			function a(e) {
			  if (r === setTimeout) return setTimeout(e, 0);
			  if ((r === o || !r) && setTimeout)
				return (r = setTimeout), setTimeout(e, 0);
			  try {
				return r(e, 0);
			  } catch (t) {
				try {
				  return r.call(null, e, 0);
				} catch (t) {
				  return r.call(this, e, 0);
				}
			  }
			}
			!(function () {
			  try {
				r = 'function' == typeof setTimeout ? setTimeout : o;
			  } catch (e) {
				r = o;
			  }
			  try {
				i = 'function' == typeof clearTimeout ? clearTimeout : E;
			  } catch (e) {
				i = E;
			  }
			})();
			var _,
			  u = [],
			  c = !1,
			  f = -1;
			function l() {
			  c &&
				_ &&
				((c = !1),
				_.length ? (u = _.concat(u)) : (f = -1),
				u.length && S());
			}
			function S() {
			  if (!c) {
				var e = a(l);
				c = !0;
				for (var t = u.length; t; ) {
				  for (_ = u, u = []; ++f < t; ) _ && _[f].run();
				  (f = -1), (t = u.length);
				}
				(_ = null),
				  (c = !1),
				  (function (e) {
					if (i === clearTimeout) return clearTimeout(e);
					if ((i === E || !i) && clearTimeout)
					  return (i = clearTimeout), clearTimeout(e);
					try {
					  i(e);
					} catch (t) {
					  try {
						return i.call(null, e);
					  } catch (t) {
						return i.call(this, e);
					  }
					}
				  })(e);
			  }
			}
			function d(e, t) {
			  (this.fun = e), (this.array = t);
			}
			function h() {}
			(s.nextTick = function (e) {
			  var t = new Array(arguments.length - 1);
			  if (arguments.length > 1)
				for (var n = 1; n < arguments.length; n++)
				  t[n - 1] = arguments[n];
			  u.push(new d(e, t)), 1 !== u.length || c || a(S);
			}),
			  (d.prototype.run = function () {
				this.fun.apply(null, this.array);
			  }),
			  (s.title = 'browser'),
			  (s.browser = !0),
			  (s.env = {}),
			  (s.argv = []),
			  (s.version = ''),
			  (s.versions = {}),
			  (s.on = h),
			  (s.addListener = h),
			  (s.once = h),
			  (s.off = h),
			  (s.removeListener = h),
			  (s.removeAllListeners = h),
			  (s.emit = h),
			  (s.prependListener = h),
			  (s.prependOnceListener = h),
			  (s.listeners = function (e) {
				return [];
			  }),
			  (s.binding = function (e) {
				throw new Error('process.binding is not supported');
			  }),
			  (s.cwd = function () {
				return '/';
			  }),
			  (s.chdir = function (e) {
				throw new Error('process.chdir is not supported');
			  }),
			  (s.umask = function () {
				return 0;
			  });
		  },
		  {},
		],
	  },
	  {},
	  [1]
	);
  };
  
  export default initAppStream;