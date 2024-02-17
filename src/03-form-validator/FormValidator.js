import { useState } from 'react'

export default function FormValidator() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const errors = handleErrors()
    setMessage(errors.length ? errors.join(', ') : 'User created!')
  };

  const handleErrors = () => {
    const errors = [];
    if (!email || !password || !passwordConfirm)
      errors.push('All fields are required');

    if (!email.includes('@') && !email.length !== 1) {
      errors.push('Email must contain @');
    }
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters');
    }
    if (password !== passwordConfirm) {
      errors.push('Passwords must match');
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      {message}
      <input type='submit' value='Submit' />
    </form>
  )
}
