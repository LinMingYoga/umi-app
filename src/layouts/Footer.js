import React from 'react';
import { Layout, Icon } from 'antd';

const { Footer } = Layout;

export default function Footers() {
  return (
    <Footer className='lm-footer'>
      <div className="lm-footer-toast">
        <Icon type="copyright" />&nbsp;2020 LinMing
      </div>
    </Footer>
  )
}
