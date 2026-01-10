import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
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

export const IdLabel = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #FFD700;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PokemonImage = styled.Image`
  width: 180px;
  height: 180px;
  margin-bottom: 30px;
`;

export const InfoContainer = styled.View`
  align-items: flex-start;
  width: 100%;
  padding-left: 20px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: #FFD700;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const CacheInfo = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const CacheText = styled.Text`
  font-size: 12px;
  color: #fff;
  margin-bottom: 2px;
`;
