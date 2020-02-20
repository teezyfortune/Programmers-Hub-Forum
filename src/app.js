import express from 'express';
import bodyParser from 'body-parser';
import swaggerJSDocs from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const PORT = 5000;
const server = `http://localhost:${PORT}`;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "PROGRAMMERS_HUB_FORUM",
            description: "This application is developed towards creating an interactive platform for Programmers Hub Members",
            contact: {
                name: "Fortune"
            },
            servers: [`${server}`]
        },
    },
    apis: ["src/app.js"],
};

const swaggerDOCS = swaggerJSDocs(swaggerOptions)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDOCS))


app.get('/customer', (req, res) => {
    res.send('welcome to programmers_Hub_Forum')
})

    app.listen(PORT, () => { console.log(`sever listening on ${server}`) })

export default app;