import { Box, Divider, Text } from "@mantine/core";
import { IconGripVertical, IconTrash, IconPencil } from "@tabler/icons";

const FormControl = () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "128px",
        border: "1px solid",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Box
        style={{
          width: "64px",
          height: "100%",
          borderInlineEnd: "1px solid",
        }}
      >
        <IconGripVertical size={18} stroke={1.5} />
      </Box>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text> text </Text>
        <Text> text </Text>
        <Text> text </Text>
      </Box>
      <Box>
        <IconTrash size={18} stroke={1.5} />
        <IconPencil size={18} stroke={1.5} />

        <Divider orientation="vertical" />
      </Box>
    </Box>
  );
};

export default FormControl;
