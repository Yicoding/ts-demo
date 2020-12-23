import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { createUseStyles } from '@wonder-ui/styles';
import useStore from 'src/hooks/useStore';
import routing from "src/routing";


import { Button, InputItem, Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { Flex, Page, Empty } from '@wonder-ui/core';

const useStyles = createUseStyles({
  root: {
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  link: {
    color: '#61dafb'
  }
});

const HomePage = (): JSX.Element => {

  const { store } = useStore();
  console.log('store', store.home)
  const { home } = store;
  home.add()

  const classes = useStyles();

  interface People {
    name: string,
    age?: number
  };

  const [val, setVal] = useState<string | number>();
  const [people, setPeople] = useState<People>({
    name: '1',
    age: 2
  });
  const [dataList, setDataList] = useState<People[]>([]);

  // init
  useEffect(() => {
    setVal('1');
    setVal(3);
    setPeople({
      name: '2'
    });
    setDataList([
      {name: '1', age: 1}
    ]);
  }, []);

  const goOrder = (e: any) => {
    console.log('e', e);
    routing.push('/order');
  };

  return (
    <Page>
      <div className={classes.root}>
        <Button onClick={goOrder}>Button</Button>
        <Flex justify="center">Flex</Flex>
        <InputItem
          type="phone"
          placeholder="input your phone"
        >手机号码</InputItem>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="This is title"
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={<span>this is extra</span>}
            />
            <Card.Body>
              <div>This is content of `Card`</div>
            </Card.Body>
            <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
        <Empty />
      </div>
    </Page>
  );
};

export default inject('store')(observer(HomePage));