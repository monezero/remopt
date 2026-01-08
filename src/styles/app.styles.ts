import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(p) => p.theme.colors.background};
`;

export const Header = styled.View`
  height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${(p) => p.theme.colors.primary};
`;

export const TabButton = styled.TouchableOpacity`
  padding: 8px 12px;
`;

export const TabButtonText = styled.Text<{ active?: boolean }>`
  color: ${(p) => p.theme.colors.background};
  font-weight: 700;
  opacity: ${(p) => (p.active ? 1 : 0.85)};
`;
