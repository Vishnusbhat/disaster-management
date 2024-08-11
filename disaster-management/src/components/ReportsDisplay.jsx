import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Image, VStack } from '@chakra-ui/react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const ReportsDisplay = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Disasters'));
        const reportsData = querySnapshot.docs.map(doc => doc.data());
        setReports(reportsData);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <Box p={4}>
      <Flex 
        overflowX="auto" 
        p={4} 
        spacing={4} 
        alignItems="center" 
        justifyContent="center"
      >
        {reports.map((report, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            width="400px" // Adjusted width for larger cards
            height="auto" // Auto height based on content
            mx={2} // Horizontal margin
          >
            {report.imageName && (
              <Image
                src={`gs://disaster-management-2bbc4.appspot.com/disasters${report.imageName}`}
                alt={report.title}
                objectFit="cover"
                width="100%"
                height="250px" // Increased height for images
              />
            )}
            <VStack p={4} align="start">
              <Text fontWeight="bold" fontSize="lg">{report.title}</Text>
              <Text>{report.description}</Text>
              <Text>Location: {report.latitude}, {report.longitude}</Text>
              <Text>UPI ID: {report.upiId}</Text>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ReportsDisplay;
