import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import * as S from './styles';

export default function Home({ onScan }: { onScan: () => void }) {
  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;
  const btnFade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, friction: 4, useNativeDriver: true }),
    ]).start();

    Animated.timing(btnFade, { toValue: 1, duration: 600, delay: 400, useNativeDriver: true }).start();
  }, []);

  return (
    <S.Background source={require("../../assets/bg.png")} resizeMode='cover'>
      <S.Container>
        <S.Label>JOÃO ALBERTO RAYMUNDO BORGES</S.Label>
        <S.Container2>
          <Animated.View style={{ opacity: fade, transform: [{ scale }] }}>
            <S.Image source={require("../../assets/logo.png")} />
          </Animated.View>
        </S.Container2>
        <Animated.View style={{ opacity: btnFade }}>
          <S.Button onPress={onScan}>
            <S.ButtonText>Scannear QRCODE</S.ButtonText>
          </S.Button>
        </Animated.View>
      </S.Container>
    </S.Background>
  );
}
