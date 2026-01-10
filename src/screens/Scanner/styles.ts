import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

export const CameraViewport = styled.View`
  width: 280px;
  height: 280px;
  position: relative;
`;

export const Corner = styled.View`
  position: absolute;
  width: 40px;
  height: 40px;
  border-color: #fff;
`;

export const TopLeft = styled(Corner)`
  top: -3px;
  left: -3px;
  border-top-width: 3px;
  border-left-width: 3px;
`;

export const TopRight = styled(Corner)`
  top: -3px;
  right: -3px;
  border-top-width: 3px;
  border-right-width: 3px;
`;

export const BottomLeft = styled(Corner)`
  bottom: -3px;
  left: -3px;
  border-bottom-width: 3px;
  border-left-width: 3px;
`;

export const BottomRight = styled(Corner)`
  bottom: -3px;
  right: -3px;
  border-bottom-width: 3px;
  border-right-width: 3px;
`;

export const Text = styled.Text`
  color: #999;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 20px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const BackButtonText = styled.Text`
  color: #fff;
  font-size: 28px;
`;
