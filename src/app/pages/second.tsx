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
      <Flex
        direction={{ xs: "column", sm: "row" }}
        align='center'
        justify='center'
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Flex direction="column" justify="center" p={{xs: 30, sm: 50}} w='100%'>
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
              fontSize: "70px",
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
            Gain insights into my professional journey and the diverse
            experiences I&#39;ve accumulated over the years.
          </Text>
        </Flex>
        <Flex direction="column" justify="center"  p={{xs: 30, sm: 50}} w='100%'>
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
                June 2023 - June 2024
              </Text>
            </TimelineItem>
            <TimelineItem title="Currently looking for work">
              <Text c="dimmed" size="lg">
                Your company
              </Text>
              <Text size="md" mt={4}>
                June 2024 - Future
              </Text>
            </TimelineItem>
          </Timeline>
        </Flex>
      </Flex>
      <Flex
        align="center"
        px={20}
        style={{ background: "#2C2C2C", width: "100%", height: "5\\vh" }}
      ></Flex>
    </Flex>
  );
}
