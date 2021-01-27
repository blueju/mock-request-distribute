import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  mock: {
    /**
     * 忽略 mock 下文件夹内的文件
     * 参考：https://github.com/umijs/umi/pull/1956
     */
    exclude: ['mock/*/*'],
  },
});
