import fs from 'fs';
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
    if (fs.existsSync(mockPath)) {
      const content: string = require(mockPath);
      response.json({
        sysHead: {
          code: '000000',
          msg: 'success',
        },
        body: {
          data: content,
        },
      });
    } else {
      response.json({
        sysHead: {
          code: '-1',
          msg: 'mock路径不存在',
        },
        body: {},
      });
    }
  },
};
