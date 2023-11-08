import { Container, Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { REGULATIONS } from './constant';
import QR from '@/assets/QR.jpg';

const FooterComponent = () => {
  return (
    <footer className="pt-5 pb-16 border-t-2 border-orange-700">
      <Container>
        <Box
          display="flex"
          alignItems="flex-end"
          gap={3}
          justifyContent="space-between"
          className="mb-10"
        >
          <Typography variant="body2">Thông tin chính sách</Typography>

          <Box className="w-5/6 h-[2px] bg-slate-700 float-right"></Box>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className="pt-10">
              Baydidau.vn
            </Typography>
            <Typography variant="body2">
              Văn phòng: Số 40 Mỹ Khê 7, Phước Mỹ, Sơn Trà, Đà Nẵng
            </Typography>
            <Typography variant="body2">Email: idbaydidau@gmail.com</Typography>
            <Typography variant="body2">Hotline: 0935699815</Typography>
            <Typography variant="body2">
              Địa chỉ tên miền: baydidau.vn
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className="!mb-5">
              Quy định
            </Typography>
            <ul>
              {REGULATIONS.map((r) => (
                <Link to={r.link} key={r.label}>
                  <li>
                    <Typography variant="body2">{r.label}</Typography>
                  </li>
                </Link>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className="!mb-5">
              Đăng ký cộng tác viên ngay{' '}
            </Typography>
            <img width={150} src={QR} alt="qr" />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default FooterComponent;
