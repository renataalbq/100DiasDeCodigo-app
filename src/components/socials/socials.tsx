import { FontAwesome5 } from '@expo/vector-icons';
import { Linking } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

type SocialsProps = {
  icon: React.ComponentProps<typeof FontAwesome5>['name'];
  url: string;
};

export const Socials = ({ icon, url }: SocialsProps) => {

    const LinkIcon = () => {
        Linking.openURL(url);
    }

  return (
    <TouchableOpacity onPress={LinkIcon}>
      <FontAwesome5 name={icon} size={28} color="white" />
    </TouchableOpacity>
  );
};

