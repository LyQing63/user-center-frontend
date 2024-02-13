import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import {GITHUB_URL} from "@/constants";

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'github',
          title: <><GithubOutlined />灵檠</>,
          href: GITHUB_URL,
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
