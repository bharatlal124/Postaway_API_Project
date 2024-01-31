import express from "express";

import PostController from "./post.controller.js";
import {
  uploadFile,
  uploadFileMiddleware,
} from "../../middlewares/file-upload.middleware.js";
import { validatePostData } from "../../middlewares/validation.middleware.js";
import jwtAuth from "../../middlewares/jwt.middleware.js";

const postRouter = express.Router();
const postController = new PostController();

//All Routes for posts
postRouter.post(
  "/",
  jwtAuth,
  uploadFile.single("imageUrl"),
  uploadFileMiddleware,
  validatePostData,
  postController.add
);
postRouter.put(
  "/:id",
  jwtAuth,
  uploadFile.single("imageUrl"),
  validatePostData,
  postController.update
);
postRouter.get("/all", postController.getAll);
postRouter.get("/:id", postController.getById);
postRouter.get("/", jwtAuth, postController.getByUser);
postRouter.delete("/:id", jwtAuth, postController.delete);

export default postRouter;
