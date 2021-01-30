import fs from 'fs';
import path from 'path';

export default {
  'POST /agrs': (request, response) => {
    /**
     * 服务
     */
    const serviceName = request.body.sysHead.service;
    /**
     * 接口
     */
    const interfaceName = request.body.sysHead.interface;
    /**
     * mock 路径
     */
    const mockPath = path.resolve(
      __dirname,
      serviceName,
      interfaceName + '.json',
    );
    /**
     * 引入内容
     */
    if (fs.existsSync(mockPath)) {
      const content = require(mockPath);
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
          msg: 'mock 路径不存在',
        },
        body: {},
      });
    }
  },
};
