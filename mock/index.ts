// 模拟引入
import mockRquestDistribute from '../src/index';
import express from 'express';

export default {
  'POST /agrs': (req: express.Request, res: express.Response) => {
    const mockReuslt = mockRquestDistribute(
      req.body.sysHead.service,
      req.body.sysHead.interface,
    );
    if (mockReuslt.success) {
      res.json(mockReuslt.message);
    } else {
      res.json({
        sysHead: {
          code: '-1',
          msg: 'mock路径不存在',
        },
      });
    }
  },
};
