import { Box, Button } from '@mui/material';
import { BiLogIn } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';

const HeaderComponent = () => {
  return (
    <header className="bg-orange-500 fixed w-full z-30 h-14 px-4 shadow-xl">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className="w-11/12 mx-auto h-full"
      >
        <img src="vite.svg" alt="logo" />
        <Box display="flex" alignItems="center" gap={2}>
          <Button
            variant="contained"
            startIcon={<BsBookmark />}
            className="!normal-case"
            size="small"
            color="secondary"
          >
            Lập lịch trình
          </Button>
          <Button
            variant="contained"
            startIcon={<BiLogIn />}
            className="!normal-case"
            size="small"
            color="secondary"
          >
            Đăng nhập
          </Button>
        </Box>
      </Box>
    </header>
  );
};

export default HeaderComponent;
