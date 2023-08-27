import React from 'react';
import { FlatList } from 'react-native';
import {Tweet} from '../../components/tweet/tweet';
import { Header } from '../../components/header/header';
import { Container } from './timeline.style';

export const mockData = [
    {id: '1', name: 'Renata', username: 'renatinhadev', content: 'tessste', createdAt: '01/02', image: 'https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=826&t=st=1693150565~exp=1693151165~hmac=5f0b2d43a5d920de8600131b386d4385f1c0a52ff2699dfddf4260bf7b3d3dc8', numberOfComments: 2, numberOfRetweets: 2, numberOfLikes: 2, impressions: 2},
    {id: '2', name: 'Renata', username: 'renatinhadev', content: 'Lorem ipsum dolor sit amet', createdAt: '01/02', numberOfComments: 2, numberOfRetweets: 2, numberOfLikes: 2, impressions: 2},
    {id: '3', name: 'Renata', username: 'renatinhadev', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia cursus elit, ', createdAt: '01/02', numberOfComments: 2, numberOfRetweets: 2, numberOfLikes: 2, impressions: 2},
    {id: '4', name: 'Renata', username: 'renatinhadev', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia cursus elit, ', createdAt: '01/02', numberOfComments: 2, numberOfRetweets: 2, numberOfLikes: 2, impressions: 2},
    {id: '5', name: 'Renata', username: 'renatinhadev', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia cursus elit, ', createdAt: '01/02', numberOfComments: 2, numberOfRetweets: 2, numberOfLikes: 2, impressions: 2},
    {id: '6', name: 'Renata', username: 'renatinhadev', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia cursus elit, ', createdAt: '01/02', numberOfComments: 2, numberOfRetweets: 2, numberOfLikes: 2, impressions: 2},
    {id: '7', name: 'Renata', username: 'renatinhadev', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia cursus elit, ', createdAt: '01/02', numberOfComments: 2, numberOfRetweets: 2, numberOfLikes: 2, impressions: 2},
    {id: '8', name: 'Renata', username: 'renatinhadev', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia cursus elit, ', createdAt: '01/02', numberOfComments: 2, numberOfRetweets: 2, numberOfLikes: 2, impressions: 2},
]

export const Timeline = () => {
    return (
    <Container>
        <Header />
        <FlatList data={mockData} renderItem={({ item }) => 
        <Tweet 
            id={item.id}
            content={item.content}
            createdAt={item.createdAt}
            image={item.image}
            name={item.name} 
            username={item.username}
            numberOfComments={item.numberOfComments}
            numberOfRetweets={item.numberOfRetweets}
            numberOfLikes={item.numberOfLikes}
            impressions={item.impressions} 
        />} />
      </Container>
    );
}
