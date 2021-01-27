import fs from 'fs';
import path from 'path';

export default {
  'POST /agrs': (request, response) => {
    /**
     * 服务
     * @type {string}
     */
    const serviceName = request.body.sysHead.service;
    /**
     * 接口
     * @type {string}
     */
    const interfaceName = request.body.sysHead.interface;
    /**
     * mock 路径
     * @type {string}
     */
    const mockPath = path.resolve(
      __dirname,
      serviceName,
      interfaceName + '.json',
    );
    /**
     * 引入内容
     */
    const content = require(mockPath);
    response.json(content);
  },
};
