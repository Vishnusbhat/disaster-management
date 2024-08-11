import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const FloatingActionButton = ({ onClick }) => {
  const size = useBreakpointValue({ base: 'md', md: 'lg' });
  const bottom = useBreakpointValue({ base: '10px', md: '20px' });
  const right = useBreakpointValue({ base: '10px', md: '20px' });

  return (
    <Box
      position="fixed"
      bottom={bottom}
      right={right}
      zIndex="1000"
    >
      <IconButton
        icon={<AddIcon />}
        aria-label="Add"
        size={size}
        colorScheme="teal"
        borderRadius="full"
        boxShadow="md"
        onClick={onClick}  // Ensure this prop is correctly used here
      />
    </Box>
  );
};

export default FloatingActionButton;
