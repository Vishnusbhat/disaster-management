import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Image, VStack } from '@chakra-ui/react';
import { db } from '../firebase'; // Make sure this is the correct path
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
        alignItems="center" 
        justifyContent="center"
      >
        {reports.map((report, index) => {
          const imageUrl = `https://firebasestorage.googleapis.com/v0/b/disaster-management-2bbc4.appspot.com/o/disasters%2F${encodeURIComponent(report.imageName)}?alt=media&token=190eee20-4125-4c53-8c71-8f61e36b8595`;

          // Log URL to debug
          console.log(`Image URL: ${imageUrl}`);

          return (
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
                  src={imageUrl}
                  alt={report.title}
                  objectFit="cover"
                  width="100%"
                  height="250px" // Increased height for images
                  fallbackSrc="https://via.placeholder.com/400x250" // Placeholder image if loading fails
                />
              )}
              <VStack p={4} align="start">
                <Text fontWeight="bold" fontSize="lg">{report.title}</Text>
                <Text>{report.description}</Text>
                <Text>Location: {report.latitude}, {report.longitude}</Text>
                <Text>UPI ID: {report.upiId}</Text>
              </VStack>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default ReportsDisplay;
