import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  form: {
    width: 320,
    marginLeft: 'auto',
    marginTop: '100px',
    marginRight: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 25,
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Почта"
          variant="outlined"
          size="small"
          style={styles.label}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {/* <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label> */}

        <TextField
          id="outlined-basic"
          label="Пароль"
          variant="outlined"
          size="small"
          style={styles.label}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        {/* <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label> */}

        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={styles.button}
        >
          Войти
        </Button>

        {/* <button type="submit">Войти</button> */}
      </form>
    </div>
  );
}
