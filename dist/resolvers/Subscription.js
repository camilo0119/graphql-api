"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../utils");

var Subscription = {
  count: {
    subscribe: function subscribe(parent, args, _ref, info) {
      var pubsub = _ref.pubsub,
          request = _ref.request;
      var userId = (0, _utils.getUserId)(request);
      var count = 0;
      setInterval(function () {
        count++;
        pubsub.publish('count', {
          count: count
        });
      }, 1000);
      return pubsub.asyncIterator('count');
    }
  },
  author: {
    subscribe: function subscribe(parent, args, _ref2, info) {
      var pubsub = _ref2.pubsub,
          request = _ref2.request;
      var userId = (0, _utils.getUserId)(request);
      return pubsub.asyncIterator('author');
    }
  },
  book: {
    subscribe: function subscribe(parent, _ref3, _ref4, info) {
      var authorId = _ref3.authorId;
      var pubsub = _ref4.pubsub,
          request = _ref4.request;
      var userId = (0, _utils.getUserId)(request);
      return pubsub.asyncIterator("book - ".concat(authorId));
    }
  }
};
var _default = Subscription;
exports["default"] = _default;