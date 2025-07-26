
import './App.css';

import { Profile } from './profile/profile';
import user from "./user.json"

import { Transactions } from './transactions/transactions';
import transactions from "./transactions.json"

import { Statistics } from './Statistics/Statistics';
import Data from "./data.json"

import { Friends } from './FriendList/FriendList';
import friends from './friends.json'

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Transactions items={transactions} />

      <Statistics title="upload stats" status={Data} />
      <Friends friends={friends} />
    </div>
  );
}

export default App;
