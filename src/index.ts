import fs from 'fs';
import path from 'path';
import express from 'express';

/**
 * mock请求分发
 * @param request       express's request
 * @param response      express's response
 * @param serviceName   服务名
 * @param interfaceName 接口名
 */
export default (
  request: express.Request,
  response: express.Response,
  serviceName: string = '',
  interfaceName: string = '',
) => {
  /**
   * mock路径
   */
  const mockPath: string = path.resolve(
    __dirname,
    serviceName,
    interfaceName + '.json',
  );
  console.log('453453');

  // mock路径是否存在
  if (fs.existsSync(mockPath)) {
    /**
     * mock内容
     */
    const content: string = require(mockPath);
    const xxx = response.json(content);
    console.log(xxx);
  } else {
    console.log('mock路径不存在');
  }
};
