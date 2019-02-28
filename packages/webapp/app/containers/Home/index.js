import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Article from '~/app/components/Article';
import messages from './messages';

import { isNone } from '@kchiku/helpers';
import { A } from '@kchiku/shared_components';

const BottomZone = styled.div`
  margin-top: 30px;
  text-align: center;
`;

class Home extends React.Component {
  render() {
    const {
      home: { data },
      query,
    } = this.props;
    const newQuery = {
      ...query,
      page: query.page + 1,
    };
    const dataLength = data.length;
    console.log('mlmlmlml', isNone(null));

    return (
      <div>
      {data.map((item, index) => (
          <Article
        key={index}
        order={(query.page - 1) * dataLength + index + 1}
        point={item.points}
        title={item.title}
        postTime={item.time_ago}
        url={item.url}
        commentCount={item.comments_count}
        user={item.user}
        />
  ))}
  <BottomZone>
    <Link href={{ pathname: '/', query: newQuery }} passHref>
    <A>{messages.loadMore}</A>
    </Link>
    </BottomZone>
    </div>
  );
  }
}

export default Home;
