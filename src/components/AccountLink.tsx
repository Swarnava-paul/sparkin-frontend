
import React, { useState } from "react";
import { Box, Flex, Text, Input, VStack, HStack} from "@chakra-ui/react";
const AccountLink = () => {

  const [authMethod, setAuthMethod] = useState("accessKey");
  const [tags, setTags] = useState(["Production"]);
  const [tagInput, setTagInput] = useState("");

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <Flex direction="column" p={5} maxW="600px" mx="auto">
    {/* Account Name and AWS Account ID */}
    <HStack mb={5}>
      <Box flex="1">
        <Text mb={1}>Account Name</Text>
        <Input placeholder="e.g. Production AWS Account" />
      </Box>
      <Box flex="1">
        <Text mb={1}>AWS Account ID</Text>
        <Input placeholder="e.g. 123456789012" />
      </Box>
    </HStack>

    {/* Authentication Method */}
    <Box p={5} borderWidth="1px" borderRadius="md" mb={5}>
      <Text fontWeight="bold" mb={3}>Authentication Method</Text>
      <VStack align="start">
        <label>
          <input type="radio" name="authMethod" value="accessKey" checked={authMethod === "accessKey"} onChange={() => setAuthMethod("accessKey")} />
          Access Key & Secret
        </label>
        {authMethod === "accessKey" && (
          <HStack>
            <Input placeholder="Enter access key ID" />
            <Input placeholder="Enter secret access key" />
          </HStack>
        )}
        <label>
          <input type="radio" name="authMethod" value="roleBased" checked={authMethod === "roleBased"} onChange={() => setAuthMethod("roleBased")} />
          Role-based Access
        </label>
        {authMethod === "roleBased" && <Input placeholder="arn:aws:iam::123456789012:role/example-role" disabled={authMethod !== "roleBased"} />}
      </VStack>
    </Box>

    {/* Default Region */}
    <Box mb={5}>
      <Text mb={1}>Default Region</Text>
      <select>
        <option value="">Select Region</option>
        <option value="us-east-1">US East (N. Virginia)</option>
        <option value="us-west-2">US West (Oregon)</option>
      </select>
    </Box>

    {/* Tags */}
    <Box>
      <Text mb={1}>Tags (Optional)</Text>
      <HStack>
        {tags.map((tag, index) => (
          <span key={index} style={{ backgroundColor: "#3182CE", color: "white", padding: "5px 10px", borderRadius: "5px", marginRight: "5px" }}>
            {tag} <button onClick={() => removeTag(index)} style={{ marginLeft: "5px", background: "none", border: "none", color: "white", cursor: "pointer" }}>×</button>
          </span>
        ))}
      </HStack>
      <Input mt={2} placeholder="Add a tag and press Enter" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={addTag} />
    </Box>
  </Flex>
  )
}

export default AccountLink
