import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme/theme';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import * as S from './src/styles/app.styles';

export default function App() {
  const [screen, setScreen] = useState<'home' | 'profile' | 'settings'>('home');

  const renderScreen = () => {
    if (screen === 'home') return <Home />;
    if (screen === 'profile') return <Profile />;
    return <Settings />;
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <S.Container>
          <S.Header>
            <S.TabButton onPress={() => setScreen('home')}>
              <S.TabButtonText active={screen === 'home'}>Home</S.TabButtonText>
            </S.TabButton>
            <S.TabButton onPress={() => setScreen('profile')}>
              <S.TabButtonText active={screen === 'profile'}>Profile</S.TabButtonText>
            </S.TabButton>
            <S.TabButton onPress={() => setScreen('settings')}>
              <S.TabButtonText active={screen === 'settings'}>Settings</S.TabButtonText>
            </S.TabButton>
          </S.Header>

          {renderScreen()}
        </S.Container>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
