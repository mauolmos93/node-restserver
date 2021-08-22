const { response, request } = require("express");

const usersGet = (req = request, res = response) => {
  const { q, nombre } = req.query;

  res.json({
    msg: "get API - usersGet",
    q,
    nombre,
  });
};

const usersPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: "post API - usersPost",
    nombre,
    edad,
  });
};

const usersPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API- usersPut",
    id,
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    msg: "patch API - usersPatch",
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: "delete API - usersDelete",
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
};
