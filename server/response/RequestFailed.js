const express = require("express");

const RequestFailed = (res, code, error) => {
  var errMsg = "";
  if (code === 400) {
    errMsg = `${error} cannot be null`;
  } else if (code === 404) {
    if (id) {
      errMsg = `${error} not found with id ${id}`;
    } else {
      errMsg = `${error} not found`;
    }
  } else if (code === 406) {
    errMsg = `${error}`;
  } else if (code === 401 || code === 403) {
    errMsg = error;
  }
  res.status(code).json({
    success: false,
    message: errMsg,
  });
};
