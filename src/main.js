"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _graphqlYoga = require("graphql-yoga");

var _Query = _interopRequireDefault(require("./resolvers/Query"));

var _db = _interopRequireDefault(require("./db"));

var _Author = _interopRequireDefault(require("./resolvers/Author"));

var _Book = _interopRequireDefault(require("./resolvers/Book"));

var _Mutation = _interopRequireDefault(require("./resolvers/Mutation"));

var _Subscription = _interopRequireDefault(require("./resolvers/Subscription"));

var _client = require("@prisma/client");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var pubsub = new _graphqlYoga.PubSub();
var prisma = new _client.PrismaClient();
var _context = {
  db: _db["default"],
  pubsub: pubsub,
  prisma: prisma
};
var resolvers = {
  Query: _Query["default"],
  Author: _Author["default"],
  Book: _Book["default"],
  Mutation: _Mutation["default"],
  Subscription: _Subscription["default"]
};
var server = new _graphqlYoga.GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: resolvers,
  context: function context(request) {
    return _objectSpread(_objectSpread({}, request), _context);
  }
});
server.start(function () {
  console.log('Server is running on http://localhost:4000');
});