import {
  Container,
  Paper,
  Text,
  Button,
  Title,
  Flex,
  Image,
  GridCol,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconBook2 } from "@tabler/icons-react";
import "../App.css";
import "@mantine/core/styles.css";
import ScrollAnimation from "react-animate-on-scroll";
import photo from "../img/logo5.png";
function LandingPage() {
  return (
    <>
      <Container fluid mt={"md"}>
        <Paper m={"md"} className="paperLanding">
          <ScrollAnimation animateIn="fadeIn" duration={3}>
            <Title size="8rem" className="welcome">
              Welcome to <br />
            </Title>
            <Image
              src={photo}
              radius="md"
              h={200}
              w="auto"
              fit="contain"
              className="imageLand"
            />
          </ScrollAnimation>
          <Text fs="italic" size="1rem" ta={"center"} p={"sm"} textWrap="wrap">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </Text>
        </Paper>

        <Paper>
          <Flex
            mih={50}
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Button
              variant="filled"
              color="rgba(3, 0, 0, 1)"
              size="xl"
              radius="xl"
              leftSection={<IconBook2 size={20} />}
            >
              Read More...
            </Button>
            <Button
              variant="filled"
              color="rgba(3, 0, 0, 1)"
              size="xl"
              radius="xl"
              rightSection={<IconArrowRight size={20} />}
            >
              Visit Showroom
            </Button>
          </Flex>
        </Paper>

        <Paper mt={"xl"}>
            <Grid>
                <Grid.Col span={{base: 6}}>

                </Grid.Col>
                <Grid.Col>

                </Grid.Col>
            </Grid>
          <Carousel
            withIndicators
            height={750}
            slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
            slideGap={{ base: 0, sm: "md" }}
            loop
            align="start"
          >
            <Carousel.Slide>
              <Image
                src={photo}
                radius="md"
                h={200}
                w="auto"
                fit="contain"
                className="imageLand"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src={photo}
                radius="md"
                h={200}
                w="auto"
                fit="contain"
                className="imageLand"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src={photo}
                radius="md"
                h={200}
                w="auto"
                fit="contain"
                className="imageLand"
              />
            </Carousel.Slide>
          </Carousel>
        </Paper>
      </Container>
    </>
  );
}

export default LandingPage;
