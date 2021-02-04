// 模拟引入
// @ts-ignore
import mockRquestDistribute from '../src/index.ts';
import express from 'express';

export default {
  'POST /agrs': (req: express.Request, res: express.Response) => {
    console.log('---------');
    mockRquestDistribute(req, res);
    // // 添加跨域请求头
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.end('ok');
  },
};
