import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
  flex: 1;
  `;
export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const Container2 = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${(p) => p.theme.colors.text};
  font-weight: 700;
`;

export const Label = styled.Text`
  position: absolute;
  top: 60px;
  align-self: center;
  font-size: 16px;
  color: red;
  z-index: 1;
`;
export const Image = styled.Image`
  width: 200px;
  height: 200px;
  resize-mode: contain;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  height: 80px;
  width: 250px;
  border-radius: 5px;
  align-self: center;
  margin-bottom: 120px;
  border-left-width: 2px;
  border-right-width: 5px;
  border-top-width: 2px;
  border-bottom-width: 5px;
  border-color: #000;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: 600;
`;