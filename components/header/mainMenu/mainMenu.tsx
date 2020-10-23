import React, {useState} from 'react';
import {Menu, Row, Col, Button} from 'antd';
import Link from "next/link";
// type CardProps = {
//     title: string,
//     paragraph: string
// }
function MainMenu() {
    const {SubMenu} = Menu;
    const [current, setCurrent] = useState('mail');
    return (
        <Row>
            <Col span={16}>
                <Menu selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="logo">
                        <Link href='/'>
                            <a>
                                <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/spinx-logo.png"
                                     width="136" height="46" alt="Painting web development"
                                     title="Painting Logo" />
                            </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="mainPage">
                        <Link href='/'>
                            <a>
                                صفحه اصلی
                            </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="buyArt">
                        <Link href='/'>
                            <a>
                                خرید اثر
                            </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="aboutUs">
                        <Link href='/'>
                            <a>
                                درباره ما
                            </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="contactUs">
                        <Link href='/'>
                            <a>
                                تماس با ما
                            </a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Col>
            <Col span={8}>
                <div className='leftMenu'>
                    <div>
                        <Link href='/'>
                            <a>
                                <Button type='primary'>
                                    ورود
                                </Button>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/'>
                            <a>
                               سزچ
                            </a>
                        </Link>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default MainMenu;