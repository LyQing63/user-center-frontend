import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import { Outlet } from 'umi';

const Admin: React.FC = () => {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
};
export default Admin;
