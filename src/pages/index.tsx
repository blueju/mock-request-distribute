import styles from './index.less';
// antd 是 umi/dumi 初始化工程中自带的
import { Button, Input, Row, Col } from 'antd';
import { request } from 'umi';
import { useState } from 'react';

export default function IndexPage() {
  const [resText, setResText] = useState('');
  /**
   * 登录
   */
  const login = () => {
    request('/agrs', {
      method: 'POST',
      data: {
        sysHead: {
          service: 'userSVC',
          interface: 'login',
        },
        body: {
          username: 'admin',
          password: '123456',
        },
      },
    }).then((res) => {
      setResText(JSON.stringify(res, null, 2));
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
          service: 'userSVC',
          interface: 'register',
        },
        body: {
          username: 'admin',
          password: '123456',
        },
      },
    }).then((res) => {
      setResText(JSON.stringify(res, null, 2));
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
          service: 'appSVC',
          interface: 'getApps',
        },
        body: {},
      },
    }).then((res) => {
      setResText(JSON.stringify(res, null, 2));
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
          service: 'appSVC',
          interface: 'addApp',
        },
        body: {},
      },
    }).then((res) => {
      setResText(JSON.stringify(res, null, 2));
    });
  };
  return (
    <>
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
      <br />
      <Row>
        <Col span={12}>
          <h2>响应内容：</h2>
          <Input.TextArea autoSize={{ minRows: 6 }} value={resText} />
        </Col>
      </Row>
    </>
  );
}
