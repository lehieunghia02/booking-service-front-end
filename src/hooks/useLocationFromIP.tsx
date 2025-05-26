import { useEffect, useState } from 'react';


export function useLocationFromIP() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch('https://ipinfo.io/json')
      .then((res) => res.json())
      .then((data) => {
        setLocation({
          city: data.city,
          region: data.region,
          country: data.country,
          ip: data.ip,
        });
      })
      .catch((err) => {
        console.error('Lỗi lấy vị trí qua IP:', err);
      });
  }, []);
  return location;
}
