import styled from 'styled-components'

import coverBackground from './../../assets/Cover.png'
import logoImage from './../../assets/Logo.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  background: url(${coverBackground}) no-repeat center;
  background-size: cover;
  background-position: center;
`

export const HeaderContent = styled.section`
  max-width: 54rem;
  width: 100%;
  height: 18.5rem;
  margin: 0 auto;
  padding-top: 4rem;
`

export const Logo = styled.div`
  width: 9.25rem;
  height: 6.125rem;
  background: url(${logoImage}) center no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
`
