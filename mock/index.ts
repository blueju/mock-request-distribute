import path from 'path';
import express from 'express';

export default {
  'POST /agrs': (request: express.Request, response: express.Response) => {
    /**
     * 服务
     */
    const serviceName: string = request.body.sysHead.service;
    /**
     * 接口
     */
    const interfaceName: string = request.body.sysHead.interface;
    /**
     * mock路径
     */
    const mockPath: string = path.resolve(
      __dirname,
      serviceName,
      interfaceName + '.json',
    );
    /**
     * mock内容
     */
    const content: string = require(mockPath);
    response.json(content);
  },
};
