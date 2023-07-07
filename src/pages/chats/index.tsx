import Link from 'next/link';

import Layout from '@components/layout';
import type { NextPage } from 'next';

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title="채팅">
      <div className="divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
<<<<<<< HEAD
            <buttonw className="flex px-4 cursor-pointer py-3 items-center space-x-3">
=======
            <button className="flex w-full px-4 cursor-pointer py-3 items-center space-x-3">
>>>>>>> 1128de364baf5c1530d5a48732b9f756d51ba3bd
              <div className="w-12 h-12 rounded-full bg-slate-300" />
              <div className="flex-grow text-left">
                <p className="text-gray-700">Steve Jebs</p>
                <p className="text-sm  text-gray-500">See you tomorrow in the corner at 2pm!</p>
              </div>
            </buttonw>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
