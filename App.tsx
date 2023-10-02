import {
  Channel,
  ChannelList,
  Chat,
  MessageInput,
  MessageList,
  OverlayProvider,
} from 'stream-chat-react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {ChatContextProvider} from './ChatContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StreamChat} from 'stream-chat';

const API_KEY = 'mq4xdbsz8929';
const client = StreamChat.getInstance(API_KEY);

const ChatScreen = (props: any) => {
  const [isReady, setIsReady] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<any>(null);

  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: 'your-user-id',
          name: 'your-user-name',
        },
        client.devToken('your-user-id'),
      );
      console.log('connected');
      // Create a Channel on stream sdk
      const channel = client.channel('messaging', 'your-user-id', {
        name: 'General',
      });
      await channel.watch();

      setIsReady(true);
    };
    connectUser();

    return () => client.disconnectUser();
  }, []);

  const handleChannelSelect = channel => {
    setSelectedChannel(channel);
  };

  if (!isReady) {
    return null;
  }
  return (
    <GestureHandlerRootView style={styles.flex}>
      <ChatContextProvider>
        <OverlayProvider>
          <View style={styles.channelListContainer}>
            <Chat client={client}>
              {selectedChannel ? (
                <Channel channel={selectedChannel}>
                  <MessageList />
                  <MessageInput />
                  <View style={styles.searchContainer} />
                </Channel>
              ) : (
                <ChannelList onSelect={handleChannelSelect} />
              )}
            </Chat>
          </View>
        </OverlayProvider>
      </ChatContextProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  channelListContainer: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    marginTop: 50,
    paddingTop: 0,
  },
  emptyIndicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  emptyIndicatorText: {paddingTop: 28},
  flex: {
    flex: 1,
  },
  searchContainer: {
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    flexDirection: 'row',
    margin: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    includeFontPadding: false,
    padding: 0,
    paddingHorizontal: 10,
    paddingTop: 0,
    textAlignVertical: 'center',
  },
  inputBox: {
    flex: 1,
    fontSize: 14,
    includeFontPadding: false,
    padding: 0,
    paddingRight: 16,
    paddingTop: 0,
    textAlignVertical: 'center',
  },
});

export default ChatScreen;
