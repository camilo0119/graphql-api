"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../utils");

var Query = {
  hello: function hello(parent, args, ctx, info) {
    var name = args.name;
    return "Hello ".concat(name || 'world');
  },
  quantity: function quantity() {
    return 1;
  },
  user: function user(parent, _ref, _ref2, info) {
    var id = _ref.id;
    var request = _ref2.request,
        prisma = _ref2.prisma;
    var userId = (0, _utils.getUserId)(request);

    if (!id) {
      return prisma.users.findMany();
    }

    return prisma.users.findOne({
      where: {
        id: id
      }
    });
  },
  author: function author(parent, _ref3, _ref4, info) {
    var id = _ref3.id,
        first = _ref3.first,
        skip = _ref3.skip;
    var prisma = _ref4.prisma,
        request = _ref4.request;
    var userId = (0, _utils.getUserId)(request);

    if (!id) {
      return prisma.authors.findMany({
        first: first,
        skip: skip
      });
    }

    return prisma.authors.findOne({
      where: {
        id: id
      }
    });
  },
  book: function book(parent, _ref5, _ref6, info) {
    var id = _ref5.id;
    var prisma = _ref6.prisma,
        request = _ref6.request;
    var userId = (0, _utils.getUserId)(request);

    if (!id) {
      return prisma.books.findMany();
    }

    return prisma.books.findOne({
      where: {
        id: id
      }
    });
  }
};
var _default = Query;
exports["default"] = _default;