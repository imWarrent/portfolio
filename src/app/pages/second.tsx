import {
  Box,
  Flex,
  Group,
  Stack,
  Text,
  Timeline,
  TimelineItem,
} from "@mantine/core";
import Link from "next/link";
export default function SecondPage() {
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
          width: '100vw'
        }}
        grow
      >
        <Flex direction="column" justify="center" p={50}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#2C2C2C",
              fontSize: "80px",
              lineHeight: "1",
            }}
          >
            WORK
          </Text>
          <Text
            style={{
              fontWeight: "normal",
              color: "#2C2C2C",
              fontSize: "80px",
              lineHeight: "1",
            }}
          >
            EXPERIENCE
          </Text>
          <Text
            mt={25}
            style={{
              fontWeight: "normal",
              color: "#2C2C2C",
              fontSize: "25px",
              lineHeight: "1",
            }}
          >
            Gain insights into my professional journey and the diverse experiences I&#39;ve accumulated over the years.
          </Text>
        </Flex>
        <Flex direction="column" justify="center">
          <Timeline
            active={1}
            bulletSize={24}
            lineWidth={4}
            color="#2C2C2C"
            styles={{ itemTitle: { fontSize: "25px" } }}
          >
            <TimelineItem title="Internship">
              <Text c="dimmed" size="lg">
                Cryptex Consulting Services Ltd Co.
              </Text>
              <Text size="md" mt={4}>
                February 2023 - May 2023
              </Text>
            </TimelineItem>
            <TimelineItem title="Software Developer Associate I">
              <Text c="dimmed" size="lg">
                Cryptex Consulting Services Ltd Co.
              </Text>
              <Text size="md" mt={4}>
                June 2023 - May 2024
              </Text>
            </TimelineItem>
            <TimelineItem title="Currently looking for work">
              <Text c="dimmed" size="lg">
                Your company
              </Text>
              <Text size="md" mt={4}>
                May 2024
              </Text>
            </TimelineItem>
          </Timeline>
        </Flex>
      </Group>
      <Flex
        align="center"
        px={20}
        style={{ background: "#2C2C2C", width: "100%", height: "5\\vh" }}
      ></Flex>
    </Flex>
  );
}
