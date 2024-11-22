import { Grid, Image, NavLink, Paper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../img/svg3.svg";
import "../App.css";
import { IconHome2, IconStar, IconUsersGroup } from '@tabler/icons-react';

function Navbarpage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <nav className="navContainer">
        <Paper>
          <Grid>
            <Grid.Col span={{base: 12, sm: 12, md: 1, lg: 1, xl: 1}}>
              <Image src={logo} radius="md" h={65} w={125} />
            </Grid.Col>
            <Grid.Col span={{base: 12, sm: 12, md: 1.25, lg: 1.25, xl: 1}}>
              {" "}
              <NavLink
                href="#home"
                label="Home"
                leftSection={<IconHome2 size="1rem" stroke={1.5} />}
                className="navLinks"
              />
            </Grid.Col>
            <Grid.Col span={{base: 12, sm: 12,md: 1.5, lg: 1.5, xl: 1}}>
              {" "}
              <NavLink
                href="#features"
                label="Features"
                leftSection={<IconStar size="1rem" stroke={1.5} />}
                className="navLinks"
              />
            </Grid.Col>
            <Grid.Col span={{base: 12, sm: 12, md: 1.25, lg: 1.25, xl: 1.25}}>
              {" "}
              <NavLink
                href="#about"
                label="About Us"
                leftSection={<IconUsersGroup size="1rem" stroke={1.5} />}
                className="navLinks"
              />
            </Grid.Col>
          </Grid>
        </Paper>
      </nav>
    </>
  );
}

export default Navbarpage;
