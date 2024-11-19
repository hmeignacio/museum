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
  Button
} from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import "../App.css";
import "@mantine/core/styles.css";
import photo from "../img/svg10.svg";
import past from "../img/past1.png";
import present from "../img/present1.png";
import future from "../img/future1.png";
import ReactPlayer from "react-player/lazy";
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { useDisclosure } from "@mantine/hooks";

function ModalText({title, description}){
  const [opened, {open, close}] = useDisclosure(false);
  return(
    <>
      <Modal opened={opened} onClose={close} title={title}>
        <Text>{description}</Text>
      </Modal>

      <Button color="rgba(179, 0, 0, 1)" radius="xl" onClick={open}>Read more...</Button>
    </>
  )
}



function LandingPage() {
  return (
    <>
      <Container fluid mt={"md"}>
        <Paper m={"xl"} className="paperLanding">
          <Grid>
            <Grid.Col span={{ base: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
              <Image
                src={photo}
                radius="md"
                h={450}
                w={600}
                className="imageLand"
              />
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
                      <Image src={past} h={425} alt="past"/>
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">

                      <ModalText 
                      title="Past" 
                      description=" The 2000-2010 era greatly changed the social lives of
                      Filipinos. Social media beauty trends inspired people to
                      try new looks and connect with others who had similar
                      interests, promoting self-expression. Reality TV brought
                      viewers together, creating emotional connections and
                      discussions about shared experiences. Talent shows and
                      karaoke became popular ways for friends to socialize and
                      express their creativity, strengthening community bonds.
                      The rise of text messaging made communication easier,
                      helping people stay in touch and share their lives.
                      Overall, these trends reshaped how Filipinos interacted,
                      blending digital and in-person connections in vibrant new
                      ways."/>
                      <Badge color="rgba(179, 0, 0, 1)" component="a" href="https://www.artsteps.com/view/673422d64d1a5c9a4cc569c5"
                    target="_blank">
                        go to virtual showroom
                      </Badge>
                    </Group>

                    <Text mt="xs" c="white" size="sm">
                     
                    </Text>
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
                      <Image src={present} h={425} alt="No way!" />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">

                      <ModalText 
                      title="Present" 
                      description=" In this present time, social media has really changed how
                      we socialize in the Philippines today. The makeup scene is
                      booming, with people sharing their routines and
                      transformations online, creating a strong community
                      through hashtags. Unlike before, when we just watched
                      videos, we now actively discuss and react to content on
                      platforms like TikTok and Instagram. Performance culture
                      has shifted from local events to global platforms,
                      allowing anyone to showcase their talents and even make a
                      career out of it. Plus, communication has evolved, with
                      social media providing more interactive ways to connect,
                      like video calls and stories, instead of just texting. To
                      conclude with, these changes have built a lively,
                      connected community where we can express ourselves, share
                      our experiences, and influence each other across the
                      world."/>
                      <Badge color="rgba(179, 0, 0, 1)" component="a" href="https://www.artsteps.com/view/673422d64d1a5c9a4cc569c5"
                    target="_blank">
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
                      <Image src={future} h={425} alt="No way!" />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">

                      <ModalText 
                      title="Future" 
                      description=" In this present time, social media has really changed how
                      we socialize in the Philippines today. The makeup scene is
                      booming, with people sharing their routines and
                      transformations online, creating a strong community
                      through hashtags. Unlike before, when we just watched
                      videos, we now actively discuss and react to content on
                      platforms like TikTok and Instagram. Performance culture
                      has shifted from local events to global platforms,
                      allowing anyone to showcase their talents and even make a
                      career out of it. Plus, communication has evolved, with
                      social media providing more interactive ways to connect,
                      like video calls and stories, instead of just texting. To
                      conclude with, these changes have built a lively,
                      connected community where we can express ourselves, share
                      our experiences, and influence each other across the
                      world."/>
                      <Badge color="rgba(179, 0, 0, 1)" component="a" href="https://www.artsteps.com/view/673422d64d1a5c9a4cc569c5"
                    target="_blank">
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

        <Paper mt={"xl"}>
          <Grid>
            <Grid.Col span={{ base: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
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
                <CarouselSlide>
                  <Card
                    shadow="sm"
                    padding="xl"
                    component="a"
                    href="https://www.artsteps.com/view/6735a66475b090e14b92e764"
                    target="_blank"
                    h={600}
                    radius={"md"}
                    bg={"black"}
                  >
                    <Card.Section>
                      <ReactPlayer
                        height={300}
                        width={"100%"}
                        url={"https://www.youtube.com/shorts/uDE5-rkaXbc"}
                        controls
                        playbackRate={1}
                      />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                      <Text fw={700} size="lg" mt="md" c={"white"}>
                        Future
                      </Text>
                      <Badge color="rgba(179, 0, 0, 1)">
                        go to virtual showroom
                      </Badge>
                    </Group>

                    <Text mt="xs" c="white" size="sm">
                      By 2030, Filipino social life has become more connected
                      and immersive. People can use social media and holograms
                      to interact as if they’re face-to-face, no matter the
                      distance. Beauty and performance trends reach a global
                      audience, letting Filipinos connect with others around the
                      world. VR karaoke, virtual talent shows, and interactive
                      livestreams make self-expression fun and engaging, while
                      AI helps people find communities with similar interests.
                      This blend of digital and real-life interactions has
                      created a closer, more expressive Filipino society, where
                      connecting and sharing is easier than ever.
                    </Text>
                  </Card>
                </CarouselSlide>
              </Carousel>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
              <Paper px={"md"}>
                <Title>Features</Title>
                <Space h={"md"} />
                <List
                  spacing="xs"
                  size="sm"
                  center
                  icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                      <IconCircleCheck
                        style={{ width: rem(16), height: rem(16) }}
                      />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    Clone or download repository from GitHub
                  </List.Item>
                  <List.Item>Install dependencies with yarn</List.Item>
                  <List.Item>
                    To start development server run npm start command
                  </List.Item>
                  <List.Item>
                    Run tests to make sure your changes do not break the build
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color="blue" size={24} radius="xl">
                        <IconCircleDashed
                          style={{ width: rem(16), height: rem(16) }}
                        />
                      </ThemeIcon>
                    }
                  >
                    Submit a pull request once you are done
                  </List.Item>
                </List>
              </Paper>
            </Grid.Col>
          </Grid>
        </Paper>

        <Paper mt={"xl"} id="mission" className="objectives">
          <Grid>
            <Grid.Col
              span={{ base: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
              px={"sm"}
            >
              <Paper padding="sm">
                <Title order={2} className="missionTitles">
                  Mission
                </Title>
                <Space h={"md"} />
                <Text>
                  Our mission is to document and present the cultural
                  transformations of the 2000s in the Philippines through an
                  interactive, virtual museum. We aim to educate, inspire, and
                  engage students, educators, and cultural enthusiasts by
                  showcasing how technology, media, and performance shaped
                  emotions, identities, and social interactions during this
                  decade. Our museum fosters critical reflection on the
                  relationship between culture and technology while promoting
                  inclusivity and representation.
                </Text>
              </Paper>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
              px={"sm"}
            >
              <Paper padding="sm">
                <Title order={2} className="missionTitles">
                  Vision
                </Title>
                <Space h={"md"} />
                <Text>
                  To be the leading digital platform for exploring the
                  intersection of technology, culture, and emotion in the
                  Philippines, offering a space that inspires educational
                  institutions to integrate these insights into their curricula
                  and empowers students to critically engage with media and
                  cultural trends of the past and present.
                </Text>
              </Paper>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
              px={"sm"}
            >
              <Paper padding="sm">
                <Title order={2} className="missionTitles">
                  Objectives
                </Title>
                <Space h={"md"} />
                <Text>
                  To create an immersive virtual museum that highlights the
                  evolution of affect, senses, feelings, performance, and
                  technology in the Philippines, providing a key learning tool
                  for higher education institutions to enrich students’
                  understanding of cultural shifts in the digital age.
                </Text>
              </Paper>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default LandingPage;
