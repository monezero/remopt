import React, { useEffect, useState } from 'react';
import { Camera, useCameraDevice, useCodeScanner } from 'react-native-vision-camera';
import { Alert, Linking } from 'react-native';
import { usePokemon } from '../../context/PokemonContext';
import * as S from './styles';

export default function Scanner({ onBack, onPokemonFound }: { onBack: () => void; onPokemonFound: () => void }) {
  const [permission, setPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const device = useCameraDevice('back');
  const { fetchPokemon } = usePokemon();

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      if (status === 'granted') {
        setPermission(true);
      } else {
        Alert.alert('Permissão negada', 'Precisamos de acesso à câmera para escanear QR codes', [
          { text: 'Configurações', onPress: () => Linking.openSettings() },
          { text: 'Voltar', onPress: onBack },
        ]);
      }
    })();
  }, []);

  const getPokemonId = (data: string) => {
    const match = data.match(/id-pokemon-remopt:\s*(\d+)/i);
    return match ? match[1] : null;
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: (codes) => {
      if (scanned || codes.length === 0) return;
      const qrData = codes[0].value || '';
      const id = getPokemonId(qrData);
      if (id) {
        setScanned(true);
        fetchPokemon(parseInt(id))
          .then(() => onPokemonFound())
          .catch(() => {
            Alert.alert('Erro', 'Pokémon não encontrado');
            setScanned(false);
          });
      }
    },
  });

  if (!permission || !device) {
    return (
      <S.Container>
        <S.Overlay>
          <S.Text>Carregando câmera...</S.Text>
        </S.Overlay>
        <S.BackButton onPress={onBack}>
          <S.BackButtonText>←</S.BackButtonText>
        </S.BackButton>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Camera style={{ flex: 1 }} device={device} isActive={true} codeScanner={codeScanner} />
      <S.Overlay>
        <S.CameraViewport>
          <S.TopLeft />
          <S.TopRight />
          <S.BottomLeft />
          <S.BottomRight />
        </S.CameraViewport>
        <S.Text>Aponte a câmera para o código QR</S.Text>
      </S.Overlay>
      <S.BackButton onPress={onBack}>
        <S.BackButtonText>←</S.BackButtonText>
      </S.BackButton>
    </S.Container>
  );
}
