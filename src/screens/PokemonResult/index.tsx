import React, { useEffect, useRef } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { usePokemon } from '../../context/PokemonContext';
import * as S from './styles';

export default function PokemonResult({ onBack }: { onBack: () => void }) {
  const { current: pokemon } = usePokemon();
  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.5)).current;
  const infoFade = useRef(new Animated.Value(0)).current;
  const pokemonScale = useRef(new Animated.Value(1)).current;
  
  if (!pokemon) return null;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, friction: 4, useNativeDriver: true }),
      Animated.timing(infoFade, { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  const onPressIn = () => {
    Animated.spring(pokemonScale, { toValue: 1.15, friction: 3, useNativeDriver: true }).start();
  };

  const onPressOut = () => {
    Animated.spring(pokemonScale, { toValue: 1, friction: 3, useNativeDriver: true }).start();
  };

  return (
    <S.Background source={require('../../assets/bg.png')} resizeMode="cover">
      <S.Container>
        <S.BackButton onPress={onBack}>
          <S.BackButtonText>←</S.BackButtonText>
        </S.BackButton>
        <Animated.View style={{ opacity: fade }}>
          <S.IdLabel>ID: {pokemon.id}</S.IdLabel>
        </Animated.View>
        <S.ImageContainer>
          {pokemon.sprites?.front_default && (
            <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
              <Animated.View style={{ transform: [{ scale: pokemonScale }, { scale }], opacity: fade }}>
                <S.PokemonImage source={{ uri: pokemon.sprites.front_default }} />
              </Animated.View>
            </TouchableWithoutFeedback>
          )}
          <Animated.View style={{ opacity: infoFade, width: '100%' }}>
            <S.InfoContainer>
              <S.InfoText>Name: {pokemon.name.toUpperCase()}</S.InfoText>
              <S.InfoText>Type: {pokemon.types?.map((t: any) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)).join(', ')}</S.InfoText>
            </S.InfoContainer>
          </Animated.View>
        </S.ImageContainer>
        {/* <S.CacheInfo>
          <S.CacheText>Anterior: {previous?.name || 'N/A'}</S.CacheText>
          <S.CacheText>Próximo: {next?.name || 'N/A'}</S.CacheText>
        </S.CacheInfo> */}
      </S.Container>
    </S.Background>
  );
}
