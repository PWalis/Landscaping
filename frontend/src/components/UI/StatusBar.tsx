import React from 'react';
import { StatusBar, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface StatusBarProps {
  backgroundColor: string;
}

const StatusBarComponent: React.FC<StatusBarProps> = ({ backgroundColor }) => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={[backgroundColor, backgroundColor]}
      style={{
        height: Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight,
      }}
    >
      <StatusBar translucent backgroundColor="transparent" />
    </LinearGradient>
  );
};

export default StatusBarComponent;
