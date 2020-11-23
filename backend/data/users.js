import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Dean Li',
    email: 'admin@proshop.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: true,
  },
  {
    name: 'Nexus',
    email: 'nexus@proshop.com',
    password: bcrypt.hashSync('password', 10),
  },
  {
    name: 'Kingo Li',
    email: 'kingo@proshop.com',
    password: bcrypt.hashSync('password', 10),
  },
];

export default users;
