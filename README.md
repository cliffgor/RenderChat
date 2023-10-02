# Exploring the Synergy of React Native and Stream SDK

- In today's world, real-time communication is a fundamental part of many applications. Whether it's a messaging app, a support chat, or collaborative workspaces, integrating chat functionality is a common requirement. Stream Chat SDK simplifies this process, making it easier than ever to add chat features to your React Native CLI application. In this repo, we'll walk you through the steps to create a chat application using Stream Chat SDK and React Native CLI.

## Dashboard screenshots
## Dashboard showing messages that were sent
![Dashboard showing messages that were sent ](./dashboard-messages.jpg)

- The above screenshot shows messages that are stored inside the stream sdk and were sent by others users
- It shows details like the message id the channel and the user who sent the message

## Dashboard showing the channel types

![Dashboard showing the channel types](./channel-type.jpg)
- The above screenshot shows they channel types you pick to use the StreamSDk in our case we chose the `messaging` which enables one to send chat messages

## Dashboard showing the channel types settings

![Dashboard showing the channel types settings](./message-channelType.jpg)

- The above screenshot shows the messaging settings you can set up for your application

![Dashboard showing the channel types settings](./mchannelType.jpg)

- The above shows a setting used to flag someone 

# Prerequisites
- Before we get started, make sure you have the following prerequisites:

  1. Node.js and npm: Ensure you have Node.js and npm installed on your development machine.
  2. React Native CLI: Set up React Native CLI on your system by following the official documentation.
  3. Stream Chat Account: Sign up for a Stream Chat account at https://getstream.io/chat/ and obtain your API Key.

## Setting Up Your React Native Project
- If you haven't already created a React Native project, you can do so using the following command:
  
  ```
  npx react-native init YourChatApp
  ```
  - Replace YourChatApp with your desired project name.

## Integrating Stream Chat SDK
- Now, let's integrate Stream Chat SDK into your React Native project using the provided code. Copy the code you provided at the beginning of this post into your project. This code sets up a basic chat screen with Stream Chat components.

``` js
import {
  Channel,
  ChannelList,
  Chat,
  MessageInput,
  MessageList,
  OverlayProvider,
} from 'stream-chat-react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ChatContextProvider } from './ChatContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StreamChat } from 'stream-chat';

const API_KEY = 'your api key';
const client = StreamChat.getInstance(API_KEY);

// ...

// Rest of your code remains the same

```
## Configuration

Before running your React Native application, you need to configure it properly. Update the `id` and `name` fields in the `connectUser` method with appropriate user details:

``` js
await client.connectUser(
  {
    id: 'your-user-id',
    name: 'your-user-name',
  },
  client.devToken('your-user-id'),
);

```

- Replace `'your-user-id'` and `'your-user-name'` with the user information you want to use for testing.

## Running Your Chat Application
- With the Stream Chat SDK integrated and configured, you can now run your React Native application:

```
npx react-native run-android # For Android
# or
npx react-native run-ios # For iOS

```
- This command will start your React Native development server and open your application on the specified platform. You should see the chat interface on your device or emulator.

## Benefits of Using React Native with StreamSDK
- Cross-Platform Development: React Native allows you to write code once and deploy it on both iOS and Android platforms. When combined with Stream SDK, you can create real-time chat and activity feed functionality that works seamlessly across both major mobile platforms, reducing development time and effort.

- Reusability: React Native promotes the use of reusable components. When you integrate Stream SDK, you can create custom chat and activity feed components that can be reused throughout your app, maintaining a consistent look and feel.


## Thank you all for coming ☺🥳