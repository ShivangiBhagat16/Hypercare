import React, { useEffect, useState } from 'react';
import { User } from './user.model';
import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy, Suspense } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
const UserCard = lazy(() => import('./components/UserCard'));
const UserModal = lazy(() => import('./components/UserModal'));

const App: React.FC = () => {
  const [users, setUsers] =  useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // const [error, setError] = useState<{error: any}>({error: any})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  // to fetch user data, calling API using fetch
  useEffect(
    function(){
      async function fetchUsersData() {
        setIsLoading(true); // set loading true until we fetch the complete API
        setError(''); // set error to empty before every search

        try {
          const response = await fetch('https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users');
          const resultedData = await response.json();
          setUsers(resultedData.data.users);
        } catch (err: any) {
          if(err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false); // set loading false after the fetch API is completed 
        }
      }
      fetchUsersData();
    }, 
    []
  );
  
  // function to open selected user Modal
  const handleOpenModal = (userId: string) => {
    const user = users.find((user) => user.id === userId) || null;
    setSelectedUser(user);
  };

  // function to close selected user Modal
  const handleCloseModal = () => {
    setSelectedUser(null);
  };
  return (
      <div className='main p-4'>
        {isLoading && <LoadingAnimation />}
        {/* {error && <Error error={{...error}} />} */}
         <Suspense fallback={<LoadingAnimation />}>
            <UserCard users={users} onOpen={handleOpenModal}  />
            <UserModal selectedUser={selectedUser} onClose={handleCloseModal} />
         </Suspense>
    </div>
  );
};

export default App;
