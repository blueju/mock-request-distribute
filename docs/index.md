---
title: 示例
---

## Hello mock-request-distribute!

```jsx
import React, { useState, Fragment } from 'react';
import { Button, Input, Row, Col } from 'antd';
// 只引入不使用，否则修改 src/index.ts 时无法触发热更新
import mockRquestDistribute from 'mock-request-distribute';

export default () => {
  // 响应内容
  const [resText, setResText] = useState('');

  /**
   * 获取用户信息
   */
  function getUserInfo() {
    sendRequest({
      sysHead: {
        service: 'userSVC',
        interface: 'getUserInfo',
      },
    });
  }

  /**
   * 获取应用信息
   */
  function getAppInfo() {
    sendRequest({
      sysHead: {
        service: 'appSVC',
        interface: 'getAppInfo',
      },
    });
  }

  /**
   * 未知服务未知接口
   */
  function unknown() {
    sendRequest({
      sysHead: {
        service: 'unknownSVC',
        interface: 'unknown',
      },
    });
  }

  /**
   * 发送请求
   * @param body http请求体
   */
  function sendRequest(body) {
    fetch('/agrs', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(resJson => {
        setResText(JSON.stringify(resJson, null, 2));
      });
  }

  return (
    <Fragment>
      <fieldset>
        <legend>用户服务</legend>
        <Button type="primary" onClick={getUserInfo}>
          获取用户信息
        </Button>
      </fieldset>
      <fieldset>
        <legend>应用服务</legend>
        <Button type="primary" onClick={getAppInfo}>
          获取应用信息
        </Button>
      </fieldset>
      <fieldset>
        <legend>未知服务</legend>
        <Button type="primary" onClick={unknown}>
          未知接口
        </Button>
      </fieldset>
      <h3>响应内容：</h3>
      <textarea
        defaultValue={resText}
        style={{ width: '100%', height: 250 }}
        readOnly
      />
    </Fragment>
  );
};
```
