import {
  Container,
  Image,
  logo,
} from "./styles"

export const SplashScreen = () => {
  return (
    <Container>
      <Image source={ logo }/>
    </Container>
  )
}