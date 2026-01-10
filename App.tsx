import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme/theme';
import { PokemonProvider } from './src/context/PokemonContext';
import Home from './src/screens/Home';
import Scanner from './src/screens/Scanner';
import PokemonResult from './src/screens/PokemonResult';
import * as S from './src/styles/app.styles';

export default function App() {
  const [tela, setTela] = useState<'home' | 'scanner' | 'result'>('home');

  const onPokemonFound = () => {
    setTela('result');
  };

  const renderTela = () => {
    if (tela === 'scanner') {
      return <Scanner onBack={() => setTela('home')} onPokemonFound={onPokemonFound} />;
    }
    if (tela === 'result') {
      return <PokemonResult onBack={() => setTela('home')} />;
    }
    return <Home onScan={() => setTela('scanner')} />;
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <PokemonProvider>
          <S.Container>{renderTela()}</S.Container>
        </PokemonProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
