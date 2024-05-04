import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Flex,
  Group,
  Text,
} from "@mantine/core";
import {
  IconCalendar,
  IconDeviceGamepad,
  IconDeviceGamepad2,
  IconMusic,
  IconShoppingBag,
} from "@tabler/icons-react";
import Link from "next/link";

const charactersList = [
  {
    id: "game",
    icon: <IconDeviceGamepad />,
    label: "Social Circle",
    description: "COVID19 Role Playing Game",
    content:
      "It is an Educational Role-Playing Game about our life during Global Pandemic, it will teach you safety protocols, and various information about corona viruses while doing some quest and enjoying its story. I used C# language to develop this game and different types of Unity Saving System like JSON, PlayerPrefs and etc. for player data.",
  },
  {
    id: "game2",
    icon: <IconDeviceGamepad2 />,
    label: "Math Quiz Game",
    description: "Mind games",
    content:
      "It is an Educational Game good for children that want to test their solving capabilities, they will answer a math problems and it gets harder for every level that they achieve,  I used C# language to develop this game and different types of Unity Saving System like JSON, PlayerPrefs and etc. for player data. I also used PlayFab for its Online Leaderboards.",
  },
  {
    id: "shoes",
    icon: <IconShoppingBag />,
    label: "Hyper Shoes",
    description: "Sales and Inventory System",
    content:
      "It is a Java System with Point of Sales and Inventory System, you can monitor your sales, stocks and users. the user can also print their receipt. I used Java for this application and MySQL for its database",
  },
  {
    id: "music",
    icon: <IconMusic />,
    label: "SpotiFINDS",
    description: "Music Application",
    content:
      "It is a Music Application where the user can search track, albums, playlist and artist and also lyrics. the user can also download the music. I used ReactJS for this application and Bootstrap for its design and Spotify from RapidAPI for its API.",
  },
  {
    id: "booking",
    icon: <IconCalendar />,
    label: "Event Booking System",
    description: "Music Application",
    content:
      "It is a Booking System where the client can choose the event package that they want and reserve a slot for it, the admin can accept or decline it. Admin can also monitor their sales, bookings and etc. I used Bootstrap, PHP, MySQL for this website.",
  },
];

export default function ThirdPage() {
  const items = charactersList.map((item) => (
    <AccordionItem value={item.id} key={item.label}>
      <AccordionControl icon={item.icon}>
        <Text style={{ fontSize: "20px" }}>{item.label}</Text>
      </AccordionControl>
      <AccordionPanel>
        <Text size="lg">{item.content}</Text>
      </AccordionPanel>
    </AccordionItem>
  ));

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{
        height: "auto",
        background: "#FEF7ED",
      }}
    >
      <Group
        style={{
          height: "100vh",
          width: "100vw",
        }}
        grow
      >
        <Flex direction="column" justify="center" pl={50}>
          <Flex
            mb={10}
            p={5}
            justify="center"
            align="center"
            style={{
              background: "white",
              width: "100%",
              border: "3px solid black",
            }}
          >
            <Text style={{ fontSize: "20px" }}>PROJECT LIST</Text>
          </Flex>
          <Accordion
            chevronPosition="right"
            variant="container"
            styles={{
              control: {
                background: "white",
              },
              panel: {
                background: "white",
              },
            }}
            style={{
              width: "100%",
              border: "3px solid black",
            }}
          >
            {items}
          </Accordion>
          <Link href={"https://github.com/imWarrent"} target="_blank">
            <Flex
              mt={10}
              p={5}
              justify="center"
              align="center"
              style={{
                background: "white",
                width: "100%",
                border: "3px solid black",
              }}
            >
              <Text style={{ fontSize: "20px" }}>
                VISIT MY <u>GITHUB ACCOUNT</u> FOR MORE !
              </Text>
            </Flex>
          </Link>
        </Flex>
        <Flex direction="column" align="flex-end" p={50}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#2C2C2C",
              fontSize: "80px",
              lineHeight: "1",
            }}
          >
            SAMPLE
          </Text>
          <Text
            style={{
              fontWeight: "normal",
              color: "#2C2C2C",
              fontSize: "80px",
              lineHeight: "1",
            }}
          >
            PROJECTS
          </Text>
          <Text
            mt={25}
            style={{
              fontWeight: "normal",
              color: "#2C2C2C",
              fontSize: "25px",
              lineHeight: "1",
              textAlign: "end",
            }}
          >
            Excited to share my work with you! You&#39;ll find a curated
            selection of projects that showcase my capabilities.
          </Text>
        </Flex>
      </Group>
      <Flex
        align="center"
        px={20}
        style={{ background: "#2C2C2C", width: "100%", height: "5vh" }}
      />
    </Flex>
  );
}
