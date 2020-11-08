const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HlGE6EGejlFvnqINgwoKMSPqmfCi7k9FiWkR1wVx18RrstdalnNRamKsZksWUPwcyHvProbeNattkoGS9pZNPEn00HeFeQhUT')
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get('/', (request, response)=>response.status(200).send('Hello World'))

exports.api = functions.https.onRequest(app)