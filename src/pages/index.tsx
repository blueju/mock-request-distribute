import styles from './index.less';
import { Button } from 'antd';
import { request } from 'umi';

export default function IndexPage() {
  /**
   * 登录
   */
  const login = () => {
    request('/agrs', {
      method: 'POST',
      data: {
        sysHead: {
          service: 'userService',
          interface: 'login',
        },
        body: {
          username: 'admin',
          password: '123456',
        },
      },
    });
  };
  /**
   * 注册
   */
  const register = () => {
    request('/agrs', {
      method: 'POST',
      data: {
        sysHead: {
          service: 'userService',
          interface: 'register',
        },
        body: {
          username: 'admin',
          password: '123456',
        },
      },
    });
  };
  /**
   * 获取应用
   */
  const getApps = () => {
    request('/agrs', {
      method: 'POST',
      data: {
        sysHead: {
          service: 'appService',
          interface: 'getApps',
        },
        body: {},
      },
    });
  };
  /**
   * 新增应用
   */
  const addApp = () => {
    request('/agrs', {
      method: 'POST',
      data: {
        sysHead: {
          service: 'appService',
          interface: 'addApp',
        },
        body: {},
      },
    });
  };
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <fieldset>
        <legend>用户服务</legend>
        <Button type="primary" onClick={login}>
          登录接口
        </Button>
        &emsp;
        <Button type="primary" onClick={register}>
          注册接口
        </Button>
      </fieldset>
      <fieldset>
        <legend>应用服务</legend>
        <Button type="primary" onClick={getApps}>
          获取应用接口
        </Button>
        &emsp;
        <Button type="primary" onClick={addApp}>
          新增应用接口
        </Button>
      </fieldset>
    </div>
  );
}
