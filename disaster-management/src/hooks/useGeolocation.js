import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const onSuccess = (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      };

      const onError = (error) => {
        setError(error.message);
      };

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return { coordinates, error };
};

export default useGeolocation;
