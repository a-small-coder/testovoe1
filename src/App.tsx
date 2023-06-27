
import { Box } from '@mantine/core';
import MainRoutes from './routes/MainRoutes';
import { HeaderMenu } from './components/Header';

function App() {

  const links = [
    {
      link: '/posts',
      label: 'Посты',
      links: []
    },
    {
      link: '/tasks',
      label: 'Задачи',
      links: []
    },
    {
      link: '/photos',
      label: 'Фото',
      links: []
    },
  ]

  return (
    <Box>
      <HeaderMenu links={links}/>
      <MainRoutes/>
    </Box>
  )
}

export default App
