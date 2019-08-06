import styled from 'styled-components';

import { robotoMedium, robotoLight } from '~/renderer/mixins';

export const Title = styled.div`
  font-size: 14px;
  ${robotoMedium()};
`;

export const Header = styled.div`
  margin-top: 4px;
  font-size: 20px;
  ${robotoLight()};
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 24px;
  }
`;

export const Control = styled.div`
  margin-left: auto;
`;

export const Sections = styled.div`
  margin-left: ${323 + 56}px;
  width: calc(100% - 300px);
  display: flex;
  flex-flow: column;
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  width: calc(100% - 64px);
  max-width: 800px;
`;
