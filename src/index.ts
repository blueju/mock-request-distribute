import fs from 'fs';
import path from 'path';

/**
 * mock请求分发
 * @param serviceName   服务名
 * @param interfaceName 接口名
 */
export default (serviceName: string = '', interfaceName: string = '') => {
  /**
   * mock路径
   */
  const mockPath: string = path.resolve(
    process.cwd(),
    'mock',
    serviceName,
    interfaceName + '.json',
  );
  // mock路径是否存在
  if (fs.existsSync(mockPath)) {
    /**
     * mock内容
     */
    const content: string = require(mockPath);
    return {
      success: true,
      message: content,
    };
  } else {
    return {
      success: false,
      message: 'mock路径不存在',
    };
  }
};
