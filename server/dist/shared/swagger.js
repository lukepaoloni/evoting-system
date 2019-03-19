"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
exports.swagger = (app) => {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('E-Voting Application')
        .setDescription('The E-Voting API.')
        .setVersion('0.1')
        .addBearerAuth('Authorization', 'header')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
};
//# sourceMappingURL=swagger.js.map