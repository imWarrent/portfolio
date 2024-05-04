import { Flex, Group, Text } from "@mantine/core";

const skills = [
  "JavaScript",
  "NodeJS",
  "Axios",
  "NestJS",
  "Prisma",
  "Novu",
  "ReactJS",
  "Tailwind",
  "Bootstrap",
  "Mantine",
  "MaterialUI",
  "NextJS",
  "C#",
  "PHP",
  "MeiliSearch",
  "Git",
  "SourceTree",
  "MariaDB",
  "MySQL",
  "MS Access",
  "PostgreSQL",
  "Firebase",
  "and a lil bit of Flutter."
];

export default function FourthPage() {
  const items = skills.map((item) => (
    <Flex
      key={item}
      justify="center"
      align="center"
      p={10}
      style={{
        background: "white",
        border: "2px solid black",
        borderRadius: "10px",
      }}
    >
      <Text size="25px">{item}</Text>
    </Flex>
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
            p={10}
            gap={10}
            wrap="wrap"
            style={{
              background: "white",
              border: "3px solid black",
              width: "100%",
            }}
          >
            {...items}
          </Flex>
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
            SKILLS
          </Text>
          <Text
            style={{
              fontWeight: "normal",
              color: "#2C2C2C",
              fontSize: "80px",
              lineHeight: "1",
            }}
          >
            SECTION
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
            Provides a snapshot of the technical and professional abilities I
            bring to the table. I&#39;m a fast learner and constantly seeking
            opportunities to expand my knowledge base, ensuring I can adapt and
            contribute effectively in dynamic environments.
          </Text>
        </Flex>
      </Group>
    </Flex>
  );
}
