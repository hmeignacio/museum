import {
  Container,
  Paper,
  Text,
  Image,
  Grid,
  Card,
  Title,
  Space,
  Divider,
  List,
  Group,
  Badge,
  ThemeIcon,
  rem,
  Modal,
  Button,
} from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import "../App.css";
import "@mantine/core/styles.css";
import photo from "../img/welcome.svg";
import adaptive from "../img/Adaptive_S2.svg";
import dynamic from "../img/Dynamic_S2.svg";
import immersive from "../img/Immersive_S2.svg";
import contributors from "../img/new - contributors.svg";
import goals from "../img/Core Values_S3.svg";
import mission from "../img/Mission_S3.png";
import vision from "../img/Vision_S3.svg";
import ReactPlayer from "react-player/lazy";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

function ModalText({ title, description }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title={title}>
        <Text>{description}</Text>
      </Modal>

      <Button color="rgba(179, 0, 0, 1)" radius="xl" onClick={open}>
        Read more...
      </Button>
    </>
  );
}

function LandingPage() {
  return (
    <>
      <Container fluid mt={"md"}>
        <Paper m={"xl"} className="paperLanding">
          <Grid>
            <Grid.Col span={{ base: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
              <Image src={photo} radius="md" h={500} w={600} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 12, md: 7, lg: 7, xl: 7 }}>
              <Carousel
                slideSize="90%"
                height={500}
                slideGap="xl"
                controlsOffset="xl"
                dragFree
                withIndicators
                align={"center"}
                controlSize={50}
              >
                <Carousel.Slide>
                  <Card
                    shadow="lg"
                    padding="xl"
                    h={600}
                    radius={"md"}
                    bg={"black"}
                  >
                    <Card.Section>
                      <ReactPlayer
                        height={425}
                        width={"100%"}
                        url={"https://youtu.be/M986RAE5V7E?feature=shared"}
                        controls
                        playbackRate={1}
                        loop
                      />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                      <ModalText
                        title="Past"
                        description=" The 2000-2010 decade significantly transformed Filipino social, cultural, and economic life through the rise of social media, reality TV, and platforms like YouTube, fostering self-expression and new communities. This era changed Filipino society by blending new digital tools with cultural shifts, reshaping how people connect, express themselves, and respond to global issues."
                      />
                      <Badge
                        color="rgba(179, 0, 0, 1)"
                        component="a"
                        href="https://www.artsteps.com/view/673422d64d1a5c9a4cc569c5"
                        target="_blank"
                      >
                        go to virtual showroom
                      </Badge>
                    </Group>

                    <Text mt="xs" c="white" size="sm"></Text>
                  </Card>
                </Carousel.Slide>

                <Carousel.Slide>
                  <Card
                    shadow="lg"
                    padding="xl"
                    h={700}
                    radius={"md"}
                    bg={"black"}
                  >
                    <Card.Section>
                      <ReactPlayer
                        height={425}
                        width={"100%"}
                        url={"https://youtu.be/ixD336h5qYw"}
                        controls
                        playbackRate={1}
                        loop
                      />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                      <ModalText
                        title="Present"
                        description=" Social media and digital tools are transforming Filipino life by connecting people, driving economic growth, raising awareness on important social issues, and improving healthcare access, all of which are shaping a more connected, inclusive, and innovative future."
                      />
                      <Badge
                        color="rgba(179, 0, 0, 1)"
                        component="a"
                        href="https://www.artsteps.com/view/673422d64d1a5c9a4cc569c5"
                        target="_blank"
                      >
                        go to virtual showroom
                      </Badge>
                    </Group>
                  </Card>
                </Carousel.Slide>

                <Carousel.Slide>
                  <Card
                    shadow="lg"
                    padding="xl"
                    h={700}
                    radius={"md"}
                    bg={"black"}
                  >
                    <Card.Section>
                      <ReactPlayer
                        height={425}
                        width={"100%"}
                        url={"https://youtu.be/KshK2aVTm8Y?feature=shared"}
                        controls
                        playbackRate={1}
                        loop
                      />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                      <ModalText
                        title="Future"
                        description=" By 2030, Filipino social life will be deeply connected through advanced technologies like holograms, VR, and AI, making it easier to interact and share experiences globally, driving global trends, economic growth, activism, and digital healthcare, while facing challenges like security and turning online support into real-world change."
                      />
                      <Badge
                        color="rgba(179, 0, 0, 1)"
                        component="a"
                        href="https://www.artsteps.com/view/673422d64d1a5c9a4cc569c5"
                        target="_blank"
                      >
                        go to virtual showroom
                      </Badge>
                    </Group>
                  </Card>
                </Carousel.Slide>
              </Carousel>
            </Grid.Col>
          </Grid>
        </Paper>

        <Divider></Divider>

        <Paper mb={"xl"}>
          <Space h={"xl"} />
        </Paper>

        <Paper mt={"xl"} id="features">
          <Grid>
            <Grid.Col span={{ base: 12, sm: 12, md: 7, lg: 7, xl: 7 }}>
              <Carousel
                slideSize="100%"
                height={600}
                slideGap="sm"
                controlsOffset="xl"
                dragFree
                withIndicators
                align={"center"}
                controlSize={50}
              >
                <CarouselSlide>
                  <Image src={adaptive} radius="md" h={600} w={"100%"} />
                </CarouselSlide>
                <CarouselSlide>
                  <Image src={dynamic} radius="md" h={600} w={"100%"} />
                </CarouselSlide>
                <CarouselSlide>
                  <Image src={immersive} radius="md" h={600} w={"100%"} />
                </CarouselSlide>
              </Carousel>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
              <Paper px={"md"}>
                <Title className="featureTitle" >Features</Title>
                <Space h={"md"} />
                <List
                  spacing="xl"
                  size="sm"
                  center
                  icon={
                    <ThemeIcon color="teal" size={30} radius="xl">
                      <IconCircleCheck
                        style={{ width: rem(20), height: rem(20) }}
                      />
                    </ThemeIcon>
                  }
                  className="listItems"
                >
                  <List.Item>
                    Fully interactive 360-degree tours that let visitors “walk”
                    through museum spaces.
                  </List.Item>
                  <List.Item>
                    Clickable hotspots for additional insights on artifacts,
                    exhibits, or themes.
                  </List.Item>
                  <List.Item>
                    Access detailed museum artifacts that users can zoom into,
                    and interact with, providing a closer look at each item’s
                    craftsmanship.
                  </List.Item>
                  <List.Item>
                    Augmented Reality features bringing history to life by
                    projecting historical events, scenes, or characters into
                    real-world spaces using AR technology.
                  </List.Item>
                  <List.Item>
                    QR codes on displays allow users to access exclusive video
                    content, interviews with curators, or immersive storytelling
                    related to the artifacts.
                  </List.Item>
                  <List.Item>
                    A responsive website and virtual showroom that seamlessly
                    adjusts to all screen sizes, from smartphones to large
                    tablets and desktop screens.
                  </List.Item>
                  <List.Item >
                    This design ensures that the virtual museum experience is
                    engaging, educational, and accessible, whether viewed from a
                    phone, tablet, or desktop computer.
                  </List.Item>
                </List>
              </Paper>
            </Grid.Col>
          </Grid>
        </Paper>

        <Paper mt={"xl"} mb={"xl"} id="about" className="objectives" >
          <Grid>
            <Grid.Col
              span={{ base: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
              px={"sm"}
            >
              <Title className="contribute" >The Contributors</Title>
              <Space h={"md"} />
              <Image src={contributors} radius="md" h={420} w={700}/>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
              px={"sm"}
            >
              <Paper padding="sm">
                <Carousel 
                slideSize="100%"
                height={485}
                slideGap="sm"
                controlsOffset="xl"
                dragFree
                withIndicators
                align={"center"}
                controlSize={50}>
                  <CarouselSlide>
                  <Image src={mission} radius="md" h={450} w={700}/>
                  </CarouselSlide>
                  <CarouselSlide>
                  <Image src={vision} radius="md" h={435} w={700}/>
                  </CarouselSlide>
                  <CarouselSlide>
                  <Image src={goals} radius="md" h={435} w={700}/>
                  </CarouselSlide>
                </Carousel>
              </Paper>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default LandingPage;
