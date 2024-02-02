import httpLocal from "./baseLocalService";

export const getAuthor = () => httpLocal.get("/author");

export const getMessage = () => httpLocal.get("/message");