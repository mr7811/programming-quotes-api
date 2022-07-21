import { response } from "express";
import api from "./apiConfig.js";

export const getQuotes = async () => {
try{
    const reponse = await api.get("/quotes")
    return response.data;

}catch (error) {
    throw error;
}
}