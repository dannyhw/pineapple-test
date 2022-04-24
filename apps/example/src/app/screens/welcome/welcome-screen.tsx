import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import { NavigatorParamList } from '../../navigators';
import { Box, Heading, VStack, Image, View, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

export const WelcomeScreen: FC<
  StackScreenProps<NavigatorParamList, 'welcome'>
> = observer(({ navigation }) => {
  return (
    <Box flex={1}>
      <Box
        position="absolute"
        left="0"
        right="0"
        top="0"
        bottom="0"
        bg={{
          linearGradient: {
            colors: ['yellow.300', 'black'],
            start: [0.5, 0],
            end: [0.5, 1],
          },
        }}
      />
      <Box px="4" pt="4">
        <SafeAreaView>
          <VStack space={6}>
            <Heading size="sm" alignSelf="center">
              POWERED BY PINEAPPLE EXPRESS
            </Heading>
            <Heading size="xl" alignSelf="center" textAlign="center">
              Your new app, <Text fontStyle="italic">almost</Text>! {'\n'}
              Ready for launch.
            </Heading>
            <View alignItems="center" width="full">
              <Image
                alt="Pineapple Express"
                source={require('./pineapple-logo.png')}
                size={300}
              />
            </View>
            <VStack space="6">
              <Text lineHeight="lg" color="gray.200" fontSize="sm">
                This probably isn't what your app is going to look like. Unless
                your designer handed you this screen and, in that case,
                congrats! You're ready to ship.
              </Text>
              <Text lineHeight="lg" color="gray.300" fontSize="sm">
                For everyone else, this is where you'll see a live preview of
                your fully functioning app using Ignite.
              </Text>
            </VStack>
          </VStack>
        </SafeAreaView>
      </Box>
    </Box>
  );
});
